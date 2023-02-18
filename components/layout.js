import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid';
import BackBtn from './BackBtn';
import noBackBtn from '../util/noBackBtn';
import DonatorScroll from './DonatorScroll';
import { useRouter } from 'next/router';

function Layout(props) {
    let router = useRouter();
    let { asPath } = router;
    return (
        <div >
            {/* {
                noBackBtn.indexOf(asPath) === -1 ?
                    <BackBtn /> : ''
            } */}
            <Grid container >
            <Grid item xs={2.25} style={{backgroundColor: 'grey'}}></Grid>
                <Grid item xs={7.5} style={{height: '100%', marginBottom: '5%'}}>    
                    <Item style={{ paddingTop: '5%' }}>{props.children}</Item>
                    <DonatorScroll />
            </Grid>
            <Grid item xs={2.25} style={{backgroundColor: 'grey'}}></Grid>
            </Grid>   
        </div>
    )
};

// backgroundImage: `url(${'/img/logo.jpeg'})`, backgroundSize: '10%', backgroundAttachment: 'fixed', backgroundPosition: 'center'
export default Layout;