import Home from "./pages/Home"
import {Navigate, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthContext";

const App = () => {
    const {authUser} = useAuth();
    return(
        <div className="p-4 h-screen flex items-center justify-center">
            <Routes>
                <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
                <Route path="/login" element={authUser ? <Navigate to={"/"} /> :<Login />}/>
                <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <SignUp />}/>
            </Routes>
            <Toaster />
        </div>
    )
}

export default App
