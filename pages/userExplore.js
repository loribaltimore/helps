import axios from 'axios';
import Cause from '../Explore/components/Cause';
import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { ExploreContext } from '../Explore/components/ExploreContext';
import CharitySearch from '../Explore/components/CharitySearch';
import { useContext } from 'react';
import AltCause from '../Explore/components/AltCause';
import SearchAccordion from '../Explore/components/SearchAccordion';


function Explore({ user }) {
    console.log(user);
    let { setCurrentUser, setAllLiked, setCurrentPage, currentPage, allLiked, orgs, currentUser, setOrgs } = useContext(ExploreContext);
    let allInterests = [];
    let pageCalc = (currentPage - 1) * 10;

    let [search, setSearch] = useState('');
    let [searchResults, setSearchResults] = useState([]);


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
                        <SearchAccordion setSearch={setSearch}
                            search={search} setSearchResults={setSearchResults}
                            searchResults={searchResults} setOrgs={setOrgs}
                        />
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
            </Grid>
        </div>
    )
};

Explore.getInitialProps = async (ctxt) => {
    let { user } = ctxt.req;
    return { user: user._doc };
    // let response = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/tester'
    // }).then(data => { return data}).catch(err => console.log(err));
    // let { data } = response;
    // let { currentUser } = data;
    // return { user: currentUser };
}   

export default Explore;


///get page to reload after liking org to show change in UI
///add unlike capability 
//user recommended page needs fixing;
//remove from recommended page on like rather than showing heart;