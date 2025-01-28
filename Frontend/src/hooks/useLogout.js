import toast from "react-hot-toast"
import { useAuth } from "../context/AuthContext";

const useLogout = () => {

   const {setAuthUser} = useAuth();
   const logout = async() => {
    try {
        const response = await fetch("http://localhost:3005/auth/logout" ,{
            method : "POST",
            headers : {
                 "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("user")
        setAuthUser(null);
    } catch (error) {
        toast.error(error)
    }
   }
   return {logout}
}

export default useLogout