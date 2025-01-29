import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async(req , res) => {
    try {
        const {message} = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await conversationModel.findOne({
            partisipants : {$all: [senderId , receiverId]}
        })
        if(!conversation){
            conversation = await conversationModel.create({
                partisipants : [senderId , receiverId]
            });
        }

        const newMessage = new messageModel({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await newMessage.save();
        // await conversation.save();

        await Promise.all([newMessage.save(),conversation.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(<socket_id).emit() used to send events to a specific users 
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage);
    } catch (error) {
       return res.status(500).json(error);
    }
}


export const getMessages = async(req , res) => {
    try {
        const {id : userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await conversationModel.findOne({
            partisipants : {$all: [senderId , userToChatId]}
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        } 
        res.status(200).json(conversation.messages)
    } catch (error) {
        return res.status(500).json(error);
    }
}