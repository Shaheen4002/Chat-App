/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    
    // we made JSON.parse to make an object instade of string 
    const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    return(
        <AuthContext.Provider value={{authUser , setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}