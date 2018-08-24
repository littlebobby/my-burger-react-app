import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  const totalIngredients = Object.keys(props.ingredient)
    .map(igKey => [...Array(props.ingredient[igKey])].map((_, i) => <BurgerIngredient key={igKey+i} type={igKey} />) )
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' ></BurgerIngredient>
      {totalIngredients}
      <BurgerIngredient type='bread-bottom' ></BurgerIngredient>
    </div>
  )
}

  // case ('bread-top'): 
  // case ('meat'): 
  // case ('cheese'): 
  // case ('salad'): 
  // case ('bacon'): 

export default burger;
