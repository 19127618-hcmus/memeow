const express = require('express');
const router = express.Router();
const homeApi = require('./home/index');

router.use('/home', homeApi);

module.exports = router;