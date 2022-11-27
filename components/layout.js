import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid';
import BackBtn from './BackBtn';
import noBackBtn from '../util/noBackBtn';
import { useRouter } from 'next/router';

function Layout(props) {
    let router = useRouter();
    let { route } = router;

    return (
        <div>
            {
                noBackBtn.indexOf(route) < 0 ?
                    <BackBtn /> : ''
            }
            <Grid container >
            <Grid item xs={2.25}></Grid>
                <Grid item xs={7.5}>
                <Item>{props.children}</Item>
            </Grid>
            <Grid item xs={2.25}></Grid>
            </Grid>   
        </div>
    )
};

export default Layout;