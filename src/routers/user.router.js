const express = require('express');

const userController = require('../controllers/user.controller');
const userValidation = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidation, userController.createUser);

module.exports = router;