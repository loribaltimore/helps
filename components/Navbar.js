import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { MainContext } from './MainContext';
import { useContext, useState} from 'react';
import UserMenu from './UserMenu';
import CartBtn from '../Cart/components/CartBtn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

function Navbar({ currentUser }) {
    let { cart } = useContext(MainContext);
    
    let isAdmin = false;
    if (currentUser !== undefined
        && currentUser.admin.permissions.indexOf('admin') > -1) {
        isAdmin = true;
    };

    let gridW = {
        true: 2.4,
        false: 3
    };

    let Router = useRouter();
    return (
        <div style={{paddingBottom: '10%'}}>
                <nav style={{height: '4rem', backgroundColor: '#5ce1e6', marginBottom: '2%', width: '25%', borderRadius: '5rem', position: 'fixed', left: '37.5%', zIndex: '1', boxShadow: '4px 4px gray'}}>
                <Grid container style={{position: 'relative', top: '.75rem', paddingLeft: '1%'}}>
                    <Grid item xs={gridW[isAdmin]} style={{textAlign: 'center'}}>
                        <Link underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer'}} onClick={() => Router.push('/home') }>
                            <HomeOutlinedIcon style={{color: '#ff5757', fontSize: '2rem'}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={gridW[isAdmin]} style={{textAlign: 'center'}}>
                        <Link  underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer', color: '#ff5757'}} onClick={() => Router.push('/explore') }>
                          <ContentPasteSearchIcon style={{color: '#ff5757', fontSize: '2rem'}}/>
                        </Link>
                    </Grid>
                            <Grid item xs={gridW[isAdmin]} style={{textAlign: 'center'}}>
                        <CartBtn currentUser={currentUser} cart={cart} />
                            </Grid>
                            <Grid item xs={gridW[isAdmin]} style={{textAlign: 'center'}}>
                                <UserMenu />
                    </Grid>
                    {
                        isAdmin === true ?
                        <Grid item xs={gridW[isAdmin]} style={{ textAlign: 'center' }}>
                    <Link  underline="none" style={{position: 'relative', top: '.25rem', cursor: 'pointer', color: '#ff5757'}} onClick={() => Router.push('/master') }>
                        <EngineeringOutlinedIcon style={{color: '#ff5757', fontSize: '2.2rem'}}/>
                    </Link>
                    </Grid> : ''
                    }
                </Grid>
            </nav> 
        </div>
    )
};

export default Navbar;

