import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';
import { MainContext } from './MainContext';
import { useContext, useState } from 'react';
import UserMenu from './UserMenu';
import CartBtn from '../Cart/components/CartBtn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

function Navbar(props) {
    let { currentUser } = useContext( MainContext );
    let Router = useRouter();
    console.log(currentUser);

    
    
    return (
        <div>
            <nav style={{height: '4rem', backgroundColor: '#5ce1e6', marginBottom: '2%', width: '25%', borderRadius: '5rem', position: 'fixed', left: '37.5%', zIndex: '1', boxShadow: '4px 4px gray'}}>
                <Grid container style={{position: 'relative', top: '.75rem', paddingLeft: '1%'}}>
                    <Grid item xs={3} style={{textAlign: 'center'}}>
                        <Link underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer'}} onClick={() => Router.push('/home') }>
                            <HomeOutlinedIcon style={{color: '#ff5757', fontSize: '2rem'}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={3} style={{textAlign: 'center'}}>
                        <Link  underline="none" style={{position: 'relative', top: '.5rem', cursor: 'pointer', color: '#ff5757'}} onClick={() => Router.push('/explore') }>
                          <ContentPasteSearchIcon style={{color: '#ff5757', fontSize: '2rem'}}/>
                        </Link>
                    </Grid>
                            <Grid item xs={3} style={{textAlign: 'center'}}>
                        <CartBtn />
                            </Grid>
                            <Grid item xs={3} style={{textAlign: 'center'}}>
                                <UserMenu />
                            </Grid>
                       
                </Grid>
            </nav>
        </div>
    )
};

export default Navbar;

