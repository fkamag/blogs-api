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
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (!q) return posts;
  console.log(posts);
//   const { content } = await PostService.searchPost();
  const result = [];
  const result1 = posts.filter((item) => item.title.includes(q));
  console.log(result1);
  result.push(result1);
  const result2 = posts.filter((item) => item.content.includes(q));
  result.push(result2);
  console.log(result);
};

module.exports = {
  createPost,
  getAll,
  getById,
  putById,
  deleteById,
  searchPost,
};