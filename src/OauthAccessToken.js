const Sequelize = require('sequelize');
const sequelize_object = require('./mysql');

const OauthAccessToken = sequelize_object.define('oauth_access_tokens', {
  user_id: Sequelize.INTEGER
}, {
  timestamps: false
});

module.exports = OauthAccessToken;