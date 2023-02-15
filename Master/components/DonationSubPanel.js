import Grid from '@mui/material/Grid';
import EveryOrgDonate from './EveryOrgDonate';

function DonationSubPanel({ donation, setCurrentQueue, currentPage, historyAmt }) {
    let { org, transaction } = donation;
    let { amount } = transaction;
    let isFulfilled = donation.fulfillment.donation.fulfilled === true;

    let styles = {
        true: '#b5e48c',
        false: 'white'
    }

    return (
        <Grid item xs={6} style={{border: '2px solid black', borderRadius: '2rem', padding: '2%', backgroundColor: styles[isFulfilled]}}>
            {
                donation.fulfillment.donation.fulfilled === false ?
            <Grid container style={{ padding: '2%' }}>
                <Grid item xs={2}>
                    <img src={org.img} style={{width: '5rem'}}/>
                </Grid>
                <Grid item xs={10} style={{ height: '3rem' }}>
                  
                            <div>
                                <h1 style={{margin: '0%'}}>{org.name}</h1>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div>
                                            <h3>Donation Amount: {amount.final * 5}</h3>
                                </div>
                                <div>
                                            <h3>Total Donated: {historyAmt}</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div style={{ width: '100%' }}>
                                    <EveryOrgDonate donation={donation} setCurrentQueue={setCurrentQueue} currentPage={currentPage} />
                                                </div> 
                                    </Grid>
                                </Grid>
                            </div>
                    </Grid>
                    </Grid> :
                            <h1 style={{color: '#6CBD26', position: 'relative', left: '38%', top: '2rem'}}>Fulfilled</h1>
                        }
        </Grid>
     
    )
};

export default DonationSubPanel;