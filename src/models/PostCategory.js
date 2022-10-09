module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  },
  {
    timestamps: true,
    underscored: true,
    tableName: 'posts_categories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId'
      }
    );
    models.Category.belongsToMany(
      models.BlogPost,
      { as: 'blog_posts',
        trhough: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      }
    );
  }

  return PostCategory;

};