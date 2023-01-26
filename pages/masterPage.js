import ProductForm from '../Master/components/ProductForm';
import ProductPut from '../Master/components/ProductPut';
import Navbar from '../components/Navbar';
import AllProducts from '../Master/components/AllProducts'
import { MasterContext } from '../Master/components/MasterContext';
import Queue from '../Master/components/Queue';

function masterPage({user, officialQueue}) {
    return (
        <div>
            <Navbar currentUser={user}/>
            {/* <ProductForm />
                <AllProducts /> */}
            <Queue officialQueue={officialQueue} />
        </div>
    )
};

masterPage.getInitialProps = async (ctxt) => {
    let { officialQueue } = ctxt.query;
    return { user: ctxt.req.user, officialQueue };
}

export default masterPage;

