import Grid from '@mui/material/Grid';
import CharityCard from '../Explore/components/CharityCard';
import axios from 'axios';
import { useContext } from 'react';
import { MainContext } from '../components/MainContext';
import CartDropdown from '../Cart/components/CartDropdown';
// import { fabClasses } from '@mui/material';

function donationPage(props) {
    let { user, cart } = props;
    let { setCart } = useContext(MainContext);
    console.log("working");

    return (
        <Grid container>
            <Grid item xs={12} style={{width: '50%', position: 'sticky', left: '30%'}}>
                <CartDropdown cart={cart}/>
            </Grid>
            {
                    user.charities.liked.orgs.map(function (element, index) {
                        if (index % 2 === 0) {
                            return <Grid item xs={6} style={{ marginBottom: '5rem' }} key={index}>
                                <CharityCard org={element} cardType={'donate'} liked={false}/>
                                </Grid>
                        } else {
                            return <Grid item xs={6} style={{ position: 'relative', top: '15rem' }} key={index}>
                                <CharityCard org={element} cardType={'donate'} liked={false}/>
                          </Grid> 
                        }
                })
            }
        </Grid>
    )
};

donationPage.getInitialProps = async (ctxt) => {
    let { req } = ctxt;
    // let response = await axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/tester'
    // }).then(data => { return data}).catch(err => console.log(err));
    // let { data } = response;
    // return { data };
    return { user: req.user, cart: req.session.cart };
}

export default donationPage;