import userModel from "../models/user.model.js";

export const getAllUsers = async(req , res) =>{
    try {

        const loggedInUserId = req.user._id;
        if(!loggedInUserId){
            return res.status(404).json({error:"user not found"});
        }
        // find all users that there id not equal to loggedInUserId 
        const filteredUsers = await userModel.find({_id : {$ne : loggedInUserId}}).select("-password");
        if(!filteredUsers){
            return res.status(400).json({error:"no users to show"});
        }
        res.status(200).json(filteredUsers);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}