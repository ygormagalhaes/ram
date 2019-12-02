const Character = require('../models/character');
const Sequelize = require('sequelize');

function updateDatabase(data) {
  Character.bulkCreate(data, { ignoreDuplicates: true });
}

function getAllCharacters({ order, character }) {
  const queryOptions = {};
  if (order) {
    queryOptions.order = [
      [order, 'ASC'],
    ];
  }
  if (character) {
    queryOptions.where = {
      character: {
        [Sequelize.Op.like]: `%${character}%`,
      },
    };
  }
  return Character.findAll(queryOptions);
}

module.exports = { updateDatabase, getAllCharacters };
