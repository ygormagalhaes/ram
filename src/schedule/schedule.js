const schedule = require('node-schedule');
const CharacterBusiness = require('../business/character.business');
const CharacterDAO = require('../dao/character.dao');

const schedulePeriod = {
  every8Hours: '0 */8 * * *',
};

function setScheduledDatabaseUpdate() {
  console.log('Setting up scheduled database update.');
  schedule.scheduleJob(schedulePeriod.every8Hours, () => {
    console.log('Updating database.');
    CharacterBusiness.getStructuredData().then((data) => {
      CharacterDAO.updateDatabase(data);
      console.log('Finishing database update.');
    });
  });
}

module.exports = { setScheduledDatabaseUpdate };
