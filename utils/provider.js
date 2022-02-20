import {useContext, createContext, useState} from 'react';
import { themes } from './variable';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
   theme:"default",
   setTheme:()=>{},
   filter:"Weight",
   setFilter:()=>{}
}

export const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    
    const [theme, setTheme] = useState(initialStates.theme)
    const [filter, setFilter] = useState(initialStates.filter)
  
    return <MyContext.Provider value={{theme, setTheme, filter, setFilter}}>
        <style jsx global>
            {`
                body {
                    background-color:${themes[theme].body};
                }
            `}
        </style>
        {children}
    </MyContext.Provider>
}


export function useTheme(){
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}

export function useFilter(){
    const {filter, setFilter} = useContext(MyContext);
    return {filter, setFilter}
}
