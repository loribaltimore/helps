import { createContext, useEffect, useState, useRef, useMemo } from 'react';
import Navbar from './Navbar';
import getSession from '../functions/getSession';
import { useRouter } from 'next/router';
import axios from 'axios';

export let MainContext = createContext();

export function MainProvider(props) {
    console.log('MAIN CONTEXT RERENDER')
    let [cart, setCart] = useState(undefined);
    let [renderPool, setRenderPool] = useState(false);
    let [currentUser, setCurrentUser] = useState(undefined);
    let [donators, setDonators] = useState(undefined);
    // console.log(currentUser);
    // console.log(cart);
    return (
        <div>
            <MainContext.Provider value={{setCurrentUser, currentUser,  cart, setCart, setRenderPool, renderPool, setDonators, donators}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
};

