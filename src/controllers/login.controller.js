const { LoginService } = require('../services');
const { generateToken } = require('../middlewares/generate.token');

const getByEmail = async (req, res) => {
  const { email, password } = req.body;
  const user = await LoginService.getByEmail(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  console.log('gerar o token');
  const token = generateToken(email);
  return res.status(200).json({ token });
};

module.exports = {
  getByEmail,
};