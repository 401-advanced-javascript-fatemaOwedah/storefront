import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../store/action';
// action ={
//   add,
//   get,put,delte
// }

function Header(props) {
  useEffect(() => {
    props.get();
  },[])
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Link to="/">
        <Typography variant="h7" >
          OUR STORE
        </Typography>
        </Link>
        <Link to="/cart">
          <Typography variant="h7" >
            CART <span>{props.carts.length}</span>
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
const mapStatetoProps = (state) => {
  return {
    carts: state.data,
  };
};
const mapDispatchToProps = (dispatch, getState) => ({
  get: () => dispatch(action.getData())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);