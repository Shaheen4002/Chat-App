import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"

import authRouter from "./src/routes/auth.routes.js";
import messagesRoutes from "./src/routes/messages.routes.js";
import userRoute from "./src/routes/user.routes.js";


const app = express();
const port = 3005;
dotenv.config();

// middlewares
app.use(express.json()); // to parse incoming requests with json payloads
app.use(cookieParser()); // allow us to deal with cookies that comes with the requests
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // Allow cookies to be sent
}));

app.use("/auth", authRouter);
app.use("/messages",messagesRoutes);
app.use("/users",userRoute);

mongoose
  .connect("mongodb://127.0.0.1:27017/ChitChat")
  .then(() => console.log("data base connected"))
  .catch((err) => {
    console.log("failed to connect ..", err);
  });

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
