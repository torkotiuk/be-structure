const express = require('express');
const router = express.Router();
const { productsControllers: ctrl } = require('../controllers');

router.get('/', ctrl.getAllProductsCTRL);
router.post('/', ctrl.addProductCTRL);
router.get('/:id', ctrl.getProductByIdCTRL);
router.put('/:id', ctrl.updateProductCTRL);
router.delete('/:id', ctrl.deleteProductCTRL);

module.exports = router;
