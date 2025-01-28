import { useEffect } from "react";
import { useContact } from "../context/ContactContext";
import {toast} from "react-hot-toast"

const useGetMessages = () => {
    const {selected , messages , setMessages} = useContact();
    useEffect(()=>{
        const getMessages = async() => {
            try {
                const response = await fetch(`http://localhost:3005/messages/${selected._id}`,{
                    credentials : "include",
                })
                const data = await response.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data)
            } catch (error) {
                toast.error(error.message)
            }
        }
        if(selected._id) getMessages();
    },[selected._id, setMessages])
   return {messages}
}

export default useGetMessages