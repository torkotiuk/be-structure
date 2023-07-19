const { productServices: service } = require('../../services');

const updateProductCTRL = async (req, res, next) => {
  try {
    const result = await service.updateProductSRV(req.params.id, req.body);

    // - - - if id doesn't exist
    if (!result) {
      return res.status(404).json({
        status: 'fail',
        code: 404,
        message: `Not Found`,
      });
    }
    // - - -

    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProductCTRL;
