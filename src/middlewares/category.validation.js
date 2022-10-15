const categoryValidation = (req, res) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds.length === 0) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }
};

module.exports = categoryValidation;