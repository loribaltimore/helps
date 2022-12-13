import { createContext, useEffect, useState } from 'react';
import getSession from '../functions/getSession';
import { useRouter } from 'next/router';


export let MainContext = createContext();

export function MainProvider(props) {
    console.log('MAIN CONTEXT RERENDER')
    let Router = useRouter();
    let [currentUser, setCurrentUser] = useState(undefined);
    let [flash, setFlash] = useState({ msg: undefined, type: undefined });
    let [currentPage, setCurrentPage] = useState('');
    let [cart, setCart] = useState(undefined);

   currentPage !== Router.pathname ?
       setCurrentPage(Router.pathname) : ''
    
    useEffect(() => {
        let fn = async (req, res, next) => {
            await getSession().then(data => {
                if (data.user === undefined || currentUser !== data.user) {
                    setCurrentUser(data.user);
                };
            })
        };
        fn();
    }, [currentPage]);

    useEffect(() => {
        let fn = async (req, res, next) => {
            await getSession().then(data => {
                if (data.flash !== undefined) {
                    setFlash({ msg: data.flash[Object.keys(data.flash)][data.flash[Object.keys(data.flash)].length -1], type: Object.keys(data.flash)[0] })
                };
            })
        };
        fn();
    }, [currentPage])

    useEffect(() => {
        let fn = async (req, res, next) => {
            await getSession().then(data => {
                if (data.cart !== undefined) {
                    setCart(data.cart);
                };
            })
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

