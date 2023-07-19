const { productServices: service } = require('../../services');

const deleteProductCTRL = async (req, res, next) => {
  try {
    const result = await service.deleteProductSRV(req.params.id);

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
      messageStart: 'Item',
      result,
      messageEnd: 'deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteProductCTRL;
