import React from 'react';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return (
    <div className='recipes-list'>
      <h1 className='recipes-title'>Recipes</h1>
      <ul className='recipe-list'>
        {recipes
          ? recipes.map((recipe) => <RecipeListItem
            recipe={recipe}
            key={recipe._id}
            handleRecipeClick={handleRecipeClick} />)
          : <li>No recipes yet!</li>}
      </ul>
    </div>
  )
}

export default RecipeList;