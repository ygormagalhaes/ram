const request = require('request-promise');

const API_URL = 'https://rickandmortyapi.com/api/';

// TODO: Criar teste para função
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

module.exports = { getLocations, getCharacters };
