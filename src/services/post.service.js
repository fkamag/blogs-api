const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  createPost,
};