const express = require('express');
const router = express.Router();
const homeController = require('./homeController');

router.get('/:page', homeController.index);
// router.get('/search', homeController.searchTag);
router.get('/', homeController.index);

module.exports = router;