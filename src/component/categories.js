import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function Categories(props) {
  let categories = [];

  for (let i = 0; i < props.categories.length; i++) {
    categories.push(
      <Button
        variant='contained'
        color='black'
        key={i}
        onClick={(e) => {
          props.dispatch({
            type: 'CHANGE_CATEGORY',
            payload: props.categories[i].name,
          });
        }}
        >
          {props.categories[i].displayName || props.categories[i].name}
        </Button>,
    );
  }
  return <>
  <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h7" >
          Browse Our Categories
        </Typography>
      </Toolbar>
    </AppBar>
  {categories}
  </>;
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Categories);