const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController')

router.post('/',mainController.create);
router.get('/',mainController.getInfo);

module.exports = router;
