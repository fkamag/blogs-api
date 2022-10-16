const { PostService } = require('../services');
const { BlogPost } = require('../models');

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

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getById({ id });
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const putById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { userId } = req.user;
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  if (userId !== post.userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const updated = await PostService.putById(id, { title, content });
  return res.status(200).json(updated);
};

module.exports = {
  createPost,
  getAll,
  getById,
  putById,
};
