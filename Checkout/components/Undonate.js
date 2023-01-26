import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';
import { updateCoin } from '../../Cart/functions/updateCart';

function Undonate(props) {
    let {org, handlehover, handleleave, cart} = props
    let { setCart, setRenderPool} = useContext(MainContext);

    let handleClick = async () => {
        console.log('CHARITY UN-DONATE IS CLICKED');
        await updateCoin(cart, org.name, 2)
            .then(data => {console.log('COIN UPDATED'); console.log(data); setCart(data)})
            .catch(err => console.log(err));
    };

    return (
        <div>
            <CancelOutlinedIcon style={{ color: 'red', fontSize: '3rem', cursor: 'pointer'  }}
            onClick={() => handleClick()}
            onMouseEnter={() => handlehover()}
            onMouseLeave={() => handleleave()}/>
        </div>
    )
};

export default Undonate;


// make sure undonate works
// proceed with checkout by adding prompt to add remainder to pool or add more funds
// to get full coin
// add charities to queue