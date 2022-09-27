const { User } = require('../models');

const getByEmail = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = {
  getByEmail,
};