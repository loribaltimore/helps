import React from 'react';
// import axios from 'axios';
import { useContext} from 'react';
import { MainContext } from '../../components/MainContext';
// import { loadStripe } from '@stripe/stripe-js';
// import { AnimationOutlined } from '@mui/icons-material';


export default function CheckoutBtn({canCheckout, toPool, setOpen}) {
  let { setCart, cart } = useContext(MainContext);

    React.useEffect(() => {

      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
      }
  
      if (query.get('canceled')) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }, []);
  
  let handleClick = function (event) {
    event.preventDefault();
    setOpen(true);
  };
    
  return (
    <div>
      {cart !== undefined ?
      <form action="/checkout" method="POST">
        {
          cart.items.map(function (element, index) {
            return <input name={`cart[]`} defaultValue={element.code + ':' + element.config.qty} key={index} hidden/>
          })
          }
          <input name="toPool" value={toPool} hidden/>
        <input defaultValue={cart.coin.code + ':' + Math.floor(cart.coin.qty)} name="cart[]" hidden/>
          <section>
            {
              canCheckout === true ?
                <button type="submit" role="link"> Checkout </button>
                :
                <button onClick={(event) => handleClick(event)}> Checkout </button>
            }
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
        </form> : ''
        }
      </div>
    );
};

// how do i want coin displayed at checkout ?
//   program feed of donators and charities on homepage - 
// program landing page - 
  