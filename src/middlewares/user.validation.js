const userValidation = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const minCharacters = 8;
  if (displayName.length < minCharacters) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }  
  const regexEmail = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const minCharactersPassword = 6;
  if (password.length < minCharactersPassword) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  return next();
};

module.exports = userValidation;