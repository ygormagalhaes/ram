const Sequelize = require('sequelize');

const connection = new Sequelize('database', 'root', 'root', {
  dialect: 'sqlite',
  storage: 'database/database.sqlite',
});

module.exports = connection;
