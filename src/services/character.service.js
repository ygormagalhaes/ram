const CharacterDAO = require('../dao/character.dao');

async function getCharacterList(queryParams) {
  const characterList = await CharacterDAO.getAllCharacters(queryParams);
  return characterList;
}

module.exports = { getCharacterList };
