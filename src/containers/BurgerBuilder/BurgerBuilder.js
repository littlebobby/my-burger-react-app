import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BurgerIngredients/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner'

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
    loading: false,
  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  purchaseContinueHandler = () => {
    this.setState({ loading: true })
    // alert('you continue')
    const order = {
      ingredient: this.state.ingredient,
      price: this.state.totalPrice,
      customer: {
        name: 'bob',
        address: {
          street: 'Test street 1',
          zipCode: '10178',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    // * for firebase you need to add json
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false, purchasing: false})
      })
      .catch(err => {
        this.setState({loading: false, purchasing: false})
        console.error(err);
      });
  }

  updatePurchaseState = (ingredients) => {
    const result = Object.values(ingredients).reduce((a, b) => a + b, 0)
    this.setState({purchasable: result > 0 ? true : false})
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

    let orderSummary = <OrderSummary 
      ingredient={this.state.ingredient}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      totalPrice={this.state.totalPrice}/>
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredient={this.state.ingredient}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderButtonClicked={this.purchaseHandler} />
      </Aux>
    )
  }
}

export default BurgerBuilder;