module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  });

  return Category;
};