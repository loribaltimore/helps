import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import CharityCard from '../../Explore/components/CharityCard';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function DonatedTo({currentUser}) {
    console.log(currentUser.charities.donations);
    return (
        <div>
            
            {
                currentUser !== undefined ?     
                    <Grid container>    
                        {
                            currentUser.charities.donations.map(function (element, index) {
                                if (index % 2 === 0) {
                                    return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                        <CharityCard org={element} cardType={'dashboard'} total={element.coinTotal * 5} />
                                        </Grid>
                                } else {
                                    return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                        <CharityCard org={element} cardType={'dashboard'} total={element.coinTotal * 5} />
                                </Grid> 
                                }
                            })
                        }
                            </Grid> :
                        
                    <div style={{textAlign: 'center'}}>
                        <h2>No Donations Yet!</h2>
                        <h5>See What's Out There</h5>
                        <Button>Explore</Button>
                    </div>
            }
        </div>
    )

};

export default DonatedTo;