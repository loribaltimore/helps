import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';


function CoinTotal(props) {
    let { currentUser } = useContext(MainContext);

    return (
        <div>
            {
                currentUser !== undefined ?
                    <div>
                        <p style={{fontSize: '2rem'}}><TollTwoToneIcon style={{fontSize: '2rem', color: '#5ce1e6'}}/> : {currentUser.charities.donations.coin} Coin</p>
                        <p style={{ fontSize: '2rem' }}>Total Donated: ${currentUser.charities.donations.total}</p>
                    </div>
                    : ''
            }
        </div>
    )

};

export default CoinTotal;
