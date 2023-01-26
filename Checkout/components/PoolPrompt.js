import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../components/MainContext';
import addToPool from '../functions/addToPool';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import updateSession from '../../functions/updateSession';
import { addToCart } from '../../Cart/functions/updateCart';


function PoolPrompt(props) {
    let { setCart, cart } = useContext(MainContext);

    let handleClickAdd = async () => {
        let coin = { name: 'Coin', price: 5, img: [{path: ''}], code: 'price_1MRIq1JdX2WdfgCJLpJ9fD61' };
        await addToCart(cart.currentUser, cart, coin, {}).then(data => { setCart(data) }).catch(err => console.log(err));

    };

    let handleClickPool = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:3000/pool',
            data: {
                cart
            }
        }).then(data => { console.log(data.data.cart); setCart(data.data.cart) }).catch(err => console.log(err))
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
            {
                cart !== undefined ?
                    <Grid container>
                    <h4 style={{margin: '0%'}}>You have {cart.coin.qty} coin</h4>
                 <Grid item xs={12}>
                     <h5>Add ${(cart.coin.qty) * 5} to your
                     purchase to choose another organization?</h5>
                 <Button variant="contained" onClick={() => handleClickAdd()}>Add $5</Button>
                 </Grid>
                 <Grid item xs={12}>
                 <h5>Add remaining coin to Help Pool?</h5>
                 <Button variant="contained" onClick={() => handleClickPool()}>Pool</Button>
                 </Grid>
             </Grid> : ''
        }
        </div>
    )
};

export default PoolPrompt;

