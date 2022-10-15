const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);
const { BlogPost, PostCategory } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  // const t = await sequelize.transaction();
  // try {
    const newPost = await BlogPost.create(
      { title, content, userId },
    );
    console.log('Posto Cadastrado com sucesso:', newPost);
    await Promise.all(categoryIds.map(
      (categoryId) => PostCategory.create(
        { postId: newPost.dataValues.id, categoryId },
      ),
    ));
    return newPost;
  // } catch (err) {
  //   console.error(err);
  //   await t.rollback();
  //   return err;
  // }
};

module.exports = {
  createPost,
};