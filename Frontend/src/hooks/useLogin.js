import toast from "react-hot-toast"
import { useAuth } from "../context/AuthContext"

const useLogin = () => {

  const {setAuthUser} = useAuth(); 
  const login = async(username , password) => {
    const success = handelInputsErrors( username , password );
    if(!success) return;

     try {
        const response = await fetch("http://localhost:3005/auth/login",{
            method : "POST",
            credentials : "include",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({ username , password })
        })

        const data = await response.json();
        if(data.error){
            throw new Error(data.error)
        }
        localStorage.setItem("user",JSON.stringify(data));
        setAuthUser(data)

     } catch (error) {
        toast.error(error.message)
     }
  }
  return{login}
}

export default useLogin


const handelInputsErrors = ( username , password ) => {
    if(!username || !password){
        toast.error("please fill in all the fields");
        return false;
    }
    return true
}