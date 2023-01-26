import axios from 'axios';
import ItemPanel from '../Home/components/ItemPanel';
import InteractionPanel from '../Home/components/InteractionPanel';
import Grid from '@mui/material/Grid';
import { explore, recommended } from '../util/interactions';
import { MainContext } from '../components/MainContext';
import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Flash from '../components/Flash';
import PoolPrompt from '../Checkout/components/PoolPrompt';


function Home({user, products, flash}) {
    let [productsAndInteractionsMixed, setProductsAndInteractionsMixed ] = useState(undefined)
    let [renderFlash, setRenderFlash] = useState(flash !== undefined);
    let { cart } = useContext(MainContext);
    let onlyCoin = products.filter(x => x.name === 'Coin')[0];
    console.log('home rerender');

    useEffect(() => {
        let interactions = [explore, recommended];
        let productsNoCoin = products.filter(x => x.name !== 'Coin');
        let productsAndInteractions = productsNoCoin.concat(...interactions);
        let mixed = productsAndInteractions.map(function (element, index) {
            let rand = Math.floor(Math.random() * 100);
            let counter = 0;
            if (rand % 2 === 0 && element.route !== undefined) {
                counter === 0 ?
                    counter++ : rand++
            } else if (rand % 2 !== 0 && element.route !== undefined) {
                counter === 0 ?
                counter++ : rand++
            };
            element.sort = rand;
            return element
        }).sort((a, b) => {
            return a.sort - b.sort
        });
        setProductsAndInteractionsMixed(mixed);
    }, [])

    
    return (
    <div>
            <Navbar currentUser={user} />
            {
                renderFlash === true ?
                    <Flash flash={flash} setRenderFlash={setRenderFlash}/> : ''
            }
            {
                cart !== undefined ?
                <PoolPrompt cart={cart}/> : ''

            }
            <Grid container>
                {
                    productsAndInteractionsMixed !== undefined ?
                    productsAndInteractionsMixed.map(function (element, index) {                        
                        if (index % 2 === 0) {
                            return <Grid item xs={6} style={{position: 'relative', left: '2.5%', marginBottom: '5rem' }} key={index}>
                                {
                                    element.route ?
                                        <InteractionPanel interaction={element} />
                                        : <ItemPanel currentUser={user} product={element} onlyCoin={onlyCoin}/>
                                }
                                    </Grid>
                        } else {
                            return <Grid item xs={6} style={{ position: 'relative', top: '15rem', left: '2.5%' }} key={index}>
                                       {
                                    element.route ?
                                        <InteractionPanel interaction={element} />
                                        : <ItemPanel currentUser={user} product={element} onlyCoin={onlyCoin}/>
                                }
                                    </Grid>
                        }
                    }): ''
                }
            </Grid>
        </div>
    )
};

Home.getInitialProps = async (ctxt) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/products'
    }).then(data => { return data }).catch(err => console.log(err));
    let { data } = response
    console.log(ctxt.req.session.flash);
    return {products: data.allProducts, user: ctxt.req.user, flash: ctxt.req.session.flash};
}

export default Home;

