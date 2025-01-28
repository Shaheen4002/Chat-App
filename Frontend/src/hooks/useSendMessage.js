import { useContact } from "../context/ContactContext";
import {toast} from "react-hot-toast"

const useSendMessage = () => {
   const {selected , messages , setMessages} = useContact();
   const sendMessage = async(message) => {
    try {
        const response = await fetch(`http://localhost:3005/messages/send/${selected._id}`,{
            method : "POST",
            credentials : "include",
            headers : {
                    "Content-Type": "application/json"
                },
            body : JSON.stringify({message})
        })
    
        const data = await response.json();
        if(data.error){
            throw new Error(data.error)
        }
        setMessages([...messages,data]);
       } catch (error) {
        toast.error(error.message)
       }
   }
   return {sendMessage}
}

export default useSendMessage