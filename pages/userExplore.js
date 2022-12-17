import Cause from '../Explore/components/Cause';
import CharityCard from '../Explore/components/CharityCard';
import CharityPage from '../Explore/components/CharityPage';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';


function Explore() {
    let { currentUser } = useContext(MainContext);
    let allInterests = [];
    currentUser !== undefined ?
        allInterests = Object.keys(currentUser.charities.interests) : '';
    let [orgs, setOrgs] = useState(undefined);
    let [currentOrg, setCurrentOrg] = useState(undefined);
    let [currentCause, setCurrentCause] = useState(undefined);
    let [currentPage, setCurrentPage] = useState(1);
    let pageCalc = (currentPage -1) * 10;

    let handleChange = (event) => {
        setCurrentPage(event.target.innerText);
        window.scrollTo(0, 0);
    };
    if (currentUser !== undefined) {
        console.log(currentUser.charities.interests);
    }
    return (
        <div >
            {
                currentOrg === undefined ?
                    orgs === undefined ?
                        allInterests.slice(pageCalc, pageCalc+10).map(function (element, index) {
                            return <Cause cause={element} setOrgs={setOrgs} setCurrentCause={setCurrentCause} key={index} orgs={orgs} currentPage={currentPage}/>
                            })                        
                    :
                        orgs.slice(pageCalc, pageCalc+10).map(function (element, index) {
                            return <CharityCard org={element} key={index} setCurrentOrg={setCurrentOrg} currentCause={currentCause}/>
                        })
                :
                    <CharityPage currentOrg={currentOrg} />
            }

             <Pagination count={10} color="primary" onChange={(event) => handleChange(event)} />
        </div>
    )
};

// Explore.getInitialProps = async(ctxt) => {
//     let response = await charityByCause()
//         .then(data => { console.log(data); return data }).catch(err => console.log(err));
//     let { data } = response;
//     return data;
// }


export default Explore;