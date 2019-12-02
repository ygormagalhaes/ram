const { getLocations, getCharacters } = require('../services/api.service');

async function getStructuredData() {
  const locations = await getLocations();
  const characters = await getCharacters();
  const structuredData = Array(characters.length).fill(undefined);
  structuredData.forEach((value, index, list) => {
    list[index] = {
      id: characters[index].id,
      character: characters[index].name,
      image: characters[index].image,
      dimensionsCount: 0,
    };
  });
  characters.forEach((character, index) => {
    locations.forEach(location => {
      if (location.residents.includes(character.url)) {
        structuredData[index].dimensionsCount++;
      }
    });
  });
  return structuredData;
}

module.exports = { getStructuredData };
