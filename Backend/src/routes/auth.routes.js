import express from "express";
import { Login, Logout, SignUp } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup",SignUp);

authRouter.post("/login" , Login);

authRouter.post("/logout" , Logout)

export default authRouter;