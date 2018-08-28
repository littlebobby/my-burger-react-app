import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // * this can be a functional component
  componentWillUpdate() {
    console.log('will update')
  }
  render() {
  const ingredientSummary = Object.keys(this.props.ingredient)
    .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredient[key]}</li>)
  
  // console.log(ingredientSummary)
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )

  }
}

export default OrderSummary;