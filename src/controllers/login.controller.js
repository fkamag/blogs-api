const { LoginService } = require('../services');
const { generateToken } = require('../middlewares/generate.token');

const getByEmail = async (req, res) => {
  const { email, password } = req.body;
  const user = await LoginService.getByEmail(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const userId = user.id;
  const token = generateToken({ email, userId });
  return res.status(200).json({ token });
};

module.exports = {
  getByEmail,
};