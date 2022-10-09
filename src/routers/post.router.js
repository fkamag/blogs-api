const express = require('express');
const { PostController } = require('../controllers');
const { authToken } = require('../middlewares/authentication.token');

const router = express.Router();

router.post('/', authToken, PostController.createPost);

module.exports = router;