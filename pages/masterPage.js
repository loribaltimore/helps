import ProductForm from '../Master/components/ProductForm';
import ProductPut from '../Master/components/ProductPut';
import Navbar from '../components/Navbar';
import AllProducts from '../Master/components/AllProducts'
import { MasterContext } from '../Master/components/MasterContext';

function masterPage({user}) {
    return (
        <div>
            <Navbar currentUser={user}/>
            <ProductForm />
                <AllProducts />
        </div>
    )
};

masterPage.getInitialProps = async (ctxt) => {
    return { user: ctxt.req.user };
}

export default masterPage;

