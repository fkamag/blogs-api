const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  // const post = await CategoryService.getByEmail(email);
  // if (user) {
  //   return res.status(409).json({ message: 'User already registered' });
  // }
  const newCategory = await CategoryService.createCategory({ name });
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};