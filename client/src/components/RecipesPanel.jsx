import React from 'react';
import RecipeList from './RecipeList.jsx';

const RecipesPanel = ({ recipes, handleRecipeClick }) => {
  return (
    <section className='container recipes-panel'>
      <RecipeList
        recipes={recipes}
        handleRecipeClick={handleRecipeClick}
      />
    </section>




        // <ul className='recipe-list'>
        //   {props.recipes.map((recipe) => {
        //     return (
        //       <RecipeListItem
        //         key={recipe._id}
        //         name={recipe.name}
        //         handleRecipeClick={props.handleRecipeClick}
        //       />
        //     )
        //   })}
        // </ul> :
        // <h1>Loading...</h1>}
  )
};

export default RecipesPanel;