const express = require('express');
const { CategoryController } = require('../controllers');
const { authToken } = require('../middlewares/authentication.token');

const router = express.Router();

router.post('/', authToken, CategoryController.createCategory);

module.exports = router;