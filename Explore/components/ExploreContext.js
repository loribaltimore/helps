import { createContext, useState } from 'react';

export let ExploreContext = createContext();

export function ExploreProvider(props) {
    let [allLiked, setAllLiked] = useState([]);
    let [currentUser, setCurrentUser] = useState(undefined);
    let [orgs, setOrgs] = useState(undefined);
    let [currentCause, setCurrentCause] = useState(undefined);
    let [currentPage, setCurrentPage] = useState(1);
    console.log('EXPLORE RERENDER');
    console.log(allLiked.length);

    return (
        <ExploreContext.Provider value={{allLiked, setAllLiked,
            currentUser, setCurrentUser, orgs, setOrgs,
            currentCause, setCurrentCause, currentPage, setCurrentPage}}>
            {props.children}
        </ExploreContext.Provider>
    )
};


