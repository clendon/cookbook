const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  shortName: String,
  longName: String,
  ingredients: Array,
  steps: Array,
  tips: String,
  photoURL: String
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
