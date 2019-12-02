const express = require('express');

const router = express.Router();

const swaggerUi = require('swagger-ui-express');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup('../swagger.json'));

module.exports = router;
