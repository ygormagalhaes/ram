const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./src/routes/index');
const swaggerRouter = require('./src/routes/api-docs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api-docs', swaggerRouter);

function initApp() {
  app.listen(3000, () => {
    console.log('Rick and Morty app started on port 3000!');
  });
}

module.exports = { app, initApp };
