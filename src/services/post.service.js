const Sequelize = require('sequelize');

const { Op } = Sequelize;
const { BlogPost, PostCategory, User, Category } = require('../models');
// https://stackoverflow.com/questions/53971268/node-sequelize-find-where-like-wildcard
// https://stackoverflow.com/questions/20695062/sequelize-or-condition-object

const createPost = async ({ title, content, categoryIds, userId }) => {
  const newPost = await BlogPost.create(
    { title, content, userId },
  );
  await Promise.all(categoryIds.map(
    async (categoryId) => PostCategory.create(
      { postId: newPost.dataValues.id, categoryId },
    ),
  ));
  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getById = async ({ id }) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const putById = async (id, { title, content }) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  const updated = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  console.log(updated);
  return updated;
};

const deleteById = async (id) => {
  const removed = await BlogPost.destroy({ where: { id } });
  return removed;
};

const searchPost = async (q) => {
  if (q === '') {
    const posts = await BlogPost.findAll({ include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    return posts;
  }
  const result = await BlogPost.findAll({
    where: { [Op.or]: { title: { [Op.like]: `%${q}%` }, content: { [Op.like]: `%${q}%` } } },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
  });
  return result;
};

module.exports = {
  createPost,
  getAll,
  getById,
  putById,
  deleteById,
  searchPost,
};