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

const getAllById = async (categoryIds) => {
  const categories = await Category.findAll({
    where: {
      id: [...categoryIds],
    },
  });

  return categories;
};

module.exports = {
  createCategory,
  getAll,
  findById,
  getAllById,
};