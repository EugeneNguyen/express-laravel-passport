const Sequelize = require('sequelize');

const OauthAccessToken = function (sequelize_object) {
  return sequelize_object.define('oauth_access_tokens', {
    user_id: Sequelize.INTEGER
  }, {
    timestamps: false
  });
}

module.exports = OauthAccessToken;