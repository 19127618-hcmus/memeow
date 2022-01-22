const express = require('express');
const router = express.Router();
const homeApiController = require('./homeApiController');

router.post('/copy/:slug', homeApiController.addCopy);

router.post('/save/:slug', homeApiController.addSave);


module.exports = router;