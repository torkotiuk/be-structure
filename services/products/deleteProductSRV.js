const { Product } = require('../../models');

const deleteProductSRV = async id => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = deleteProductSRV;
