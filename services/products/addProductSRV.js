const { Product } = require('../../models');

const addProductSRV = newProductObj => {
  return Product.create(newProductObj);
};

module.exports = addProductSRV;
