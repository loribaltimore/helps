import { SignUpContext } from './SignUpContext';
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Item from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import StateInput from './StateInput';

function UserAddress(props) {
    let {setShipping, setBilling} = useContext(SignUpContext);
    let { setIsBilling, isBilling, setRenderAddress, setRenderContact } = props;
    let [streetNumber, setStreetNumber] = useState('');
    let [streetName, setStreetName] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [renderBilling, setRenderBilling] = useState(false);
    let [renderShipping, setRenderShipping] = useState(true);

    let msg = {
        'false': 'Submit Address',
        'true': 'Add Billing Address'
    };
    let header = {
        'true': 'Billing Address',
        'false': 'Where Should We Ship Things For You?'
    };
    console.log(state);
    let handleClick = () => {
        event.target.click();
        if (renderBilling === true && renderShipping === true) {
            console.log('1')
            setShipping({ streetNumber, streetName, city, state });
            setStreetNumber('');
            setStreetName('');
            setCity('');
            setState('');
            setIsBilling(true);
            setRenderShipping(false);
        } else if (renderBilling === true && renderShipping === false) {
            console.log('2')
            setBilling({ streetNumber, streetName, city, state });
            setRenderAddress(false);
            setRenderContact(true);
        } else {
            console.log('3')
            setBilling({ streetNumber, streetName, city, state, sameAsShipping: true });
            setShipping({ streetNumber, streetName, city, state });
            setRenderAddress(false);
            setRenderContact(true);
        };      
    };


    let handleChange = (event) => {
        setRenderBilling(event.target.value === 'true');
    };
    return (
        <div >
            <Container style={{ border: '1px lightgray solid', padding: '3%' }}>
                        <h1>{header[isBilling]}</h1>   
                <Grid container>
                    <Grid item xs={3}>
                        <Item>
                        <TextField
            style={{backgroundColor: 'lightgray'}} 
            required
          id="outlined-required"
           label="Required"
                                placeholder="Street Number"
                                value={streetNumber}
                                onChange={(event) => setStreetNumber(event.target.value)}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                            <Item>
                            <TextField
          style={{backgroundColor: 'lightgray'}}
          required
          id="outlined-required"
                                label="Required"
                                value={streetName}
          placeholder="Street Name"
                                onChange={(event) => setStreetName(event.target.value)}
                            />
                            </Item>
                            </Grid>
                            <Grid item xs={3}>
                            <Item>
                         <TextField
           style={{backgroundColor: 'lightgray', marginBottom: '1%'}}
          required
                                id="outlined-required"
                                value={city}
                                label="Required"
                                placeholder="City"
                                onChange={(event) => setCity(event.target.value)}
        />
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <StateInput setState={setState} state={state}/>
                        </Item>
                        </Grid>
                    {
                        isBilling === false ?
                        <Grid item xs={3}>
                        <Item>
                        <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Billing Address</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    onChange={(event) => handleChange(event)}
  >
    <FormControlLabel value={false} control={<Radio />} label="Same As Shipping" />
    <FormControlLabel value={true} control={<Radio />} label="Add Billing Address" />
  </RadioGroup>
</FormControl>
                        </Item>
                    </Grid> : ''
                    }
                </Grid>
                {
                    streetNumber && streetName && city ?
                        <Button onClick={() => handleClick()}>{msg[renderBilling]}</Button>
                        : ''
                }
            </Container>      
        </div>
    )
};

export default UserAddress;