import axios from 'axios';
import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import CharityPage from '../Explore/components/CharityPage';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ExploreContext } from '../Explore/components/ExploreContext';
import { useContext } from 'react';
import Loading from '../Loading/components/Loading';

function userRecommended({user, allRecs, interestsByName}) {
    let {setCurrentCause, allLiked, setAllLiked} = useContext(ExploreContext);
    let [currentUser, setCurrentUser] = useState(undefined);
    let [currentPage, setCurrentPage] = useState(1);
    let [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (user !== undefined && currentUser === undefined) {
            setCurrentUser(user);
            setCurrentCause(interestsByName[currentPage - 1]);
            setAllLiked(user.charities.liked.orgs.map(x => x.name));
        };
    }, [currentUser]);
    
    let pageCalc = (currentPage -1) * 10;
    

    let handleChange = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Navbar currentUser={user}/>
        <Grid container>
            {
                isLoaded === true ?
                    <Grid item xs={12} >
                    <h2>{interestsByName[currentPage-1]}</h2>
                    </Grid>
                    : <Loading setIsLoaded={setIsLoaded}/>
            }
             
            {
                isLoaded === true?
                    allRecs.slice(pageCalc, pageCalc + 10).map(function (element, index) {
                        let liked = false;
                        if (allLiked.indexOf(element.name) > -1) {
                            liked = true;
                        };
                                    if (index % 2 === 0) {
                                       return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                           <CharityCard org={element} cardType={'like'} liked={liked}/>
                                            </Grid>
                                    } else {
                                        return  <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                            <CharityCard org={element} cardType={'like'} liked={liked}/>
                                            </Grid>
                                             }
                                
                                })       
                   
                 : ''
            }
            
            {
                isLoaded === true ?
                <Pagination count={3} color="primary" onChange={(event) => handleChange(event)} />
                    : ''
            }
            </Grid>
            </div>
    )
};

userRecommended.getInitialProps = async (ctxt) => {
    return {
        user: ctxt.req.user,
        allRecs: ctxt.query.allRecs,
        interestsByName: ctxt.query.interestsByName,
    }
};


export default userRecommended;


//correct the layout to display correctly;