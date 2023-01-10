import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addToCart, removeFromCart } from '../functions/updateCart';
import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import { useRouter } from 'next/router'
import CheckoutBtn from './CheckoutBtn';
import DonateBtn from './DonateBtn';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';



function CartDropdown(props) {
  let { cart } = props;
  let { setCart } = useContext(MainContext);
  console.log(cart);
  let test = <TollTwoToneIcon style={{ fontSize: '1.5rem', color: 'goldenrod' }} />

  let handleClick = async (type, cart, item) => {
    if (type === 'add') {
      let response = await addToCart(cart, item).then(data => { return data }).catch(err => console.log(err));
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
                      <img src={element.img} style={{width: '90%', height: 'inherit'}}/>
                    </ListItem>
                  </Grid>
                  <Grid item xs={4}>
                    <ListItem >
                      <ListItemText primary={element.name} secondary={`x ${element.qty}`}/>
                    </ListItem>
                  </Grid>
                  <Grid item xs={5}>
                    <ListItem >
                      <Button variant="outlined" onClick={() => handleClick('add', cart, element)}>Add</Button>
                      <Button variant="outlined" onClick={() => handleClick('remove', cart, element)}>Remove</Button>
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
          <Grid container style={{ width: '50%' }}>
            <Grid item xs={6}>
                  {
                  cart !== undefined ?
                    <ListItem >
                      <ListItemText primary="Total: " secondary={`$${cart.total}`}/>
                    </ListItem>
                    :
                    <ListItem >
                      <ListItemText primary="Total: " secondary='$0.00'/>
                      </ListItem>          
                  }
            </Grid>
            <Grid item xs={6}>
                  {
                    cart !== undefined ?
                      <ListItem >
                          <TollTwoToneIcon style={{ fontSize: '2rem', color: 'goldenrod', position: 'relative', top: '.5rem'}}/> {cart.coin.qty}
                      </ListItem>
                      :
                      <ListItem >
                       <TollTwoToneIcon style={{ fontSize: '1.5rem', color: 'goldenrod'}}/> 0
                      </ListItem>
                  }
            </Grid>
        </Grid>
        {
          cart !== undefined && cart.items.length ?
            <DonateBtn /> : ''
            // <CheckoutBtn cart={cart}/> : ''
      }
      </List>
    </div>
  )

};

export default CartDropdown;


