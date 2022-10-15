const { Category } = require('../models');

const categoryValidation = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  categoryIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
  });
  next();
};

module.exports = categoryValidation;