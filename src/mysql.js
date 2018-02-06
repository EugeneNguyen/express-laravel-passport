const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoubotenken', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;