import React from 'react';
import burgerLogo from '../../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  // ! note you cannot pass the source of image directly to the img tag
  // -- webpack --
    <div className={classes.Logo}>
      <img src={burgerLogo} alt='My Burger' />
    </div>
  )
export default logo;

