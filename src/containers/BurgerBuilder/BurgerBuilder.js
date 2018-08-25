import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BurgerIngredients/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    purchasable: false,
    purchasing: false,
  }

  updateModalHandler = () => {
    this.setState({purchasing: true})
  }

  updatePurchaseState = (ingredients) => {
    const result = Object.values(ingredients).reduce((a, b) => a + b, 0)
    console.log(result)
    this.setState({purchasable: result > 0 ? true : false})
    console.log(this.state.purchasable)
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
    // ! pass the updateIngredient, cause if we can this.state.ingredient, it will still be the old state
    this.updatePurchaseState(updateIngredient)
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
    this.updatePurchaseState(updateIngredient)
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
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredient={this.state.ingredient}/>
        </Modal>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderButtonClicked={this.updateModalHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;