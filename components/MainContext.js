import { createContext, useEffect, useState, useRef, useMemo } from 'react';
import getSession from '../functions/getSession';
import { useRouter } from 'next/router';


export let MainContext = createContext();

export function MainProvider(props) {
    console.log('MAIN CONTEXT RERENDER')
    // let Router = useRouter();
    let [currentUser, setCurrentUser] = useState(undefined);
    let [flash, setFlash] = useState({ msg: undefined, type: undefined, render: false });
    let [currentPage, setCurrentPage] = useState('');
    let [cart, setCart] = useState(undefined);

    useEffect(() => {
        let fn = async () => {
            await getSession()
                .then(data => { setCurrentUser(data.user); }).catch(err => console.log(err));
        };
        fn();
    }, [currentPage]);
       
    return (
        <div>
            <MainContext.Provider value={{currentUser, setCurrentUser, flash, setFlash, cart, setCart}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
};

