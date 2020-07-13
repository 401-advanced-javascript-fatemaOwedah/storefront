import React from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  media: {
    height: 140,
  },
});

function Products(props){
  let productsHTML = [];
   
  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(<Card className='card'>
        <CardActionArea>
          <CardMedia
            className='card-media'
            image="/static/images/cards/contemplative-reptile.jpg"
            title={props.products.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.products[i].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
               PRICE:{props.products[i].price}$
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            INSTOCK: {props.products[i].inStock} PIECES
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>);
  }

  return (
    <>
    <div className='Products'>
  <h2>{props.currentCategory} Products</h2>
    <Grid container spacing={3}>
      <Grid item xs={4}>
    {productsHTML}
      </Grid>
    </Grid>
    </div>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    products: state.products,
    currentCategory: state.currentCategory,
  };
};

export default connect(mapStatetoProps)(Products);