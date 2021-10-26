import React, {useState} from 'react'
import { createContext } from "react";

export const AuthContext = createContext("");

function Auth1({ children }) {
    const [token, setToken] = useState("");

    return (
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
 
export default Auth1
