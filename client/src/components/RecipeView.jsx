import React from 'react';

const RecipeView = () => {
  return (
    <section className='container recipe-view'>
      <h1 className='recipe-name-title'>Recipe Name</h1>
      <h2 className='ingredients-title'>Ingredients</h2>
      <h2 className='steps-title'>Steps</h2>
      <ol className='steps-list'>
        <li>Step</li>
        <li>Step</li>
        <li>Step</li>
        <li>Step</li>
      </ol>
      <h2 className='tips-title'>Tips</h2>
    </section>
  )
};

export default RecipeView;