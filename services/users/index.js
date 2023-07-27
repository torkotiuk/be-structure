const getAllUsersSRV = require('./getAllSRV');
const getUserByIdSRV = require('./getUserByIdSRV');
const deleteUserSRV = require('./deleteUserSRV');
const findUser = require('./findUserSRV');
const addUser = require('./addUserSRV');

module.exports = {
  addUser,
  getAllUsersSRV,
  getUserByIdSRV,
  findUser,
  deleteUserSRV,
};
