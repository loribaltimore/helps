import { SignUpContext } from './SignUpContext';
import { useState, useContext } from 'react';
import createUser from '../functions/createUser';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UserAuth(props) {
    let {setAuth, auth, contact, billing, shipping, bio, interests} = useContext(SignUpContext);
    let [username, setUsername] = useState('');
    let [pass, setPass] = useState('');

    let handleClick = async () => {
            await setAuth({ username, pass });
            await createUser( bio, shipping, billing, contact, { username, password: pass }, interests);
    };

    return (
        <div >
            <Container style={{ border: '1px lightgray solid', padding: '3%' }}>
            <h1>Set Your Credentials..</h1>
                <Grid container>
                    <Grid xs={3}>
                        <Item>
                        <TextField
                                style={{ backgroundColor: 'lightgray' }}
                                required
                                id="outlined-required"
                                label="Required"
                                placeholder="First Name"
                                value={username}
                                onChange={(event) => setUsername(event.target.value) }
                            />
                        </Item>
                    </Grid>
                    <Grid xs={3}>
                            <Item>
                            <TextField
          style={{backgroundColor: 'lightgray'}}
          required
                                // id="outlined-required"
                                placeholder="Password"
                                type="password"
                                onChange={(event) => setPass(event.target.value) }

          label="Required"
                            />
                            </Item>
                            </Grid>
                </Grid>
                {
                    username && pass ?
                    <Button variant="contained" onClick={() => handleClick()}>
                    Create Profile
                    </Button> : ''
                } 
            </Container>
        </div>
    )
};

export default UserAuth;