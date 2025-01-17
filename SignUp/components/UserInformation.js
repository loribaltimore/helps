import { SignUpContext } from './SignUpContext';
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import axios from 'axios';

function UserInformation(props) {
    let { setRenderBio, setRenderAddress } = props;
    let {bio, setBio } = useContext(SignUpContext);
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [age, setAge] = useState('');
    let [test, setTest] = useState('');

    let handleClick = () => {
        setBio({ firstName, lastName, age });
        setRenderBio(false);
        setRenderAddress(true);
    };

    let doClick = async () => {
        let response = await axios({
            method: 'post',
            url: "http://localhost:3000/signup",
            data: {
                firstName: 'balls'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(data => console.log(data)).catch(err => console.log(err));
    }

    return (
        <div >
            <Container style={{ border: '1px lightgray solid', padding: '3%' }}>
            <h1>Tell us about yourself..</h1>
                <Grid container>
                    <Grid item xs={3}>
                        <Item>
                        <TextField
                                style={{ backgroundColor: 'lightgray' }}
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value) }
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                            <Item>
                            <TextField
          style={{backgroundColor: 'lightgray'}}
          required
                                id="outlined-required"
                                placeholder="Last Name"
                                onChange={(event) => setLastName(event.target.value) }

          label="Required"
                            />
                            </Item>
                            </Grid>
                            <Grid item xs={3}>
                            <Item>
                         <TextField
           style={{backgroundColor: 'lightgray', marginBottom: '1%'}}
          required
                                id="outlined-required"
                                placeholder="Age"
                                label="Required"
                                onChange={(event) => setAge(event.target.value) }
                                value={age}
        />
                        </Item>
                    </Grid>
                </Grid>
                {
                    firstName && lastName && age ?
                    <Button variant="contained" onClick={() => handleClick()}>
                    Add Address
                    </Button> : ''
                }
                
            </Container>
        </div>
    )

};

export default UserInformation;