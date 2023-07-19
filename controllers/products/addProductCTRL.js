const { productServices: service } = require('../../services');

const addProductCTRL = async (req, res, next) => {
  try {
    const result = await service.addProductSRV(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: { result },
    });
  } catch (error) {
    if (error.code === 11000) {
      error.code = 400;
    }
    next(error);
  }
};

module.exports = addProductCTRL;
