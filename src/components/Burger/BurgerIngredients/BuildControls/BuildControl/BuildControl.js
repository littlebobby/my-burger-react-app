import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <button 
        onClick={props.lessClicked} 
        className={classes.Less} 
        disabled={props.disabled}>Less</button>
      <button 
        onClick={props.moreClicked} 
        className={classes.More}>More</button>
    </div>
)

export default buildControl
