import { ScaleSharp } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import EveryOrgDonate from './EveryOrgDonate';

function QueuePanel({ donation, setCurrentQueue, currentPage, historyAmt }) {
    let { org, transaction } = donation;
    let { amount } = transaction;
    return (
        <div style={{border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', marginBottom: '2%'}}>
                <Grid container style={{ padding: '2%' }}>
                <Grid item xs={2}>
                    <img src={org.img} style={{width: '5rem'}}/>
                </Grid>
                <Grid item xs={10} style={{ height: '3rem' }}>
                  
                            <div>
                                <h1 style={{margin: '0%'}}>{org.name}</h1>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <div>
                                            <h3>Donation Amount: {amount.final * 5}</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div>
                                            <h3>Total Donated: {historyAmt}</h3>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                            
                                                <div style={{ width: '100%' }}>
                                    <EveryOrgDonate donation={donation} setCurrentQueue={setCurrentQueue} currentPage={currentPage} />
                                                </div> 
                                        
                                    </Grid>
                                </Grid>
                            </div>

                    </Grid>
                    </Grid> 
        </div>
    )
};

export default QueuePanel;

// finish configuring the master UI for creating donations
// this includes tracking donation totals-- new tracker in donationQueueSchema
// that will show total lifetime donations to each org
// make sure products track total lifetime donations and ScaleSharp