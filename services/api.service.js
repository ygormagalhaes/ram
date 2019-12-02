const request = require('request-promise');

const API_URL = 'https://rickandmortyapi.com/api/';

const Character = require('../models/character');

async function extractDataFromAllPages(locationBaseURL) {
  let data = await request(locationBaseURL);
  data = JSON.parse(data);
  const nextPages = Array(data.info.pages - 1).fill(data.info.next, 0, 1);
  const locations = data.results;
  // eslint-disable-next-line no-restricted-syntax
  for (const [index, currentPage] of nextPages.entries()) {
    const nextPageStringData = await request(currentPage);
    const nextPageData = JSON.parse(nextPageStringData);
    const nextPageURL = nextPageData.info.next;
    if (nextPageURL) {
      nextPages[index + 1] = nextPageURL;
    }
    locations.push(...nextPageData.results);
  }
  return locations;
}

async function getLocations() {
  const locationBaseURL = `${API_URL}location/`;
  const locations = await extractDataFromAllPages(locationBaseURL);
  return locations;
}

async function getCharacters() {
  const locationBaseURL = `${API_URL}character/`;
  const locations = await extractDataFromAllPages(locationBaseURL);
  return locations;
}

async function getStructuredData() {
  const locations = await getLocations();
  const characters = await getCharacters();
  const structuredData = Array(characters.length).fill(undefined);
  structuredData.forEach((value, index, list) => {
    list[index] = {
      id: characters[index].id,
      character: characters[index].name,
      image: characters[index].image,
      dimensionsCount: 0
    };
  });
  characters.forEach((character, index) => {
    locations.forEach(location => {
      if (location.residents.includes(character.url)) {
        structuredData[index].dimensionsCount++;
      }
    });
  });
  Character.sync({force: true}).then(() => {
    return Character.bulkCreate(structuredData, {returning: true});
  });
  return structuredData.sort((a, b) => {
    if (a.dimensionsCount > b.dimensionsCount) {
      return 1;
    }
    if (a.dimensionsCount < b.dimensionsCount) {
      return -1;
    }
    return 0;
  });
}

module.exports = { getStructuredData };
