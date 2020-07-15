import React from 'react';
import {connect} from 'react-redux';

import {addToCart} from '../store/cart'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Products(props){
  let products = [];
   
  for (let i = 0; i < props.products.products.length; i++) {
    if (props.products.products[i].category === props.products.activeCategory)
      products.push(<Card className='card'>
        <CardActionArea>
          <CardMedia
            className='card-media'
            title={props.products.products.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.products.products[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               PRICE:{props.products.products[i].price}$
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            INSTOCK: {props.products.products[i].inStock} PIECES
            </Typography>
            <button onClick={()=>props.addToCart(props.products.products[i])}>Add To Cart</button>
          </CardContent>
        </CardActionArea>
      </Card>);
  }

  return (
    <>
    <div className='Products'>
  <h2>{props.products.activeCategory} Products</h2>
    <Grid container spacing={3}>
      <Grid item xs={4}>
    {products}
      </Grid>
    </Grid>
    </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    products: state.reducer,
  };
};
const mapDispatchToProps = { addToCart };

export default connect(mapStatetoProps, mapDispatchToProps)(Products);