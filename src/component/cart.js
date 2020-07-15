import React from 'react';
import { connect } from 'react-redux';

import * as action from '../store/action';

import { addToCart } from '../store/cart'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Carts(props) {
    let carts = [];
    let change=2;
    const handleSubmit = e => {
        e.preventDefault();
        change =e.target.nameQuantity.value;
    }
    for (let i = 0; i < props.cart.length; i++) {
        carts.push(<Card className='card'>
            <CardActionArea>
                <CardMedia
                    className='card-media'
                    title={props.cart.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.cart[i].name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        PRICE:{props.cart[i].price}$
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        INSTOCK: {props.cart[i].inStock} PIECES
            </Typography>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            QUANTITY:<input name='nameQuantity' type='number' placeholder={props.cart[i].quantity} />PIECES
            </Typography>
                        <button onClick={() => props.put(props.cart[i]._id, props.cart[i], change)}>Accept Change</button>
                    </form>
                </CardContent>
            </CardActionArea>
        </Card>);
    }

    return (
        <>
            <div className='carts'>
                {/* <h2>{props.carts.activeCategory} carts</h2> */}
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        {carts}
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

const mapStatetoProps = (state) => {
    return {
        cart: state.data,
    };
};
const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(action.getData()),
    post: (data) => dispatch(action.addData(data)),
    put: (id, data, change) => dispatch(action.updateData(id, data, change))
});

export default connect(mapStatetoProps, mapDispatchToProps)(Carts);