const { initApp } = require('./app');
const scheduleTasks = require('./src/schedule/schedule');

scheduleTasks.setScheduledDatabaseUpdate();

initApp();
