import {useEffect, useState} from "react";
import toast from "react-hot-toast" 

const useGetContacts = () => {
   const [contacts , setContacts] = useState([]);

   useEffect(() => {

    const getContacts = async() => {
        try {
            const response = await fetch("http://localhost:3005/users",{
                credentials : "include"
            });
            const data = await response.json();
            if(data.error){
                throw new Error(data.error)
            }
            setContacts(data);
        } catch (error) {
            toast.error(error.message)
        }
    }
    getContacts();
   },[])

   return {contacts}
}

export default useGetContacts