/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState} from "react"
import {useAuth} from "../context/AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext();

export const useSocketContext = () =>{
    return useContext(SocketContext)
}

export const SocketContextProvidor = ({children}) => {

    const [socket , setSocket] = useState(null); // socket connection
    const [onlineUsers , setOnlineUsers] = useState([]);
    const {authUser} = useAuth();

//     useEffect: When authUser changes (e.g., when the user logs in or out), the effect is triggered:
// If authUser exists, a socket connection is established with the backend and the userId 
// (user's ID) is sent as a query parameter.
// The socket listens for the getOnlineUsers event and updates the onlineUsers state
//  with the current list of online users.
// If authUser is null (i.e., the user is not logged in),
//  the socket is closed to avoid memory leaks and unnecessary connections.

    useEffect(() => {
        if(authUser){
            const socket = io("http://localhost:3005",{
                query : {
                    userId : authUser._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers",(users) => {
                setOnlineUsers(users)
            })
            return () => socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
        </SocketContext.Provider>
    )
}