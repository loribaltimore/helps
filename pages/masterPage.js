import ProductForm from '../Master/components/ProductForm';
import ProductPut from '../Master/components/ProductPut';
import Navbar from '../components/Navbar';
import AllProducts from '../Master/components/AllProducts'
import { MasterContext } from '../Master/components/MasterContext';
import Queue from '../Master/components/Queue';
import MasterNav from '../components/MasterNav';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

function masterPage({ user, officialQueue, officialHistory }) {
    let [isQueue, setIsQueue] = useState(false);
    

    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <Navbar currentUser={user} />
                </Grid>
                <Grid item xs={4}>
                    <MasterNav setIsQueue={setIsQueue} />
                </Grid>
            </Grid>
            {
                isQueue === false ?
                    <div>
                        <ProductForm />
                        <AllProducts />
                    </div>
                    : 
                    <Queue officialQueue={officialQueue} officialHistory={officialHistory} />
                }
        </div>
    )
};

masterPage.getInitialProps = async (ctxt) => {
    let { officialQueue, officialHistory } = ctxt.query;
    return { user: ctxt.req.user, officialQueue, officialHistory };
}

export default masterPage;

