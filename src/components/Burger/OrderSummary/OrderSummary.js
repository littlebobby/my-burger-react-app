import React from 'react';
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient)
    .map(key => <li key={key}><span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredient[key]}</li>)
  
  console.log(ingredientSummary)
  
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  )

}
export default orderSummary;