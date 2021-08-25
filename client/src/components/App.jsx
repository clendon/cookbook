import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import RecipesPanel from './RecipesPanel.jsx';
import RecipeView from './RecipeView.jsx';

const App = () => {
  const [ recipes, setRecipes ] = useState();
  const [ displayRecipe, setDisplayRecipe ] = useState();

  useEffect(() => {
    axios.get('/get-recipes')
      .then((response) => { setRecipes(response.data) })
      .catch((error) => { console.error(error) });
  }, [])

  const handleRecipeClick = (event) => {
    console.log(event.target.id);
  }

  return (
    <div className='app'>
      <Header />
      <RecipesPanel recipes={recipes} handleRecipeClick={handleRecipeClick}/>
      <RecipeView />
    </div>
  )
};

export default App;