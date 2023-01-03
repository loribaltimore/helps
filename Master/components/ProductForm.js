import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import { MainContext } from '../../components/MainContext';
import { MasterContext } from './MasterContext';
import axios from 'axios';
import FormData from 'form-data';


function ProductForm(props) {
    let { setFlash } = useContext(MainContext);
    let { setAllProducts } = useContext(MasterContext);
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
                break;
        }
    };

    let handleClick = async () => {
            let form = new FormData();
            form.append('img', img[0]);
            form.append('name', name);
            form.append('price', price);
            form.append('cost', cost);
        form.append('lead', lead * timeIncrement);
        await axios.post(
                'http://localhost:3000/products',
                form,
                {
                    headers: {
                        'Content-Type': 'mulitpart/form-data'
                    }
                }
            ).then(data => {
                setName('');
        setPrice('');
        setCost('');
        setLead('');
        setTimeIncrement('');
        setImg('');
        setFlash({ msg: 'Successfully added product!', type: 'success', render: true })
            setAllProducts(data.data);
                return data
            }).catch(err => console.log(err));
        };
        

    return (
        <div style={{ backgroundColor: 'white' }}>
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
                    <Grid item xs={12}>
                    <Button variant="outlined" component="label"  style={{marginBottm: '1%'}}>
                            Add Image
                    <input type="file" name="img" hidden multiple onChange={(event) => { console.log(event.target.files); setImg(event.target.files) }}/>
                    </Button>
                    <Button variant="contained" type="submit" onClick={() => handleClick()}>Submit</Button>
                        </Grid>
            </Grid>
        </div>
    )
};

export default ProductForm;