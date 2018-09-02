import React, { Component } from 'react'
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  // ! remove unnecessary update
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={classes.Modal} 
          // ! this is to add the animation
          // todo the translateY should be updated, as part of the modal will display if
          // todo the screen height is very small
          // !! omg this works, by simply setting the opacity conditionally
          style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? 1 : 0}}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
} 

export default Modal;
