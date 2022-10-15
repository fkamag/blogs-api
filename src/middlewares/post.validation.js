const postValidation = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || title.length === 0 || !content || content.length === 0) {
    res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = postValidation;