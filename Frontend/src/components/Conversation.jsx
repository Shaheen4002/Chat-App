import { useEffect } from "react"
import { useContact } from "../context/ContactContext"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import {TiMessages} from "react-icons/ti"
import { useAuth } from "../context/AuthContext"

const Conversation = () => {
    const {selected , setSelected} = useContact();

    useEffect(()=>{
      return () => setSelected(null)
    },[setSelected])
  return (
    <div className="flex flex-col">
       {!selected ? (<NoChatSelected />) : (
         <>
         <div className="px-4 py-2 mb-2 bg-slate-500">
             <span className="label-text font-bold">To: </span>
             <span className="text-gray-800 font-bold">{selected.username}</span>
         </div>
         <Messages />
         <MessageInput />
         </>
       )}
    </div>
  )
}

export default Conversation


const NoChatSelected = () => {
  const {authUser} = useAuth();
    return(
        <div className="flex items-center justify-center w-96 h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome {authUser.username} </p>
                <p>Select chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}