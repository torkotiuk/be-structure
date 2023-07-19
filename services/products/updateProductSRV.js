const { Product } = require('../../models');

const updateProductSRV = async (id, body) => {
  try {
    return await Product.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = updateProductSRV;
