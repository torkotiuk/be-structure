const { userServices: service } = require('../../services');

const getAllUsersCTRL = async (req, res, next) => {
  try {
    const result = await service.getAllUsersSRV();

    res.json({
      status: 'success',
      code: 200,
      data: { result },
    });
  } catch (error) {}
};

module.exports = getAllUsersCTRL;
