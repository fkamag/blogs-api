const { BlogPost } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds });
  return newPost;
};

module.exports = {
  createPost,
};