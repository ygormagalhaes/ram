const express = require('express');

const router = express.Router();

const CharacterService = require('../services/character.service');


router.get('/', async (req, res) => {
  const queryParams = {
    order: req.query.order,
    character: req.query.character,
  };
  const characterList = await CharacterService.getCharacterList(queryParams);
  res.json(characterList);
});

module.exports = router;
