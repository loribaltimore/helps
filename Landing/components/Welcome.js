import Container from '@mui/material/Container';
import PaymentsIcon from '@mui/icons-material/Payments';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
function Welcome(props) {
    

    return (
        <div style={{marginBottom: '3%', color: '#206ebc'}}>
            <Container>
                <div style={{textAlign: 'center'}}>
                    <h1>Welcome to Helps</h1>
                    <div style={{width: '75%', fontSize: '2rem', textAlign: 'center',}}>

                    </div>
                    <p style={{marginBottom: '1%', fontSize: '2rem'}}>Helps is a community that attempts to garner material support
                    for charities and non-profit organizations with the help of
                    material signification.
                        </p>
                    <p style={{marginBottom: '1%', fontSize: '2rem'}}>
                        Every shirt purchased from helps is added to a cart and purchased
                        once that cart is full enough to fill the minimum buy order from a wholesale
                        manufacturer.
                        The minimum donation purchases a shirt at wholesale cost and donates the rest
                        to charities of your choice!
                        <PaymentsIcon style={{ fontSize: '5rem' }}></PaymentsIcon>
                        <EuroOutlinedIcon style={{ fontSize: '5rem' }}></EuroOutlinedIcon>
                    </p>
                    <p style={{marginBottom: '1%', fontSize: '2rem'}}>
                            This means that we make 0 -- ZERO -- dollars for each donation. 
                    </p>
                    <p style={{marginBottom: '1%', fontSize: '2rem'}}>
                        So why sell shirts at all? Great question..<br></br>
                        At helps we realize that branding is the greatest way to market a product or service.
                        For that reason, we would like to associate the branding of our community with the
                        cultural cache of phrases like 'actvism' and 'charity'.<br></br>
                        For now, we see the most effective form of brand ambassadors-ship as our members
                        proudly wearing our merchandise!
                    </p>
                    </div>
                        
            </Container>
        </div>
    )
};

export default Welcome