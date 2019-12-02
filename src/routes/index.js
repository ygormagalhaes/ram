const express = require('express');

const router = express.Router();

const CharacterService = require('../services/character.service');

/**
 * @typedef Character
 * @property {integer} id
 * @property {string} character - Character's name
 * @property {string} image - Character's image
 * @property {integer} dimensionsCount - Dimensions count
 */
/**
 * Retorna a lista de personanges com o número de 
 * @route GET /
 * @param {string} order.query - Field name to order - eg: id, character...
 * @param {string} character.query - Character's name
 * @returns {Array.<Character>} 200 - An array of characters
 */
router.get('/', async (req, res) => {
  const queryParams = {
    order: req.query.order,
    character: req.query.character,
  };
  const characterList = await CharacterService.getCharacterList(queryParams);
  res.json(characterList);
});

module.exports = router;
