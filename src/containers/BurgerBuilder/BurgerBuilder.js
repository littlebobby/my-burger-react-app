import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BurgerIngredients/BuildControls/BuildControls';


const INGREDIENT_PRICE = {
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5,
  bacon: 0.8,
}

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    // update ingredient 
    const oldCount = this.state.ingredient[type];
    const newCount = oldCount + 1;
    const updateIngredient = {...this.state.ingredient}
    updateIngredient[type] = newCount

    // update price
    const priceAddition = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice + priceAddition
    this.setState({ ingredient: updateIngredient, totalPrice: newPrice})
  }

  removeIngredientHandler = (type) => {
    // update ingredient 
    const oldCount = this.state.ingredient[type];
    if (oldCount <= 0) return;
    const newCount = oldCount - 1;
    const updateIngredient = {...this.state.ingredient}
    updateIngredient[type] = newCount
    // update price
    const priceDeduction = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice - priceDeduction
    this.setState({ ingredient: updateIngredient, totalPrice: newPrice})
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredient
    }
    for (let key in disabledInfo) {
      // turns number into boolean
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice} />
      </Aux>
    )
  }
}

export default BurgerBuilder;