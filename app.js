const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const schedule = require('node-schedule');
const CharacterDAO = require('./dao/character.dao');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

schedule.scheduleJob('0 0 0/8 ? * * *', () => {
  console.log('Updating database.');
  CharacterDAO.updateDatabase(); // TODO: Continue...
});

app.listen(3000, () => {
  console.log('Rick and Morty app started on port 3000!');
});

module.exports = app;
