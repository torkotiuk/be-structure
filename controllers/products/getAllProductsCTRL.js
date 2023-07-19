const { productServices: service } = require('../../services');

const getAllProductsCTRL = async (req, res, next) => {
  try {
    const result = await service.getAllProductsSRV();
    res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllProductsCTRL;
