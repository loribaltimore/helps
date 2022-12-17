import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function AddProduct(props) {

    let [name, setName] = useState('');
    let [price, setPrice] = useState('');
    let [cost, setCost] = useState('');
    let [lead, setLead] = useState('');
    let [img, setImg] = useState('');
    let [timeIncrement, setTimeIncrement] = useState('');

    let handleChange = (event) => {
        setTimeIncrement(event.target.value);
    };

    let textfieldChange = (event) => {
        switch (event.target.name) {
            case 'name': setName(event.target.value);
                break;
            case 'price': setPrice(event.target.value);
                break;
            case 'cost': setCost(event.target.value);
                break;
            case 'lead': setLead(event.target.value);
        }
        console.log(name);
        console.log(price);
        console.log(cost);
    };

    let handleClick = async() => {
        let response = await axios({
            method: 'post',
            url: 'http://localhost:3000/products',
            data: {
                name,
                price,
                cost,
                lead: lead * timeIncrement,
                img
            }
        }).then(data => console.log(data)).catch(err => console.log(err));
    }

    return (
        <div style={{backgroundColor: 'white'}}>
            <TextField id="standard-basic" label="Name" variant="standard" name="name" value={name} onChange={(event) => textfieldChange(event)}/>
            <TextField id="standard-basic" label="Price" variant="standard" name="price" value={price} onChange={(event) => textfieldChange(event)}/>
            <TextField id="standard-basic" label="Cost" variant="standard" name="cost" value={cost} onChange={(event) => textfieldChange(event)}/>
                <Grid container>
                    <Grid item xs={3}>
                        <TextField id="standard-basic" label="Lead Time" variant="standard"  name="lead" value={lead} onChange={(event) => textfieldChange(event)}/>
                    </Grid>
                    <Grid item xs={3} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Time Increment</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={timeIncrement}
                                    label="Time Increment"
                                    onChange={(event) => handleChange(event)}>
                                        <MenuItem value={1}>Days</MenuItem>
                                        <MenuItem value={7}>Weeks</MenuItem>
                                        <MenuItem value={30}>Months</MenuItem>
                                </Select>
                        </FormControl>
                    </Grid>     
            </Grid>
            <Button variant="contained" component="label">
                Add Image
                    <input formEncType='multipart/form' type="file" name="img" hidden onChange={(event) => { setImg(event.target.value) }}/>
            </Button>
            <Button variant="contained" onClick={() => handleClick()}>Submit</Button>
        </div>
    )
};

export default AddProduct;