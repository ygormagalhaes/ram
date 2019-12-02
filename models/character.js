const Sequelize = require('sequelize');
const connection = require('../connection/connection');

const Character = connection.define('character', {
  id: {
    field: 'id',
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  character: {
    field: 'character',
    type: Sequelize.STRING,
  },
  image: {
    field: 'image',
    type: Sequelize.STRING,
  },
  dimensionsCount: {
    field: 'dimensionsCount',
    type: Sequelize.INTEGER,
  },
});

module.exports = Character;
