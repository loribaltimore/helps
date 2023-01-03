import Button from '@mui/material/Button';
import {addToCart} from '../../Cart/functions/updateCart';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';

function ItemShowcase({product}) {
    let { img, name, price, item } = product;
    let { cart, setCart } = useContext(MainContext);
    console.log(img[0].path);

    let handleClick = async (cart, item) => {
        let response = await addToCart(cart, item).then(data => { return data }).catch(err => console.log(err));
        setCart(response);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{name} ${price}</h2>
            <img src={img[0].path} style={{ width: '85%', position: 'relative', left: '0%', height: 'auto'}} />
            <Button variant="contained" onClick={()=> handleClick(cart, item)} style={{position: 'relative', left: '0%'}}>Add to Cart</Button>
        </div>

)
};

export default ItemShowcase;

