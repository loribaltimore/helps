import { ExploreContext } from './ExploreContext';
import { useContext } from 'react';

import axios from 'axios';
function Cause(props) {
    let { cause } = props;
    let { setOrgs, setCurrentCause, currentPage } = useContext(ExploreContext);

    let handleClick = async () => {
         await axios({
            method: 'get',
             url: `http://localhost:3000/explore/charities/${cause}`,
             params: {
                 page: currentPage
             }
         }).then(data => { setOrgs(data.data.nonprofits); setCurrentCause(cause) }).catch(err => console.log(err));
    }

    return (
        <div style={{ border: '1px solid black', backgroundColor: 'white', cursor: 'pointer', textAlign: 'center' }}
            onClick={() => handleClick()}>
            <h2>
                {cause}
            </h2>
        </div>
    )
};

export default Cause;