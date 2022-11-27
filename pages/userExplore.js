import axios from 'axios';
import charityCauses from '../util/charityCauses';
import charityByCause from '../Explore/controllers/charityControllers';
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
        allInterests = currentUser.charities.interests : '';
    let [orgs, setOrgs] = useState(undefined);
    let [currentOrg, setCurrentOrg] = useState(undefined);
    let [currentPage, setCurrentPage] = useState(0);
    let pageCalc = currentPage * 10;

    let handleChange = (event) => {
        setCurrentPage(event.target.innerText);
        window.scrollTo(0, 0);
    };

    return (
        <div >
            {
                currentOrg === undefined ?
                    orgs === undefined ?
                        allInterests.slice(pageCalc, pageCalc+10).map(function (element, index) {
                            return <Cause cause={element} setOrgs={setOrgs} key={index} orgs={orgs} />        
                            })                        
                    :
                        orgs.slice(pageCalc, pageCalc+10).map(function (element, index) {
                            return <CharityCard org={element} key={index} setCurrentOrg={setCurrentOrg}/>
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