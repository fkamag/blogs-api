const express = require('express');
const { PostController } = require('../controllers');
const { authToken } = require('../middlewares/authentication.token');
const postValidation = require('../middlewares/post.validation');
const categoryValidation = require('../middlewares/category.validation');

const router = express.Router();

router.post('/', authToken, postValidation, categoryValidation, PostController.createPost);

router.get('/search', authToken, PostController.searchPost);

router.get('/', authToken, PostController.getAll);

router.get('/:id', authToken, PostController.getById);

router.put('/:id', authToken, postValidation, PostController.putById);

router.delete('/:id', authToken, PostController.deleteById);

module.exports = router;