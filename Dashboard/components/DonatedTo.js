import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import CharityCard from '../../Explore/components/CharityCard';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function DonatedTo(props) {
    let { currentUser } = useContext(MainContext);
    return (
        <div>
            {
                currentUser !== undefined ?
                    currentUser.charities.donations.orgs.map(function (element, index) {
                        return <Grid container>
                        {
                            currentUser !== undefined ?
                                currentUser.charities.donations.orgs.map(function (element, index) {
                                    if (index % 2 === 0) {
                                        return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                            <CharityCard org={element} cardType={undefined}/>
                                            </Grid>
                                    } else {
                                        return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                            <CharityCard org={element} cardType={undefined}/>
                                      </Grid> 
                                    }
                            }): ''
                        }
                    </Grid>
                          
                    }) :
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