import axios from 'axios';
import CharityCard from '../Explore/components/CharityCard';
import CharityPage from '../Explore/components/CharityPage';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { MainContext } from '../components/MainContext';
import { useContext } from 'react';
import Loading from '../Loading/components/Loading';

function userRecommended(props) {
    let { currentUser } = useContext(MainContext);
    let [topInterests, setTopInterests] = useState(undefined);
    let [orgs, setOrgs] = useState(undefined);
    let [currentPage, setCurrentPage] = useState(1);
    
    let pageCalc = (currentPage -1) * 10;
     ;

    useEffect(() => {
        let fn = async () => {
            let response = await axios({
                method: 'get',
                url: 'http://localhost:3000/charities/recommended',
            }).then(data => {
                setTimeout(() => {
                    setOrgs(data.data.allRecs); setTopInterests(data.data.interestsByName)
                }, 3500)
                
            })
                .catch(err => console.log(err));
        };
        fn() 
    }, [currentUser]);
    

    let handleChange = (event) => {
        setCurrentPage(parseInt(event.target.innerText));
        window.scrollTo(0, 0);
    };

    return (
        <div >
            {
                topInterests !== undefined ?
                <div>
                    <h2>{topInterests[currentPage-1]}</h2>
                    </div>
                    : <Loading />
            }
            
            {
                orgs !== undefined ?
                    orgs.slice(pageCalc, pageCalc+10).map(function (element, index) {
                        return <CharityCard org={element} key={index}/>
                        })
                        : ''
                        
            }
            {
                orgs !== undefined ?
                <Pagination count={3} color="primary" onChange={(event) => handleChange(event)} />
                    : ''
            }
        </div>
    )
};

export default userRecommended;


///make sure the causes are being labeled correctly so you can have a header on each page of recs;