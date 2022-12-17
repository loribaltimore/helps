import axios from 'axios';
import ItemPanel from '../Home/components/ItemPanel';
import InteractionPanel from '../Home/components/InteractionPanel';
import Grid from '@mui/material/Grid';
import { explore, recommended } from '../util/interactions';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';

function Home(props) {
    let { flash, setFlash } = useContext(MainContext);
    flash.msg !== undefined ?
        setFlash({ msg: flash.msg, type: flash.type, render: true }) : ''
    console.log(flash);

    return (
        <div >
            <Grid container>
                <Grid item xs={6}>
                    <ItemPanel img={'/img/shirtAlt.jpeg'} name={'T-Shirt'} cost={'30'} item={props[0]}/>
                    <InteractionPanel interaction={explore}/>
                    <ItemPanel img={'/img/hoodie.jpeg'} name={'Hoodie'} cost={'50'} item={props[2]} />

                </Grid>
                <Grid item xs={6}>
                    <ItemPanel img={'/img/hat.jpeg'} name={'Ball Cap'} cost={'20'} item={props[1]}/>
                    <ItemPanel img={'/img/stickerTable.jpeg'} name={'Sticker x 3'} cost={'10'} item={props[3]} />
                    <InteractionPanel interaction={recommended} />
                </Grid>
            </Grid>
        </div>
    )
};

Home.getInitialProps = async ({query}) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/products'
    }).then(data => { return data }).catch(err => console.log(err));
    let {data} = response
    return data;
}

export default Home;