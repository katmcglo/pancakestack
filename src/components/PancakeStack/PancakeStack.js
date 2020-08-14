import React from 'react';
import classes from './PancakeStack.module.css';
import PancakeIngredient from './PancakeIngredient';

const pancakeStack = (props) => {
  return(
    <div className={classes.PancakeStack}>
      <PancakeIngredient type="bread-top" />
      <PancakeIngredient type="meat" />
      <PancakeIngredient type="salad" />
      <PancakeIngredient type="cheese" />
      <PancakeIngredient type="meat" />
      <PancakeIngredient type="salad" />
      <PancakeIngredient type="bacon" />
      <PancakeIngredient type="bread-bottom" />
    </div>
  );
};

export default pancakeStack;