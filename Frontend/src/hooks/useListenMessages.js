import { useEffect } from "react";
import { useContact } from "../context/ContactContext";
import { useSocketContext } from "../context/SocketContext";
import notificationSound from "../assets/sounds/whatsapp_message_sound_effect_No_Copyright_shortsMP3_160K.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages , setMessages} = useContact();
    
    useEffect(() => {
        socket?.on("newMessage",(newMessage) => {
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages,newMessage])
        })

        return () => socket.off("newMessage")
    },[messages, setMessages, socket])
}

export default useListenMessages