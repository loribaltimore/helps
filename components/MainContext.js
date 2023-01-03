import { createContext, useEffect, useState, useRef, useMemo } from 'react';
import Navbar from './Navbar';
import getSession from '../functions/getSession';
import { useRouter } from 'next/router';
import axios from 'axios';

export let MainContext = createContext();

export function MainProvider(props) {
    console.log('MAIN CONTEXT RERENDER')
    let [flash, setFlash] = useState({ msg: undefined, type: undefined, render: false });
    let [cart, setCart] = useState(undefined);
    let [currentUser, setCurrentUser] = useState(undefined);
    
    return (
        <div>
            <MainContext.Provider value={{setCurrentUser, currentUser, flash, setFlash, cart, setCart}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
};

