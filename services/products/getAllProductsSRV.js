const { Product } = require('../../models');

const getAllProductsSRV = () => {
  return Product.find({});
};

module.exports = getAllProductsSRV;
