const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;
  const post = await PostService.createPost({ title, content, categoryIds, userId });
  return res.status(201).json(post);
};

const getAll = async (req, res) => {
  const posts = await PostService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAll,
};
