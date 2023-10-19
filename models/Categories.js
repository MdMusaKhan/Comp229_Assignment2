const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
  name: String,
  
});

const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories;
