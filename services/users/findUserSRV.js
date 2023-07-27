const { User } = require('../../models');

const findUser = filter => {
  return User.findOne(filter);
};

module.exports = findUser;
