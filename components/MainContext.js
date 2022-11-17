import { createContext, useState } from 'react';


export let MainContext = createContext();

export function MainProvider(props) {
    let [test, setTest] = useState('HELLO')

    return (
        <div>
            <MainContext.Provider value={{test}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
};

