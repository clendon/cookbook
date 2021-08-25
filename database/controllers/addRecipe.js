const Recipe = require('../models/recipe.js');

const addRecipe = (recipeData) => {
  return Recipe.create(recipeData)
    .then(results => results)
    .catch(error => error);
};

module.exports = addRecipe;
