import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';


function CoinTotal({currentUser}) {

    return (
        <div style={{border: '1px solid black', backgroundColor: 'white'}}>
            {
                currentUser !== undefined ?
                    <div>
                        <p style={{ fontSize: '2rem' }}>Total Donated: ${currentUser.membership.totalDonations * 5}</p>
                    </div>
                    : ''
            }
        </div>
    )

};

export default CoinTotal;
