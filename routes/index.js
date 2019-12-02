const express = require('express');

const router = express.Router();
const api = require('../services/api.service');

const Character = require('../models/character');

router.get('/', async (req, res) => {
  const connection = require('../connection/connection');
  console.log(connection);
  const responseData = await api.getStructuredData();
  res.json(responseData);
});

router.get('/foo', async (req, res) => {
  const data = await Character.findAll();
  res.json(data);
});

module.exports = router;
