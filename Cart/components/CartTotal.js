import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TollTwoToneIcon from '@mui/icons-material/TollTwoTone';
import PoolIcon from '@mui/icons-material/Pool';

function CartTotal({cart}) {

    return (
        <div>
            
        <Grid container>
<Grid item xs={4}>
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

<Grid item xs={4}>
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
      <Grid item xs={4}>
              {
              cart !== undefined ?
              <ListItem >
                  <PoolIcon style={{ color: 'blue', fontSize: '2rem' }} /> {cart.pool}
                  </ListItem>
                  : ''
          }
      </Grid>
</Grid>

        </div>
    )
};

export default CartTotal;

// charity pool vote component / resource;