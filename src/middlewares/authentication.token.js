const jwt = require('jsonwebtoken');
require('dotenv').config();
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const { email } = decoded;
    const user = await UserService.getByEmail(email);
    console.log(user);
    if (user.dataValues.email !== email) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};