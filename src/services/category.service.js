const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newPost = await Category.create({ name });
  return newPost;
};

module.exports = {
  createCategory,
};