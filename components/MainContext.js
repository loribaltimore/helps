import { createContext, useEffect, useState } from 'react';
import getSession from '../functions/getSession';

export let MainContext = createContext();

export function MainProvider(props) {
    let [currentUser, setCurrentUser] = useState(undefined);
    let [flash, setFlash] = useState({ msg: undefined, type: undefined });

    useEffect(() => {
        let fn = async (req, res, next) => {
            await getSession().then(data => {
                if (data.flash !== undefined) {
                    setFlash({ msg: data.flash[Object.keys(data.flash)], type: Object.keys(data.flash)[0] })
                }
            })
        };
        fn();
    }, [])

    return (
        <div>
            <MainContext.Provider value={{currentUser, setCurrentUser, flash, setFlash}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
};

