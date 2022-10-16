const { BlogPost, PostCategory, User, Category } = require('../models');

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

module.exports = {
  createPost,
  getAll,
  getById,
};