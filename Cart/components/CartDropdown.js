import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addToCart, removeFromCart } from '../functions/updateCart';
import { useContext, useState } from 'react';
import { MainContext } from '../../components/MainContext';
import { useRouter } from 'next/router'
import CheckoutBtn from '../../Checkout/components/CheckoutBtn';
import DonateBtn from '../../Checkout/components/DonateBtn';
import CartTotal from './CartTotal';
// import PoolPrompt from '../../Checkout/components/PoolPrompt';



function CartDropdown({ isFinalStep, currentUser, toPool, setOpen }) {
  let { setCart, cart } = useContext(MainContext);
  

  let handleClick = async (type, item) => {
    if (type === 'add') {
      let response = await addToCart(currentUser, cart, item, cart.coin).then(data => { return data }).catch(err => console.log(err));
      setCart(response);
    } else {
      let response = await removeFromCart(cart, item).then(data => { return data }).catch(err => console.log(err));
      !response.items.length ?
        setCart(undefined) : setCart(response);
    }
  };
  let router = useRouter();

  return (
    <div >
<List  component="nav" aria-label="mailbox folders" style={{ width: '25rem', position: 'relative', borderRadius: '.25rem', boxShadow: '2px 2px lightgray', backgroundColor: 'white'}}>
        {
          cart !== undefined ?
          cart.items.map(function (element, index) {
            return <div key={index}>
              <div>
                <Grid container>
                  <Grid item xs={3}>
                   
                    <ListItem >
                      <img src={element.img} style={{ width: '90%', height: 'inherit' }} />
                      </ListItem>
                      <ListItem style={{height: '1rem'}}>
                      {
                            element.config.colors.map(function (element, index) {
                              return <div
                                style={{ height: '1rem', width: '1rem', backgroundColor: element }}>
                                </div>
                            
                            })
                      }
                      <div style={{width: '.5rem'}}></div>
                      {
                        element.config.size ?
                        <h5 style={{width: '1rem', height: '1rem', textAlign: 'center', border: '1px black solid', borderRadius: '50%'}}>{element.config.size}</h5>
                           : ''
                      }
                      </ListItem>
                    
                  </Grid>
                  
                      <Grid item xs={4}>
                          <ListItem >
                          <ListItemText primary={element.name} secondary={`x ${element.config.qty}`}/>
                        </ListItem>
                      </Grid>
                   
                    <Grid item xs={5}>
                    <ListItem >
                      <Button variant="outlined" onClick={() => handleClick('add', element)}>Add</Button>
                      <Button variant="outlined" onClick={() => handleClick('remove', element)}>Remove</Button>
                    </ListItem>
                  </Grid> 
                </Grid>
                      <Divider />
              </div>
                  </div>    
          })
            :
            <ListItem >
              <ListItemText primary='Cart Empty'/>
            </ListItem>
        }

        {
          cart !== undefined ?
            <CartTotal cart={cart} />
            :
            <CartTotal cart={undefined} />
        }
        
        {
          isFinalStep === false ?
          cart !== undefined
            && cart.items.length ?
              <DonateBtn /> : ''
            :
            cart !== undefined  && cart.coin.qty === 0?
              <CheckoutBtn canCheckout={true} toPool={toPool} />
              :
              <CheckoutBtn canCheckout={false} setOpen={setOpen}/>
      }
      </List>
    </div>
  )

};

export default CartDropdown;


