const express = require('express');
const router = express.Router();
const menuController = require('./menuController');

router.get('/user', menuController.library);
router.get('/library', menuController.library);
router.get('/contribute', menuController.library);

module.exports = router;