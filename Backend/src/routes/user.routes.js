import express from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRoute = express.Router();

userRoute.get("/" , verifyUser ,getAllUsers)

export default userRoute;