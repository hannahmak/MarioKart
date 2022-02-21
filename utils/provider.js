import {useContext, createContext, useState} from 'react';
import { themes } from './variable';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
   theme:"default",
   setTheme:()=>{},
   filter:"Weight",
   setFilter:()=>{},
   favC:{},
   setFavC:()=>{},
   favV:{},
   setFavV:()=>{},
   favW:{},
   setFavW:()=>{},
   favG:{},
   setFavG:()=>{},
}

export const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    
    const [theme, setTheme] = useState(initialStates.theme)
    const [filter, setFilter] = useState(initialStates.filter)
    const [favC, setFavC] = useState({});
    const [favV, setFavV] = useState({});
    const [favW, setFavW] = useState({});
    const [favG, setFavG] = useState({});
  
    return <MyContext.Provider value={{theme, setTheme, filter, setFilter, favC, setFavC, favV, setFavV, favW, setFavW, favG, setFavG}}>
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

export function useFavC(){
    const {favC, setFavC} = useContext(MyContext);
    return {favC, setFavC};
}

export function useFavV(){
    const {favV, setFavV} = useContext(MyContext);
    return {favV, setFavV};
}

export function useFavW(){
    const {favW, setFavW} = useContext(MyContext);
    return {favW, setFavW};
}

export function useFavG(){
    const {favG, setFavG} = useContext(MyContext);
    return {favG, setFavG};
}
