import jwt from "jsonwebtoken";

const genTokenAndSetCookie = (userId , res) => {
    const token = jwt.sign({userId},"7inYjg4eQe6Sp5W9xu7WfuZ/7QE1ExIIoHMO4FcJ83g=",{
        expiresIn : "15d"
    });

    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 60 * 60 * 1000, // Ms
        httpOnly : true, // prevent XSS attacks cross-site scripting attacks
        //  ensures that the cookie is only accessible via HTTP(S) requests, preventing client-side
        //  JavaScript from accessing it and enhancing security.
        sameSite : "strict", // CSRF attacks cros-site requests forgery attacks 
        //  protects against Cross-Site Request Forgery (CSRF) attacks by restricting 
        //  when the cookie is sent in cross-origin requests.
    });
};

export default genTokenAndSetCookie;