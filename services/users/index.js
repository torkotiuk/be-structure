const getAllUsersSRV = require('./getAllSRV');
const getUserByIdSRV = require('./getUserByIdSRV');
const deleteUserSRV = require('./deleteUserSRV');
const findUser = require('./findUserSRV');
const addUser = require('./addUserSRV');
const updateUserByIdSRV = require('./updateUserByIdSRV');

module.exports = {
  addUser,
  getAllUsersSRV,
  getUserByIdSRV,
  findUser,
  updateUserByIdSRV,
  deleteUserSRV,
};
