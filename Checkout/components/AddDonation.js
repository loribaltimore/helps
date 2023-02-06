import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { updateCoin, updatePool } from '../../Cart/functions/updateCart';

function AddDonation({cart, org, setCart, pool}) {

    let handleClick = async () => {
        if (pool === false) {
            await updateCoin(cart, org, -1)
            .then(data => { console.log(data); setCart(data) }).catch(err => console.group(err)); 
        } else {
            await updatePool(cart, 1)
                .then(data => { setCart(data) }).catch(err => console.log(err));
        }
    };

    return (
            <AddCircleOutlineIcon style={{ fontSize: '2.5rem', color: 'blue', cursor: 'pointer', position: 'relative', margin: '0%' }}
                // onMouseEnter={() => handlehover()}
                // onMouseLeave={() => handleleave()}
                onClick={() => handleClick()} />
    )
};


export default AddDonation;