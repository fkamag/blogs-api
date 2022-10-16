const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = ({ email, userId }) => {
  const payload = { email, userId };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};