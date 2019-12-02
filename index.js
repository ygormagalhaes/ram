const { initApp } = require('./app');
const scheduleTasks = require('./src/schedule/schedule');
const swaggerSetup = require('./src/swagger');

scheduleTasks.setScheduledDatabaseUpdate();
swaggerSetup();

initApp();
