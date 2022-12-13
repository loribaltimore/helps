import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';
import CartDropdown from './CartDropdown';

function CartBtn(props) {
    let [isCart, setIsCart] = useState(false);
    let { cart, setCart } = useContext( MainContext );

    let handleClick = () => {
        setIsCart(!isCart)
    };
    
    return (
        <div style={{ zIndex: '100' }}>
            <ShoppingCartOutlinedIcon onClick={() => handleClick()} style={{position: 'relative', top: '.5rem', fontSize: '2rem', color: '#ff5757', marginBottom: '1rem'}}/>
         
            {
                isCart === true ?
                    <CartDropdown cart={cart}/> : ''
        }
        </div>
    )
};

export default CartBtn;