import { SignUpContext } from './SignUpContext';
import { useState, useContext } from 'react';
import createUser from '../functions/createUser';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function UserContact(props) {
    let { setContact } = useContext(SignUpContext);
    let { setRenderAuth, setRenderContact } = props;
    let [phone, setPhone] = useState('');
    let [email, setEmail] = useState('');

    let handleClick = async () => {
       await setContact({ phone, email });
        setRenderContact(false);
        setRenderAuth(true);
    };

    return (
        <div >
            <Container style={{ border: '1px lightgray solid', padding: '3%' }}>
            <h1>How can we get ahold of you?</h1>
                <Grid container>
                    <Grid xs={3}>
                        <Item>
                        <TextField
                                style={{ backgroundColor: 'lightgray' }}
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value) }
                            />
                        </Item>
                    </Grid>
                    <Grid xs={3}>
                            <Item>
                            <TextField
          style={{backgroundColor: 'lightgray'}}
          required
                                id="outlined-required"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value) }

          label="Required"
                            />
                            </Item>
                            </Grid>
                </Grid>
                {
                    phone && email ?
                    <Button variant="contained" onClick={() => handleClick()}>
                    Add Contact Information
                    </Button> : ''
                } 
            </Container>
        </div>
    )
};

export default UserContact;