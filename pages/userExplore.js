import axios from 'axios';
import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { ExploreContext } from '../Explore/components/ExploreContext';
import { useContext } from 'react';
import SearchAccordion from '../Explore/components/SearchAccordion';
import Recommended from '../Explore/components/Recommended';


function Explore({ user, allRecs, allLiked}) {
    let { setCurrentPage, currentPage, orgs, setOrgs } = useContext(ExploreContext);
    let pageCalc = (currentPage - 1) * 10;

    let [search, setSearch] = useState('');
    let [cause, setCause] = useState(undefined);
    let [searchResults, setSearchResults] = useState([]);


    // if (currentUser !== undefined) {
    //     allInterests = Object.keys(currentUser.charities.interests);
    // };

    let handleChange = (event) => {
        setCurrentPage(event.target.innerText);
        window.scrollTo(0, 0);
    };

    console.log(orgs);
    return (
        <div>
            <Navbar currentUser={user} />
        <Grid container >
                <SearchAccordion setSearch={setSearch}
                    search={search} setSearchResults={setSearchResults}
                    searchResults={searchResults} setOrgs={setOrgs}
                    setCause={setCause} orgs={orgs} cause={cause}
                            />
                 {
                        orgs !== undefined ?
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
                        }) : <Recommended allRecs={allRecs} pageCalc={pageCalc} allLiked={allLiked} />
            }
            </Grid>
        </div>
    )
};

Explore.getInitialProps = async (ctxt) => { 
    return {
        user: ctxt.req.user,
        allRecs: ctxt.query.allRecs,
        interestsByName: ctxt.query.interestsByName,
        allLiked: ctxt.query.allLiked
    }
}   

export default Explore;


///get page to reload after liking org to show change in UI
///add unlike capability 
//user recommended page needs fixing;
//remove from recommended page on like rather than showing heart;