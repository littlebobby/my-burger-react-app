import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showBackdrop: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showBackdrop: false})
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) =>{
      return  {showBackdrop: !prevState.showBackdrop}
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar toolbarClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showBackdrop}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;