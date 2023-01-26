import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import {useRouter} from 'next/router'
import checkCredentials from '../functions/checkCredentials';
import { useState, useContext } from 'react';
import { MainContext } from '../../components/MainContext';


function LoginForm(props) {
    let Router = useRouter();
    let { currentUser } = useContext(MainContext);
    let [username, setUsername] = useState('');
    let [pass, setPass] = useState('');

    let handleClick = async () => {
         await checkCredentials(username, pass)
             .then(data => {
                if (data.bio) {
                    Router.push('/home');
                } else {
                    setUsername('');
                    setPass('');
                }
             }).catch(err => console.log(err));   
    };

    return (
        <div style={{}}>
            <Container style={{ backgroundColor: 'darkblue', opacity: '50%', width: '30rem', height: '20rem' }}>
                <div style={{ backgroundColor: 'white', position: 'relative', top: '25%' }}>
                    <Container style={{padding: '2%'}}>
                        <Grid container>
                            <Grid md={12} item style={{ marginBottom: '1%' }}>
                                <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(event) => setUsername(event.target.value)} />
                            </Grid>
                            <Grid item md={12} style={{ marginBottom: '1%' }}>
                                <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(event) => setPass(event.target.value)} />
                            </Grid>
                            <Button onClick={() => handleClick()}>Log In</Button>
                        </Grid>
                    </Container>
                </div>
            </Container>
        </div>
    )
};

export default LoginForm;

//finish flash message for logged out on client side, because req.logout erases entire session