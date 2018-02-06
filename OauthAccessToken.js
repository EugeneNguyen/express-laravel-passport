import Sequelize from 'sequelize';
import sequelize from './mysql';

const OauthAccessToken = sequelize.define('oauth_access_tokens', {
  user_id: Sequelize.INTEGER
}, {
  timestamps: false
});

export default OauthAccessToken;