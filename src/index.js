const jwt = require('jsonwebtoken');

/*
 * Adding 'secret' parameter during setup/initialization of `passport` instance.
 * All future token sent to this server, will be verified using this key.
 */
module.exports = function (sequelize, secret) {
  const OauthAccessToken = require('./OauthAccessToken')(sequelize);
  
  return async function passport_middleware(request, response, next) {
    const { headers } = request;
    if (headers.authorization) {
      const authorization = headers.authorization;
      const comp = authorization.split(' ');
      if (comp.length == 2 && comp[0] == 'Bearer') {
        const token = comp[1];
        /* Before we can assign the user id, we need to make sure the token
         * is properly signed. This will mitigate the improper authentication
         * attempts.
         */
        jwt.verify(token, secret, function(err, data) {
          if (err)
          {
            response.status(401).json({ error: err });
          }
        });
        const { jti } = jwt.decode(token);
        const access_token = await OauthAccessToken.findById(jti);
        request.user_id = access_token.user_id
      }
    }
    next();
  }
}