import { useEffect, useRef } from "react";
import useGetMessages from "../hooks/useGetMessages"
import Message from "./Message"

const Messages = () => {
  const {messages} = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
    },100)
  },[messages])

  return (
    <div className="flex-1 overflow-auto px-4">
         {messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
         ))}
         {messages.length === 0 && (
          <p className="text-center">send a message to start a conversation</p>
         )}
    </div>
  )
}

export default Messages