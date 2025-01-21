import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import genTokenAndSetCookie from "../utils/generateToken.js";

export const SignUp = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json("password do not match");
    }
    const isUserExist = await userModel.findOne({ username });

    if (isUserExist) {
      return res.status(400).json("user already exist!");
    }

    // handle profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // handle hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      genTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilepic,
      });
    } else {
      return res.status(400).json("invalid user data");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(404).json("user not exist");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(404).json("wrong password");
    }

    genTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilepic,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const Logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json("logged out successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};
