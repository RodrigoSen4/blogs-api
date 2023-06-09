const { User } = require('../models');

const getUser = async ({ email }) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserById = async (id) => {
  const userById = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  
  return userById;
};

module.exports = {
  createUser,
};

module.exports = { getUser, createUser, getAllUsers, getUserById };