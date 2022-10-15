const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  const post = await PostService.createPost({ title, content, categoryIds, userId });
  return res.status(200).json(post);
};

module.exports = {
  createPost,
};
