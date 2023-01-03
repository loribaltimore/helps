import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export let MasterContext = createContext();

export function MasterProvider(props) {

    let [allProducts, setAllProducts] = useState(undefined);
    let [breaker, setBreaker] = useState(undefined);

    useEffect(() => {
        let fn = async () => {
            await axios({
                method: 'get',
                url: 'http://localhost:3000/products',
            }).then(data => { setAllProducts(data.data.allProducts) }).catch(err => console.log(err));
        }
        fn();
    }, [breaker])

    return (
        <div>
            <MasterContext.Provider value={{ setAllProducts, allProducts }}>
                {props.children}
            </MasterContext.Provider>
        </div>
    )
};

