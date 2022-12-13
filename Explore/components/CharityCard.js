import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import CharityLike from './CharityLike';

function CharityCard(props) {
    let { currentUser } = useContext(MainContext);
    let router = useRouter();
    let { org, setCurrentOrg, currentCause } = props;
    let { coverImageUrl } = org;
    let orgNameUrl = org.name.split(' ').join('').toLowerCase();
    let allOrgs = currentUser.charities.liked.orgs.map(x => x.name);
    let handleClick = () => {
        // router.push(org.profileUrl);

    };

    return (
        <div  style={{ height: '15rem', marginBottom: '1%', border: '1px solid black', cursor: 'pointer', backgroundColor: 'white' }}>
            <Grid container>
                <Grid item xs={11}>
                <Container style={{width: '90%'}}>
                <Grid container>
                    <Grid item xs={6} onClick={() => handleClick()}>
                        <h3>{org.name}</h3>
                            <img src={coverImageUrl} style={{ height: '10rem', width: '20rem' }} />
                    </Grid>
                    <Grid item xs={6}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '.75%'}}>{org.description}</p>
                            <Grid container>
                                <Grid item xs={8}>
                                    <p>{org.location}</p>
                                </Grid>
                                <Grid item xs={4}>
                                <img src={org.logoUrl} style={{ width: '5rem' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Container>
                </Grid>
                {
                    allOrgs.indexOf(org.name) === -1 ?
                    <Grid item xs={1}>
                            <CharityLike org={org} currentCause={currentCause}/>
                    </Grid>
                        :
                    ''  
                }
                
            </Grid>
            
        </div>
    )
};

export default CharityCard;

//format card
///create page for each charity
///create 'like' button => add to Spread
//spread could be like a donation playlist
///set amount spread => amount to each => total => tier


// program and style btn
// change oeg fetch