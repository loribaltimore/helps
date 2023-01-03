import axios from 'axios';
import ItemPanel from '../Home/components/ItemPanel';
import InteractionPanel from '../Home/components/InteractionPanel';
import Grid from '@mui/material/Grid';
import { explore, recommended } from '../util/interactions';
import { MainContext } from '../components/MainContext';
import { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { DisplaySettings } from '@mui/icons-material';

function Home({user, products }) {
    let { flash, setFlash } = useContext(MainContext);    

    useEffect(() => {
        flash.msg !== undefined ?
            setFlash({ msg: flash.msg, type: flash.type, render: true }) : ''
    }, [])
    
    
    return (
    <div>
            <Navbar currentUser={user}/>
            <Grid container>
                {/* <Grid item xs={6}>
                    <ItemPanel img={'/img/shirtAlt.jpeg'} name={'T-Shirt'} cost={'30'} item={products[0]}/>
                    <InteractionPanel interaction={explore}/>
                    <ItemPanel img={'/img/hoodie.jpeg'} name={'Hoodie'} cost={'50'} item={products[2]} />

                </Grid>
                <Grid item xs={6}>
                    <ItemPanel img={'/img/hat.jpeg'} name={'Ball Cap'} cost={'20'} item={products[1]}/>
                    <ItemPanel img={'/img/stickerTable.jpeg'} name={'Sticker x 3'} cost={'10'} item={products[3]} />
                    <InteractionPanel interaction={recommended} />
                </Grid> */}
                {
                    products.map(function (element, index) {
                        if (index % 2 === 0) {
                            return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                <ItemPanel product={element} />
                            </Grid>
                        } else {
                            return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                <ItemPanel product={element} />
                            </Grid>
                        }
                    })
                }
            </Grid>
        </div>
    )
};

Home.getInitialProps = async (ctxt) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/products'
    }).then(data => { console.log(data.data); return data }).catch(err => console.log(err));
    let {data} = response
    return {products: data.allProducts, user: ctxt.req.user};
}

export default Home;

add interaction panels to home page reconfigure how items display / spacing;