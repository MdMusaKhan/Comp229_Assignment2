const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/',  productController.addProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.removeProductById);
router.delete('/', productController.removeAllProducts);
router.get('/search/:name', productController.findProductsByName);

module.exports = router;