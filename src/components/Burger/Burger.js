import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
  let totalIngredients = Object.keys(props.ingredient)
  .map(igKey => [...Array(props.ingredient[igKey])]
    .map((_, i) => <BurgerIngredient key={igKey+i} type={igKey} />) 
  )
  // * use reduce to flaten the array
  .reduce((arr, el) => {
    return [...arr,...el]
  }, [])
  // ? you can also use Element Embedding in curly braces 
  // ! but here it is worth to extract a variable for readibility
  if (totalIngredients.length === 0) totalIngredients = <p>You wanna only bread burger?</p>
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {totalIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger;
