// routes/categoriesRoutes.js
const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.param('id', categoriesController.categoryByID);

router.get('/', categoriesController.getAllCategories);
router.post('/', categoriesController.addCategory);
router.get('/:id', categoriesController.getCategoryById);
router.put('/:id', categoriesController.updateCategoryById);
router.delete('/:id', categoriesController.removeCategoryById);
router.delete('/', categoriesController.removeAllCategories);
router.get('/search/:name', categoriesController.findCategoriesByName);

module.exports = router;
