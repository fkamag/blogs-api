const jwt = require('jsonwebtoken');
require('dotenv').config();
const { UserService } = require('../services');

const secret = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token is required' });
  }
  const decoded = jwt.verify(token, secret);
  const { email } = decoded;
  console.log(email);
  const user = await UserService.getByEmail(email);
  console.log(user);
  if (!user) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  next();
};

module.exports = {
  authToken,
};