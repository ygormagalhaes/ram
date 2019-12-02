const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./src/routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

function initApp() {
  app.listen(3000, () => {
    console.log('Rick and Morty app started on port 3000!');
  });
}

module.exports = { app, initApp };
