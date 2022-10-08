const express = require('express');

const { userController } = require('../controllers');
const { authToken } = require('../middlewares/authentication.token');
const userValidation = require('../middlewares/user.validation');

const router = express.Router();

router.post('/', userValidation, userController.createUser);

router.get('/', authToken, userController.getAll);

router.get('/:id', authToken, userController.getById);

module.exports = router;