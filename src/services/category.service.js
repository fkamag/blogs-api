const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const newPost = await Category.create({ name });
  return newPost;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const findById = async ({ id }) => {
  const category = await Category.findByPk(id);
  return category;
};

module.exports = {
  createCategory,
  getAll,
  findById,
};