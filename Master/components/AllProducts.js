import ProductPanel from './ProductPanel';
import { useContext } from 'react';
import { MasterContext } from './MasterContext';


function AllProducts(props) {
    let { allProducts } = useContext(MasterContext);

    return(
        <div style={{padding: '2%'}}>
            {   allProducts !== undefined ?
                allProducts.map(function (element, index) {
                    return  <div  key={index}>
                        <ProductPanel product={element}/>
                    </div>
                }) : ''
                }
        </div>
    )


};

export default AllProducts;