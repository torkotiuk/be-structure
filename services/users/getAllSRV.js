const { User } = require('../../models');

const getAllUsersSRV = async () => {
  return User.find({});
};

module.exports = getAllUsersSRV;
