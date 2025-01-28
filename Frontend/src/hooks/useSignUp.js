import {useState} from "react"
import toast from "react-hot-toast" 
import { useAuth } from "../context/AuthContext";

const useSignUp = () => {
   const [loading , setLoading] = useState(false);
   const {setAuthUser} = useAuth();

   const signup = async({fullName , username , password , confirmPassword , gender}) => {
    const success = handelInputsErrors({fullName , username , password , confirmPassword , gender});
    if(!success) return;
    setLoading(true);

    try {
        const response = await fetch("http://localhost:3005/auth/signup",{
            method : "POST",
            credentials : "include",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({fullName , username , password , confirmPassword , gender})
        })

        if(!response.ok){
            toast.error("somthing went wrong maybe user already exists");
            return;
        }

        const data = await response.json();
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("user" , JSON.stringify(data))
        setAuthUser(data);

    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
   }
 
   return {loading , signup}
}

export default useSignUp


const handelInputsErrors = ({fullName , username , password , confirmPassword , gender}) => {
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("please fill in all the fields");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("passwords must be at least 6 charecters");
        return false;
    }
    return true;
}

// the files is .js because we will return values from this