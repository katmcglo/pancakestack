import React from 'react';
import classes from './PancakeStack.module.css';
import PancakeIngredient from './PancakeIngredient';

const pancakeStack = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
  .map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <PancakeIngredient key={ingredientKey + i} type={ingredientKey} />
    });
  })
  .reduce((array, element) => {
    return array.concat(element)
  }, [])
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  console.log(transformedIngredients);
  return(
    <div className={classes.PancakeStack}>
      <PancakeIngredient type="bread-top" />
      {transformedIngredients}
      <PancakeIngredient type="bread-bottom" />
    </div>
  );
};

export default pancakeStack;