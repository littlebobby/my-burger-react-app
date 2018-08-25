import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const controls = [
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
  // Object.keys(props.ingredients).forEach(e => {
  //   controls.push(<BuildControl key={e} label={e}></BuildControl>)
  // });
  return (
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(el => 
        <BuildControl 
          key={el.label} 
          label={el.label} 
          // ! can pass the type property directly to the function below
          // type={el.type}
          moreClicked={() => props.ingredientAdded(el.type)}
          lessClicked={() => props.ingredientRemoved(el.type)}
          disabled={props.disabled[el.type]}/>)}
    <button 
      className={classes.OrderButton}
      disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  )
}
    



export default buildControls;
