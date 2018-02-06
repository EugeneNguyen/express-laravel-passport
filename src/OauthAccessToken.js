const Sequelize = require('sequelize');
const sequelize = require('./mysql');

const OauthAccessToken = sequelize.define('oauth_access_tokens', {
  user_id: Sequelize.INTEGER
}, {
  timestamps: false
});

module.exports = OauthAccessToken;