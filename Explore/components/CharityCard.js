import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import CharityLike from './CharityLike';

function CharityCard(props) {
    let router = useRouter();
    let { org, setCurrentOrg } = props;
    let { coverImageUrl } = org;
    let orgNameUrl = org.name.split(' ').join('').toLowerCase();
    let handleClick = () => {
        router.push(org.profileUrl)
    };

    return (
        <div onClick={() => handleClick()} style={{ height: '15rem', marginBottom: '1%', border: '1px solid black', cursor: 'pointer' }}>
            <Grid container>
                <Grid item xs={11}>
                <Container style={{width: '90%'}}>
                <Grid container>
                    <Grid item xs={6}>
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
                <Grid item xs={1}>
                <CharityLike />
                </Grid>
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