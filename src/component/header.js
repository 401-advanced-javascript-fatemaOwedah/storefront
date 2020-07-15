import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {connect} from 'react-redux';
function Header(props) {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h7" >
          OUR STORE
        </Typography>
        <span>_______________________________________________________________________________________________________________________________________________________________</span>
        <Typography variant="h7" >
          CART <span>{props.carts.length}</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
const mapStatetoProps = (state) => {
  return {
    carts: state.cart,
  };
};
export default connect(mapStatetoProps)(Header);