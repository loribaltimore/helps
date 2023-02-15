import Button from '@mui/material/Button';
import {addToCart} from '../../Cart/functions/updateCart';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';
import ItemAccordion from './ItemAccordion';

function ItemShowcase({currentUser, product, onlyCoin, setRerender, rerender}) {
    let { img, name, price } = product;
    let { cart, setCart } = useContext(MainContext);
    let [alert, setAlert] = useState(false);
    let [added, setAdded] = useState(false);
    let [selectedSize, setSelectedSize] = useState(undefined);
    let [selectedColor, setSelectedColor] = useState([]);
    let sizeable = false;

    if (/shirt|hoodie/i.test(name) === true) {
        sizeable = true;
    };


    let handleClick = async () => {
        let canAdd = false;
        if (sizeable === true) {
            selectedColor.length === 2 && selectedSize !== undefined ?
            canAdd = true : '';
        } else {
            selectedColor.length === 2?
            canAdd = true : '';
        };
        
        if (canAdd === true) {
            let config = { size: selectedSize, colors: selectedColor, qty: 1 };
            product.config = config;
            await addToCart(currentUser, cart, product, onlyCoin).then(data => { setCart(data) }).catch(err => console.log(err))
            setSelectedSize(undefined);
            setSelectedColor([]);
            setAdded(true);
        } else {
            setAlert(true);
        }
    };

    return (
        <div style={{ textAlign: 'center', border: '1px solid black', borderRadius: '2rem', backgroundColor: 'white', width: '90%' }}>          
                <h2>{name} ${price}</h2>
                
            <img src={img[0].path} style={{ width: '85%', position: 'relative', left: '0%', height: 'auto' }} />
            <ItemAccordion setSelectedSize={setSelectedSize} setSelectedColor={setSelectedColor}
                selectedColor={selectedColor} sizeable={sizeable}
                selectedSize={selectedSize} alert={alert} setAlert={setAlert}
                added={added} setAdded={setAdded} />
            <Button variant="contained" onClick={() => handleClick()} style={{ position: 'relative', left: '0%' }}>Add to Cart</Button>
        </div>

)
};

export default ItemShowcase;


///finish homepage
