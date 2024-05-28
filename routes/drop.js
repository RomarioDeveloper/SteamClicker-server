const express = require('express');
const router = express.Router();
const dropController = require('../controllers/dropController');
const authenticate = require('../middlewares/authenticate');

router.post('/drop-item', authenticate, dropController.dropItem);

module.exports = router;
