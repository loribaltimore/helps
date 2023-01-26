import Grid from '@mui/material/Grid';
import PoolPrompt from '../Checkout/components/PoolPrompt';
import { useContext, useEffect, useState} from 'react';
import { MainContext } from '../components/MainContext';
import CharityCard from '../Explore/components/CharityCard';
import CartDropdown from '../Cart/components/CartDropdown';

function donationPage({ user, sessionCart }) {
    let { setCart, cart } = useContext(MainContext);

    useEffect(() => {
        setCart(sessionCart);
    }, []);
    console.log(cart);

    return (
        <div>
            <div style={{ position: 'fixed', left: '36%', zIndex: '1' }}>
                
                <CartDropdown isFinalStep={true} />
             
            </div>
                <Grid container style={{paddingTop: '15%', zIndex: '1'}}>
                {
                    cart !== undefined ?
                    user.charities.liked.orgs.map(function (element, index) {
                        let liked = undefined;
                        cart.toDonate.indexOf(element.name) > -1 ?
                            liked = true : liked = false;
                                if (index % 2 === 0) {
                                    return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                        <CharityCard org={element} cardType={'donate'} liked={liked} cart={cart} />
                                        </Grid>
                                } else {
                                    return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                        <CharityCard org={element} cardType={'donate'} liked={liked} cart={cart} />
                                </Grid> 
                                }
                        }) : ''
                    }
                </Grid>
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