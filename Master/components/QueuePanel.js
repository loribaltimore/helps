// import { ScaleSharp } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import DonationSubPanel from './DonationSubPanel';
import PurchaseSubPanel from './PurchaseSubPanel';
import { useState } from 'react';

function QueuePanel({ donation, setCurrentQueue, currentPage, historyAmt, purchase }) {

    return (
        <div style={{border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', marginBottom: '2%', height: '25rem'}}>
            <Grid container style={{ padding: '2%', height: '90%' }}>
                <Grid item xs={12}>
                <h1>{donation.user.firstName + ' ' + donation.user.lastName}</h1>
                </Grid>
            <DonationSubPanel donation={donation} setCurrentQueue={setCurrentQueue} currentPage={currentPage} historyAmt={historyAmt} />
            <PurchaseSubPanel donation={donation}/>
            </Grid>
        </div>
    )
};

export default QueuePanel;

// finish configuring the master UI for creating donations
// this includes tracking donation totals-- new tracker in donationQueueSchema
// that will show total lifetime donations to each org
// make sure products track total lifetime donations and ScaleSharp