import axios from 'axios';
import ItemPanel from '../Home/components/ItemPanel';
import InteractionPanel from '../Home/components/InteractionPanel';
import Grid from '@mui/material/Grid';
import { explore, recommended } from '../util/interactions';
import { MainContext } from '../components/MainContext';
import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

function Home({user, products }) {
    let { flash, setFlash } = useContext(MainContext);
    let [isEven, setIsEven] = useState(false);
    let [counter, setCounter] = useState(0);
    let [productsAndInteractionsMixed, setProductsAndInteractionsMixed ] = useState(undefined)
    let onlyCoin = products.filter(x => x.name === 'Coin')[0];
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
        flash.msg !== undefined ?
            setFlash({ msg: flash.msg, type: flash.type, render: true }) : ''
    }, [])

    
    return (
    <div>
            <Navbar currentUser={user}/>
            <Grid container>
                {
                    productsAndInteractionsMixed !== undefined ?
                    productsAndInteractionsMixed.map(function (element, index) {                        
                        if (index % 2 === 0) {
                            return <Grid item xs={6} style={{position: 'relative', left: '2.5%', marginBottom: '5rem' }} key={index}>
                                {
                                    element.route ?
                                        <InteractionPanel interaction={element} />
                                        : <ItemPanel product={element} onlyCoin={onlyCoin}/>
                                }
                                    </Grid>
                        } else {
                            return <Grid item xs={6} style={{ position: 'relative', top: '15rem', left: '2.5%' }} key={index}>
                                       {
                                    element.route ?
                                        <InteractionPanel interaction={element} />
                                        : <ItemPanel product={element} onlyCoin={onlyCoin}/>
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
    let {data} = response
    return {products: data.allProducts, user: ctxt.req.user};
}

export default Home;

// add interaction panels to home page reconfigure how items display / spacing;