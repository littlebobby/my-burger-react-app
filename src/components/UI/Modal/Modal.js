import React from 'react'
import classes from './Modal.css'

const modal = (props) => {
  return (
    <div 
      className={classes.Modal} 
      // ! this is to add the animation
      // todo the translateY should be updated, as part of the modal will display if
      // todo the screen height is very small
      style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: props.show ? 1 : 0}}>
      {props.children}
    </div>
  )
}

export default modal;
