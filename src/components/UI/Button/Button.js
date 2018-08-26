import React from 'react'
import classes from './Button.css'

export default (props) => {
  console.log(classes)
  return  <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
}
  
 
