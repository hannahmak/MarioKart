import {useContext, createContext, useState} from 'react';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
   theme:"default"
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider

    //put in the variables you want to share
    return <MyContext.Provider value={{}}>
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
