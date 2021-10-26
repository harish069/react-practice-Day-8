import React from 'react'
import { createContext, useState } from "react";
import Todos from '../Components/Todos';

const dark = { backgroundColor: "black", color: 'white' };
const light = { backgroundColor: "white", color: 'black' };

export const ThemeContext = createContext({theme:""});

function Theme1({ children }) {
    const [theme, setTheme] = useState( 'light' );
    
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    ) 
}

export default Theme1
