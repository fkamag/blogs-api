const { UserService } = require('../services');
const { generateToken } = require('../middlewares/generate.token');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await UserService.getByEmail(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  await UserService.createUser({ displayName, email, password, image });
  const token = generateToken(email);
  return res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getAll,
};