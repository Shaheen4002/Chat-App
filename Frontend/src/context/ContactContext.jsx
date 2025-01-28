/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

export const ContactContext  = createContext();

export const useContact = () => {
    return useContext(ContactContext)
}

export const ContactProvider = ({children}) => {

    const [selected , setSelected] = useState(null);
    const [messages , setMessages] = useState([])

    return(
        <ContactContext.Provider value={{selected , setSelected , messages , setMessages}}>
            {children}
        </ContactContext.Provider>
    )
}