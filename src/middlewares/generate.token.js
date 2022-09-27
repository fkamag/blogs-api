const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'batatinha123';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (email) => {
  const payload = { email };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};