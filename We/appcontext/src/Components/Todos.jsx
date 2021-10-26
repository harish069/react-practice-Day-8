import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'


const dark = { backgroundColor: "black", color: 'white' };
const light = { backgroundColor: "white", color: 'black' };

function Todos() {
    const { theme, setTheme } = useContext(ThemeContext);
    
      const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return (
        <div style={theme === 'light' ? light : dark}>
            <h1>Theme is : {theme}</h1>
            {/* <h1>Your Token is : {token} </h1> */}
            <button onClick={handleThemeChange}>Change Theme</button>
        </div>
    )
}

export default Todos
