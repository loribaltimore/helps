import axios from 'axios';
import Cause from '../Explore/components/Cause';
import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ExploreContext } from '../Explore/components/ExploreContext';
import { useContext} from 'react';


function Explore({ user }) {
    console.log(user);
    let { setCurrentUser, setAllLiked, setCurrentPage, currentPage, allLiked, orgs, currentUser } = useContext(ExploreContext);
    let allInterests = [];
    let pageCalc = (currentPage - 1) * 10;
    if (currentUser !== undefined) {
        allInterests = Object.keys(currentUser.charities.interests);
    };
    useEffect(() => {
        if (user !== undefined && currentUser === undefined) {
            console.log('its undefined');
            setCurrentUser(user);
            setAllLiked(user.charities.liked.orgs.map(x => x.name));
        }
    }, []);

    let handleChange = (event) => {
        setCurrentPage(event.target.innerText);
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <Navbar currentUser={user} />
        <Grid container >
            {
                    orgs === undefined ?
                        allInterests.slice(pageCalc, pageCalc+10).map(function (element, index) {
                            return <Grid item xs={12} style={{ marginBottom: '1%' }} key={index}>
                            <Cause cause={element} />
                            </Grid>
                            })
                    :
                        orgs.slice(pageCalc, pageCalc + 10).map(function (element, index) {
                            let liked = false;
                            if (allLiked.indexOf(element.name) > -1) {
                                liked = true;
                            };
                            if (index % 2 === 0) {
                                return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                    <CharityCard org={element} cardType={'like'} liked={liked}/>
                                    </Grid>
                            } else {
                                return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                    <CharityCard org={element} cardType={'like'} liked={liked}/>
                              </Grid> 
                            }
                    }) 
            }

             <Pagination count={10} color="primary" onChange={(event) => handleChange(event)} />
            </Grid>
        </div>
    )
};

Explore.getInitialProps = async (ctxt) => {
    // let { user } = ctxt.req;
    // return { user: user._doc };
    let response = await axios({
        method: 'get',
        url: 'http://localhost:3000/tester'
    }).then(data => { return data}).catch(err => console.log(err));
    let { data } = response;
    let { currentUser } = data;
    return { user: currentUser };
}   

export default Explore;


///get page to reload after liking org to show change in UI
///add unlike capability 
//user recommended page needs fixing;
//remove from recommended page on like rather than showing heart;