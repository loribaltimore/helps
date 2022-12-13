import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { addToCart, removeFromCart } from '../functions/updateCart';
import { useContext } from 'react';
import { MainContext } from '../../components/MainContext';


function CartDropdown(props) {
  let { cart } = props;
  let { setCart } = useContext(MainContext);
  
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

  return (
    <div >
<List  component="nav" aria-label="mailbox folders" style={{ width: '15rem', position: 'relative', borderRadius: '.25rem', boxShadow: '2px 2px lightgray', backgroundColor: 'white'}}>
        {
          cart !== undefined ?
          cart.items.map(function (element, index) {
            return <div key={index}>
              <div>
                <Grid container>
                  <Grid item xs={4}>
                    <ListItem >
                      <ListItemText primary={element.name} secondary={`x ${element.qty}`}/>
                    </ListItem>
                  </Grid>
                  <Grid item xs={8}>
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
        
</List>
    </div>
  )

};

export default CartDropdown;


