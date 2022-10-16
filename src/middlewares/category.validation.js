const { CategoryService } = require('../services');

const categoryValidation = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const categories = await CategoryService.getAllById(categoryIds);
  if (categories.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = categoryValidation;