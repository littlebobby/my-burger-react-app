import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'
export default () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>About</NavigationItem>
    <NavigationItem link='/'>Contact</NavigationItem>
    <NavigationItem link='/'>Menu</NavigationItem>
  </ul>
)