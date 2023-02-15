import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import Grid from '@mui/material/Grid';
import TierProgress from './TierProgress';

function CoinTotal({currentUser}) {
    let { totalDonations, tier } = currentUser.membership;
    console.log(currentUser.membership);
    
    return (
        <div style={{border: '1px solid black', backgroundColor: 'white'}}>
            {
                currentUser !== undefined ?
                    <Grid container>
                        <Grid item xs={6}>
                        <p style={{ fontSize: '2rem', textAlign: 'center' }}>Total Donated: ${currentUser.membership.totalDonations * 5}</p>
                        </Grid>
                        <Grid item xs={6}>
                        <p style={{ fontSize: '2rem', textAlign: 'center' }}>Membership Tier: {currentUser.membership.tier}</p>
                        </Grid>
                    </Grid>
                    : ''
            }
            <TierProgress totalDonations={totalDonations} tier={tier} />
        </div>
    )

};

export default CoinTotal;
