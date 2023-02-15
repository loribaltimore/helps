import Grid from '@mui/material/Grid';

function TierProgress({ totalDonations, tier }) {
    totalDonations = totalDonations * 5;

    let tiers = {
        bottom: 0,
        low: 50,
        middle: 150,
        top: 250
    };
    let allTiers = Object.keys(tiers);

    let nextTier = tiers[allTiers[allTiers.indexOf(tier) + 1]];

    console.log('NESTTIER', nextTier);

    let progress = Math.floor((totalDonations / nextTier) * 100);
    console.log(totalDonations);
    console.log('progress', progress);

    return (
        <Grid container style={{width: '98%', border: '1px black solid', position: 'relative',
        left: '1%', height: '2rem', borderRadius: '1rem'}}>
            <Grid item xs={12 * (progress/100)}
                style={{
                    width: `${progress}%`, height: '2rem', borderRadius: '1rem',
                    backgroundColor: 'green', textAlign: 'center', margin: '0%'
                }}>
                <h3 style={{margin: '0%', position: 'relative', top: '.5rem'}}>${nextTier - totalDonations} until {allTiers[allTiers.indexOf(tier) + 1]} tier</h3>
            </Grid>
            <Grid item xs={12 - (12 * (progress/100))}>
            <div style={{textAlign: 'center'}}>
                    <h4 style={{ margin: '0%', position: 'relative', top: '.5rem'}}>({`${progress}%`})</h4>
            </div>
            </Grid>            
        </Grid>
    )
};

export default TierProgress;
