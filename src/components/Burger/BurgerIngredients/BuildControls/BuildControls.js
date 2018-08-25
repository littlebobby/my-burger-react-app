import React from 'react'
import BuildControl from './BuildControl/BuildControl'

const controls = []

const buildControls = (props) => {
  Object.keys(props.ingredients).forEach(e => {
    controls.push(<BuildControl key={e} label={e}></BuildControl>)
  });
  
  return (
    <div>
      {controls}
    </div>
  )
}
    



export default buildControls;
