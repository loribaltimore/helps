import Button from '@mui/material/Button';
import {addToCart} from '../../Cart/functions/updateCart';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';

function ItemShowcase(props) {
    let { img, name, cost, item } = props;
    let { cart, setCart } = useContext(MainContext);

    let handleClick = async (cart, item) => {
        let response = await addToCart(cart, item).then(data => { return data }).catch(err => console.log(err));
        setCart(response);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Our First {name} ${cost}</h2>
            <img src={img} style={{ width: '85%', position: 'relative', left: '0%', height: 'auto'}} />
            <Button variant="contained" onClick={()=> handleClick(cart, item)} style={{position: 'relative', left: '0%'}}>Add to Cart</Button>
        </div>

)
};

export default ItemShowcase;

