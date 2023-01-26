import Grid from '@mui/material/Grid';
import CharityLike from './CharityLike';
import CharityUnlike from './CharityUnlike';
import CharityDonate from '../../Checkout/components/CharityDonate';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Undonate from '../../Checkout/components/Undonate';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';

function CharityCard(props) {
    let { org, cardType, liked, cart} = props;
    let [isHover, setIsHover] = useState(false);
    

    let styles = {
        like: {
            true: 'lightpink',
            false: 'white'
        },
        donate: {
            true: 'goldenrod',
            false: 'white'
        }
    };

    let handlehover = () => {
        setIsHover(true);
    }
    let handleleave = () => {
        setIsHover(false);
    }

    let icons = {
        like: {
            false: <FavoriteOutlinedIcon style={{ color: 'red', fontSize: '3rem', cursor: 'pointer' }} onMouseEnter={() => handlehover()} onMouseLeave={() => handleleave()}/>,
            true: <CharityUnlike org={org} handlehover={handlehover} handleleave={handleleave} />    
        },
        donate: {
            false: <TaskAltIcon style={{color: 'green', fontSize: '3rem', cursor: 'pointer' }} onMouseEnter={() => handlehover()} onMouseLeave={() => handleleave()}/>,
            true: <Undonate org={org} handlehover={handlehover} handleleave={handleleave} cart={cart}/>
        }
    };

    
    let maxDescLength = org.description.split('').slice(0, 240).join('');
    return (
        <div>
            <Grid container style={{ border: '2px solid black', borderRadius: '1rem', width: '25rem', height: '30rem', backgroundColor: styles[cardType][liked], margin: '5%' }}>
            
            <Grid item xs={2.25} style={{height: '2rem', marginBottom: '0%', paddingTop: '2%'  }}>
                                <img src={org.logoUrl} style={{ paddingLeft: '1rem' }} />
                            </Grid>
                <Grid item xs={9.75} style={{ height: '1rem' }}><h3 style={{ marginBottom: '0%', marginTop: '5%'}}>{org.name}</h3></Grid>

                <Grid item xs={12} style={{ height: '40%', position: 'relative', bottom: '.25rem' }}>
                    <img src={org.coverImageUrl} style={{width: '90%', height: '100%', padding: '5%', paddingBottom: '0%', borderRadius: '2rem'}}/>
                </Grid>
                            <Grid item xs={12} style={{ width: '90%', height: '20%', position: 'relative', top: '.75rem'}}>
                                <h3 style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '0%', margin: '0%' }}>Description</h3>
                                <p style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '0%', margin: '0%'}}>
                                    {maxDescLength}...
                                </p>
                </Grid>
                <Grid item xs={8} style={{ height: '10%', position: 'relative', top: '1.5rem'}}>
                    <h3 style={{paddingLeft: '7.5%', paddingRight: '7.5%', paddingTop: '0%', margin: '0%' }}>Profile</h3>
                    <a href={org.profileUrl} style={{paddingLeft: '7.5%', paddingRight: '7.5%', paddingTop: '0%', margin: '0%' }}>{org.profileUrl}</a>
                </Grid>
                <Grid item xs={12} style={{height: '10%'}}>
                <div style={{position: 'relative', left: '80%', width: '3rem'}}>
                    {   liked !== true && cardType !== undefined ?
                        cardType === 'donate' ?
                                <CharityDonate org={org} cart={cart}/>
                                :
                                <CharityLike org={org}  />
                            : icons[cardType][isHover]
                        }
                        </div>
                </Grid>
            </Grid>
            
        </div>
    )
};

export default CharityCard;
