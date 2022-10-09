module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: true,
    underscored: true,
    tableName: 'blog_posts'
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User, 
      { foreignKey: 'userId', as: 'user' }
    )
  }

  return BlogPost;
};