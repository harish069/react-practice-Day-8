import React from 'react'
import { useContext, useState } from "react";
import { AuthContext } from '../Context/AuthContext';
 
function Form() {
    console.log("Rendering Navbar");
    const { token, setToken } = useContext(AuthContext);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const authorize = () =>
    {
        setToken(text);
    }
 
     const authorize1 = () =>
    {
        setToken("");
    }
    
    
    return token ? (
        <div>
            <h1>Welcome {text} </h1>
            <button onClick={authorize1}>Logout</button>
            {/* <h2>Secret data: 1,2,3,4</h2> */}
        </div>
     ) :
        <h1>User is not logged in Please Login to continue
            <br/>
            <input type="text" placeholder="Enter Name" onChange={handleChange} />
            <br/>
            <input type="password" placeholder="Enter password"/>
            <br/>
            <button onClick={authorize}>Login</button>
        </h1>
    
}

export default Form
