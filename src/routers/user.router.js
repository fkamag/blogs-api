const express = require('express');

const { userController } = require('../controllers');
const userValidation = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidation, userController.createUser);

router.get('/', userController.getAll);

module.exports = router;