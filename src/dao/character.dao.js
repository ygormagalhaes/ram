const Character = require('../models/character');

function updateDatabase(data) {
  Character.bulkCreate(data, { ignoreDuplicates: true });
}

module.exports = { updateDatabase };
