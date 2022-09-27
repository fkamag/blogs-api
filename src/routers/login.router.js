const express = require('express');

const { LoginController } = require('../controllers');
const loginValidation = require('../middlewares/login.validation');

const router = express.Router();

router.post('/', loginValidation, LoginController.getByEmail);

module.exports = router;