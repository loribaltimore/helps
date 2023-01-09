import React from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { AnimationOutlined } from '@mui/icons-material';


export default function CheckoutBtn({ cart }) {
  let { items, coin } = cart;
  console.log(items);
  console.log(process.env.COIN_CODE)
    React.useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
      }
  
      if (query.get('canceled')) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      }
    }, []);
    
  let usableCoin = parseInt(coin.toString().split('.')[0])
  
    return (
      <form action="/checkout" method="POST">
        {
          items.map(function (element, index) {
            return <input name={`cart[]`} value={element.code + ':' + element.qty} key={index} hidden/>
          })
        }
        <input value={coin.code + ':' + Math.floor(coin.qty)} name="cart[]" hidden/>
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
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
      </form>
    );
};

create a walkthrough for users to choose which charities to give coin to
create an option for them to round up to next coin amount
create an option to add to pool 