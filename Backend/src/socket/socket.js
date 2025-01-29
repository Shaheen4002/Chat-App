import {Server} from "socket.io";
import http from "http";
import express from "express";

export const app = express();

export const server = http.createServer(app);
export const io = new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
        methods : ["GET","POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

// This object maps user IDs (from authUser._id) to socket IDs. This allows you
//  to track which socket is associated with which user.
const userSocketMap = {}; 

// Every time a new user connects, their socket ID is logged and the server listens for events like disconnect
io.on('connection',(socket) => {
    console.log("user connected",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    // This emits an event to all connected clients, sending them the current list of online users.
    io.emit("getOnlineUsers" , Object.keys(userSocketMap))

    // This listens for when a user disconnects and removes them from the userSocketMap.
socket.on('disconnect',() => {
    console.log("user disconnected",socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers" , Object.keys(userSocketMap))
})
})


