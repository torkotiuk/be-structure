const { Product } = require('../../models');

const getProductByIdSRV = async id => {
  try {
    return await Product.findById(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = getProductByIdSRV;
