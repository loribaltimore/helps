import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

function GetStarted(props) {
    let Router = useRouter();

    let handleClick = () => {
        Router.push('/signup');
    };
    
    return (
        <div>
            <Container>
                <div>
                    <img src="/LandingPageImg.jpeg" style={{ width: '100%', height: '45rem' }} />
                        <div style={{position: 'relative', left: '45%', bottom: '23rem'}}>
                        <p>
                            This is where I will have a large mission statement about what helps is all
                             about.
                        </p>
                        <Button variant="contained" style={{ width: '10rem', height: '3rem' }}
                        onClick={() => handleClick()}
                        >Get Started</Button>
                        </div>
                </div>
            </Container>
        </div>
    )
};

export default GetStarted;