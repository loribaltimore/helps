import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MainContext } from '../../components/MainContext';
import { useContext, useState } from 'react';
import getSession from '../../functions/getSession';
import CartDropdown from './CartDropdown';

function CartBtn({currentUser, cart}) {
    let [isCart, setIsCart] = useState(false);
    // let { cart, setCart } = useContext( MainContext );

    let handleClick = async () => {
        setIsCart(!isCart)
        // await getSession().then(data => {
        //     if (data.cart !== undefined) {
        //         setCart(data.cart);
        //     };
        // })
    };
    
    return (
        <div style={{ zIndex: '100' }}>
            <ShoppingCartOutlinedIcon onClick={async () => await handleClick()} style={{position: 'relative', top: '.5rem', fontSize: '2rem', color: '#ff5757', marginBottom: '1rem'}}/>
         
            {
                isCart === true ?
                    <CartDropdown cart={cart} isFinalStep={false} currentUser={currentUser}/> : ''
        }
        </div>
    )
};

export default CartBtn;