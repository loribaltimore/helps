import axios from 'axios';
import CharityPage from '../Explore/components/CharityPage';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { ExploreContext } from '../Explore/components/ExploreContext';
import { useContext } from 'react';
import Loading from '../Loading/components/Loading';

function userRecommended({user, allRecs, interestsByName}) {
    let {setCurrentCause, allLiked, setAllLiked} = useContext(ExploreContext);
    let [currentUser, setCurrentUser] = useState(undefined);
    let [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        if (user !== undefined && currentUser === undefined) {
            setCurrentUser(user);
            setCurrentCause(interestsByName[currentPage - 1]);
            setAllLiked(user.charities.liked.orgs.map(x => x.name));
        };
    }, [currentUser]);
    
    let pageCalc = (currentPage -1) * 10;
    

   

    return (
        <div>
            <Navbar currentUser={user}/>
            </div>
    )
};

userRecommended.getInitialProps = async (ctxt) => {
  
};


export default userRecommended;


//correct the layout to display correctly;