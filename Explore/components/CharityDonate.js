import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';
import { updateCoin } from '../../Cart/functions/updateCart';

function CharityDonate(props) {
    let { org, currentCause } = props
    let { setCart } = useContext(MainContext);
    
    let handleClick = async () => {
        let response = await updateCoin()
            .then(data => { console.log(data); return data })
            .catch(err => console.log(err));
        // setCart(response.)
    };
    
    return (
        <div style={{width: '2rem'}}>
            <TollTwoToneIcon style={{ fontSize: '3rem', color: 'goldenrod', cursor: 'pointer' }} onClick={(event) => handleClick(event)}/>
        </div>
)
};

export default CharityDonate;