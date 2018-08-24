import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 1,
      cheese: 2,
      bacon: 4,
      meat: 3
    }
  }
  render() {
    return (
      <Aux>
        <Burger ingredient={this.state.ingredient}/>
        <div>Build Control</div>
      </Aux>
    )
  }
}

export default BurgerBuilder;