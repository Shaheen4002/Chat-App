import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json("no token provided");
    }

    const decode = jwt.verify(
      token,
      "7inYjg4eQe6Sp5W9xu7WfuZ/7QE1ExIIoHMO4FcJ83g="
    );
    if (!decode) {
      return res.status(401).json("invalid token");
    }

    const user = await userModel.findById(decode.userId).select("-password"); // so it return the user info without password
    if (!user) {
      return res.status(404).json("user not found");
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json(error);
  }
};
