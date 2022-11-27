import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { MainContext } from './MainContext';
import { useContext } from 'react';
import UserMenu from './UserMenu';

function Navbar(props) {
    let { currentUser } = useContext( MainContext );
    let Router = useRouter();
    console.log(currentUser);
    let handleClick = () => {
        console.log('working');

    };
    
    return (
        <div>
            <nav style={{height: '4rem', backgroundColor: 'darkblue', opacity: '75%', marginBottom: '2%'}}>
                <Grid container style={{position: 'relative', top: '.75rem', paddingLeft: '1%'}}>
                    <Grid item xs={1}>
                        <Link underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer'}} onClick={() => Router.push('/') }>
                            Home
                        </Link>
                    </Grid>
                    <Grid item xs={1}>
                        <Link  underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer'}} onClick={() => Router.push('/explore') }>
                            Explore
                        </Link>
                    </Grid>
                    <Grid item xs={1} style={{ position: 'relative', left: '78%' }} >
                        <UserMenu />
                    </Grid>
                </Grid>
            </nav>
        </div>
    )
};

export default Navbar;