import React from 'react';
import { connect } from 'react-redux';
import * as action from '../store/action';
import { Button } from '@material-ui/core';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function Categories(props) {
  let categories = [];

  for (let i = 0; i < props.categories.categories.length; i++) {
    categories.push(
      <Button
        variant='contained'
        color='black'
        key={i}
        onClick={(e) => {
          props.render(props.categories.categories[i].name)
        }}
      >
        {props.categories.categories[i].name}
      </Button>,
    );
  }
  return <>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h7" >
          Browse Our Categories
        </Typography>
        <Typography variant="h7" >
          <ul>
           {props.cart.map((product,i)=>{
             return<li key={i}>{product.name} <span onClick={()=>props.delete(product._id) }>X</span></li>
           })}
          </ul>
        </Typography>
      </Toolbar>
    </AppBar>
    {categories}
  </>;
}

const mapStateToProps = (state) => {
  return {
    categories: state.reducer,
    cart: state.data,
  };
};
const mapDispatchToProps =  (dispatch, getState) =>({
  get:()=> dispatch(action.getData()),
  delete:(id)=>dispatch(action.deleteData(id)),
  render:(data)=>dispatch({
    type: 'CHANGE_CATEGORY',
    payload: data,
  })
});


export default connect(mapStateToProps, mapDispatchToProps)(Categories);