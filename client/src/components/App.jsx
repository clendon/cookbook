import React from 'react';
import Header from './Header.jsx';
import RecipeListView from './RecipeListView.jsx';
import RecipeView from './RecipeView.jsx';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <RecipeListView />
      <RecipeView />
    </div>
  )
};

export default App;