const { Category } = require('../models');

const categoryValidation = (req, res) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }
  categoryIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      res.status(400).json({ message: '"categoryIds" not found' });
    }
  });
};

module.exports = categoryValidation;