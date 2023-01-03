import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid';
import BackBtn from './BackBtn';
import noBackBtn from '../util/noBackBtn';
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
            <Grid item xs={2.25}></Grid>
                <Grid item xs={7.5} style={{backgroundImage: `url(${'/img/logo.jpeg'})`, ackgroundImage: `url(${'/img/logo.jpeg'})`, backgroundSize: '10%', backgroundAttachment: 'fixed', backgroundPosition: 'center', height: '100%'}}>    
                <Item style={{paddingTop: '5%'}}>{props.children}</Item>
            </Grid>
            <Grid item xs={2.25}></Grid>
            </Grid>   
        </div>
    )
};

export default Layout;