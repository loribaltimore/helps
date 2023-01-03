import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import axios from 'axios';

function test({data}) {
    let { currentUser } = data;
    return (
        <Grid container>
            {
                currentUser !== undefined ?
                    currentUser.charities.donations.orgs.map(function (element, index) {
                        if (index % 2 === 0) {
                            return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                <CharityCard org={element} cardType={'donate'}/>
                                </Grid>
                        } else {
                            return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                <CharityCard org={element} cardType={'donate'}/>
                          </Grid> 
                        }
                }): ''
            }
        </Grid>
    )
};

test.getInitialProps = async (ctxt) => {
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/tester'
    }).then(data => { return data}).catch(err => console.log(err));
    let { data } = response;
    console.log(data);
    return { data };
    
}

export default test;