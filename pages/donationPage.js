let axios = require('axios');
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {addToCart, updatePool} from '../Cart/functions/updateCart'
import PoolPrompt from '../Checkout/components/PoolPrompt';
import { useContext, useEffect, useState} from 'react';
import { MainContext } from '../components/MainContext';
import CharityCard from '../Explore/components/CharityCard';
import CartDropdown from '../Cart/components/CartDropdown';
import { Divider } from '@mui/material';
import updateSession from '../functions/updateSession';
import { v4 as uuidv4 } from 'uuid';

function donationPage({ user, sessionCart }) {
    let { setCart, cart } = useContext(MainContext);
    const [open, setOpen] = useState(false);
    let [toPool, setToPool] = useState(undefined);
    console.log(cart);

    let coinRequired = {
        0: {
            amt: 10,
            text: '2 Coin for $10'
        },
        1: {
            amt: 5,
            text: '1 Coin for 5$'
        }
    };

    let handleClickPool = async () => {
        if (toPool === undefined) {
            let poolCode = uuidv4();
            setToPool(poolCode);
            await updateSession('toPoolID', poolCode)
                .then(data => { return data }).catch(err => console.log(err));
        }
        await updatePool(cart, -cart.coin.qty)
            .then(data => { setCart(data) }).catch(err => console.log(err));
        setOpen(false);
    };
    

    let handleClickAdd = async () => {
        let coin = { name: 'Coin', price: 5, img: [{path: ''}], code: 'price_1MRIq1JdX2WdfgCJLpJ9fD61', qty: 2 - cart.coin.qty };
        await addToCart(cart.currentUser, cart, coin, {}).then(data => { setCart(data) }).catch(err => console.log(err));
        setOpen(false);
    };
    
      const handleClose = () => {
        setOpen(false);
      };

    useEffect(() => {
        setCart(sessionCart);
    }, []);
    console.log(cart);

    

    return (
        <div>

            <div style={{ position: 'fixed', left: '36%', zIndex: '1' }}>
                
                <CartDropdown isFinalStep={true} toPool={toPool} setOpen={setOpen}/>
             
            </div>
                <Grid container style={{paddingTop: '15%', zIndex: '1'}}>
                {
                    cart !== undefined ?
                    user.charities.liked.orgs.map(function (element, index) {
                        let liked = undefined;
                        let cardType = undefined;
                        element.name === 'helps Pool' ?
                            cardType = 'pool' : cardType = 'donate';
                        let allNames = cart.toDonate.map(x => x.name);
                        (allNames.indexOf(element.name) > -1 )|| 
                        (element.name === 'helps Pool' && toPool !== undefined)?
                            liked = true : liked = false;
                        
                                if (index % 2 === 0) {
                                    return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                        <CharityCard org={element} cardType={cardType} liked={liked} cart={cart} setOpen={setOpen} setCart={setCart} setToPool={setToPool} />
                                        </Grid>
                                } else {
                                    return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                        <CharityCard org={element} cardType={cardType} liked={liked} cart={cart} setOpen={setOpen} setCart={setCart} setToPool={setToPool}/>
                                </Grid> 
                                }
                        }) : ''
                    }
            </Grid>

            {
                cart !== undefined && cart.coin.qty < 2 && open === true?
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Minimum Donation"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                                <ol>
                                <li>
                                Due to processing fees, the minimum donation amount is 2 Coins. ($10)
                                    To make a separate donation, you'll need to either de-select a charity you've 
                                    already chosen, or add {coinRequired[cart.coin.qty].text}!
                                    </li>
                                    <Divider />
                                    {
                                        cart.coin.qty === 1 ?
                                        
                                        <li>
                                        If you want to spread the wealth, you can add your remaining Coin to the helps Pool.
                                            We will take your Coin, add it to a growing pool of donated Coins to create a much larger donation to 
                                            a non-profit that users get to vote on!
                                        </li> : ''
                                    }
                            </ol> 
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                  <Button onClick={handleClickAdd} autoFocus>
                            Add Coin (${coinRequired[cart.coin.qty].amt})
                            </Button>

                            {
                                cart.coin.qty === 1 ?
                                <Button onClick={() => handleClickPool()}>Pool</Button>
                                    : ''
                            }
                        </DialogActions>
                        
              </Dialog> : ''
}
        </div>
    )
};

donationPage.getInitialProps = async (ctxt) => {
    let { req } = ctxt;
        return { user: req.user, sessionCart: req.session.cart};

    // let response = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/tester'
    // }).then(data => { return data}).catch(err => console.log(err));
    // let { data } = response;
    // return { data };
}

export default donationPage;

// make sure donation amount is reflecting in queue
// reseed users => donations => etc to reflect new donation format in userSchema
// make sure every pool and donation is reflecting in total Donations and other places that
// keep track of that clientInformation
// check out the dashboard