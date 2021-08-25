const Recipe = require('../models/recipe.js');

const getRecipes = () => {
  return Recipe.find()
    .then(results => results)
    .catch(error => error);
}

module.exports = getRecipes;
