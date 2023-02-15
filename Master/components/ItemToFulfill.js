import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PurchaseFulfill from './PurchaseFulfill';

function ItemToFulfill({item, donationId, setItemList}) {
    let [toRender, setToRender] = useState(false);
    
    let handleClick = () => {
        setToRender(true);
      };

    return (
        <div>

        {
            toRender === false ?
            <Grid container style={{ height: '6rem' }} >
                     <Grid item xs={3}>
                    <ListItem >
                      <img src={item.img} style={{ width: '90%', height: 'inherit' }} />
                      </ListItem>
                      <ListItem style={{height: '1rem'}}>
                      {
                            item.config.colors.map(function (item, index) {
                              return <div
                                style={{ height: '1rem', width: '1rem', backgroundColor: item }}>
                                </div>
                            
                            })
                      }
                      <div style={{width: '.5rem'}}></div>
                      {
                        item.config.size ?
                        <h5 style={{width: '1rem', height: '1rem', textAlign: 'center', border: '1px black solid', borderRadius: '50%'}}>{item.config.size}</h5>
                           : ''
                      }
                      </ListItem>
                  </Grid>
                  
                      <Grid item xs={4}>
                          <ListItem >
                          <ListItemText primary={item.name} secondary={`x ${item.config.qty}`}/>
                        </ListItem>
                        <Divider/>
                      </Grid>
                      <Grid item xs={4} >
                        <ListItem style={{height: '6rem'}}>
                          <Button variant='contained' onClick={() => handleClick()}>Fulfill</Button>
                        </ListItem>
                        <Divider/>
                    </Grid>
                    </Grid> 
            : <PurchaseFulfill donationId={donationId} item={item} setItemList={setItemList}/>
            }
                 </div>   
    )
};


export default ItemToFulfill;