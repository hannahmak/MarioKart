import {useContext, createContext, useState} from 'react';
import { useTheme } from 'styled-components';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
   theme:"default",
   setTheme:()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const [theme, setTheme] = useTheme

    //put in the variables you want to share
    return <MyContext.Provider value={{}}>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme