// controllers/categoriesController.js
const Categories = require('../models/categories');

const categoryByID = async (req, res, next, id) => { 
  try {
    const category = await Categories.findById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    req.category = category; // Attach category to request object for future use
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Invalid category ID' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCategory = async (req, res) => {
  try {
    const newCategory = await Categories.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  res.json(req.category);
};

const updateCategoryById = async (req, res) => {
  try {
    const updatedCategory = await Categories.findByIdAndUpdate(req.category._id, req.body, { new: true });
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update category' });
  }
};

const removeCategoryById = async (req, res) => {
  try {
    await req.category.remove();
    res.json({ message: 'Category removed successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to remove category' });
  }
};

const removeAllCategories = async (req, res) => {
  try {
    await Categories.deleteMany({});
    res.json({ message: 'All categories removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findCategoriesByName = async (req, res) => {
  const name = String(req.params.name);
  try {
    const categories = await Categories.find({ name: { $regex: name, $options: 'i' } });
    if (categories.length === 0) {
      res.status(404).json({ error: 'No categories found matching the search criteria.' });
    } else {
      res.json(categories);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  categoryByID,
  getAllCategories,
  addCategory,
  getCategoryById,
  updateCategoryById,
  removeCategoryById,
  removeAllCategories,
  findCategoriesByName
};
