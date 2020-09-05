import React from 'react';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
import classes from '../BuildControls/BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: {props.totalPrice}</p>
    {controls.map(control => (
    <BuildControl 
    key={control.label} 
    label={control.label}
    added={() => props.ingredientAdded(control.type)}
    removed={() => props.ingredientRemoved(control.type)}
    disabled={props.disabled[control.type]}
      />
    ))}
  </div>
);

export default buildControls;