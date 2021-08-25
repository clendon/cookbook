import React from 'react';

const RecipeListItem = ({ recipe, handleRecipeClick }) => {
  return (
    <li onClick={handleRecipeClick} id={recipe._id} >{recipe.shortName}</li>
  )
};

export default RecipeListItem;
