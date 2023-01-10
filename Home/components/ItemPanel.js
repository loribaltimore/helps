import Button from '@mui/material/Button';
import {addToCart} from '../../Cart/functions/updateCart';
import { MainContext } from '../../components/MainContext';
import { useContext } from 'react';

function ItemShowcase({product, onlyCoin}) {
    let { img, name, price } = product;
    let { cart, setCart } = useContext(MainContext);
    let handleClick = async () => {
        console.log(onlyCoin);
        let response = await addToCart(cart, product, onlyCoin).then(data => { return data }).catch(err => console.log(err));
        setCart(response);
    };

    return (
        <div style={{ textAlign: 'center', border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', width: '90%' }}>
            <h2>{name} ${price}</h2>
            <img src={img[0].path} style={{ width: '85%', position: 'relative', left: '0%', height: 'auto'}} />
            <Button variant="contained" onClick={()=> handleClick()} style={{position: 'relative', left: '0%'}}>Add to Cart</Button>
        </div>

)
};

export default ItemShowcase;


///finish homepage
