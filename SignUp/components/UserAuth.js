import { SignUpContext } from './SignUpContext';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { MainContext } from '../../components/MainContext';
import createUser from '../functions/createUser';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import updateSession from '../../functions/updateSession';

function UserAuth(props) {
    let router = useRouter();
    let { setRenderBio, setRenderAuth, setRenderLoading } = props;
    let { setAuth, auth, contact,
        billing, shipping, bio, interests, setBio,
        setInterests, setShipping, setBilling, setContact } = useContext(SignUpContext);
    let { setFlash } = useContext(MainContext);
    let [username, setUsername] = useState('');
    let [pass, setPass] = useState('');

    let handleClick = async () => {
            await setAuth({ username, pass });
        let response = await createUser(bio, shipping, billing, contact, { username, password: pass }, interests)
            .then(data => {
                console.log(data);
                if (data.err === undefined) {
                    router.push('/')
                } else {
                    setBilling(undefined);
                    setShipping(undefined);
                    setBilling(undefined);
                    setContact(undefined);
                    setRenderLoading(true);
                    setTimeout(async () => {
                        await updateSession('flash', { msg: 'Problem Creating User', type: 'error' })
                            .then(data => { console.log(data.data.flash); setFlash(data.data.flash)}).catch(err => console.log(err));
                        setRenderLoading(false);
                        setRenderAuth(false);
                        setRenderBio(true);
                    }, 3000);
                    router.push('/signup');
                }
            }).catch(err => console.log(err));
            };

    return (
        <div >
            <Container style={{ border: '1px lightgray solid', padding: '3%' }}>
            <h1>Set Your Credentials..</h1>
                <Grid container>
                    <Grid item xs={3}>
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
                    <Grid item xs={3}>
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
                        // <Link href={'/'}>
                            <Button variant="contained" onClick={() => handleClick()}>
                                    Create Profile
                            </Button>
                        //  </Link>
                        : ''
                } 
            </Container>
            <p style={{color: 'gray'}}>
                minimum length is 8 <br/>
                must contain at least 1: lowercase, uppercase, number, special character<br/>
                cannot contain: <span style={{color: '#5ce1e6'}}>// $ * .  &lt; \ / | : ; ] [ / &gt;</span><br/>
                all inputs are sanitized
            </p>
 
        </div>
    )
};

export default UserAuth;