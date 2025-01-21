import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const messagesRoutes = express.Router();

messagesRoutes.post("/send/:id", verifyUser ,sendMessage);
messagesRoutes.get("/:id", verifyUser ,getMessages);

export default messagesRoutes;