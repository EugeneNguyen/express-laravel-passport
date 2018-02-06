const jwt = require('jsonwebtoken');
const OauthAccessToken = require('./OauthAccessToken');

exports.default = async function passport_middleware(request, response, next) {
  const { headers } = request;
  if (headers.authorization) {
    const authorization = headers.authorization;
    const comp = authorization.split(' ');
    if (comp.length == 2 && comp[0] == 'Bearer') {
      const token = comp[1];
      const { jti } = jwt.decode(token);

      const access_token = await OauthAccessToken.findById(jti);
      request.user_id = access_token.user_id
    }
  }
  next();
}