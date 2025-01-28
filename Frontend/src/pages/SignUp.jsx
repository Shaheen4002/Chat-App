import { Link } from "react-router-dom"
import GenderCheck from "../components/GenderCheck"
import { useState } from "react"
import useSignUp from "../hooks/useSignUp";
 

const SignUp = () => {

  const [inputs , setInputs] = useState({
    fullName : '',
    username : '',
    password : '',
    confirmPassword : '',
    gender : '',
  });

  const {signup} = useSignUp();

  const handelGenderCheck = (gender) => {
    setInputs({...inputs,gender})
  }

  const handelSubmit = async(e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding bg-opacity-30">
            <h1 className="text-3xl font-semibold text-center text-gray-300 mb-2">
                Sign Up
                <span className="text-blue-500"> ChitChat</span>
            </h1>
            <form onSubmit={handelSubmit}>
              <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Full Name</span>
                </lable>
                <input type="text" placeholder="Enter Fullname" className="input input-bordered w-full"
                value={inputs.fullName}
                onChange={(e) => {setInputs({...inputs,fullName:e.target.value})}}
                />
              </div>
              <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Username</span>
                </lable>
                <input type="text" placeholder="Enter username" className="input input-bordered w-full" 
                value={inputs.username}
                onChange={(e) => {setInputs({...inputs,username:e.target.value})}}
                />
              </div>
              <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Password</span>
                </lable>
                <input type="password" placeholder="Enter Password" className="input input-bordered w-full" 
                value={inputs.password}
                onChange={(e) => {setInputs({...inputs,password:e.target.value})}}
                />
              </div>
              <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Confirm Password</span>
                </lable>
                <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" 
                value={inputs.confirmPassword}
                onChange={(e) => {setInputs({...inputs,confirmPassword:e.target.value})}}
                />
              </div>
              <GenderCheck onGenderCheck={handelGenderCheck} selectedGender = {inputs.gender}/>
              <Link to="/login" className="hover:underline hover:text-blue-500 mt-2 inline-block">Already have an account ?</Link>
              <div>
              <button type="submit" className="btn btn-block btn-sm mt-4">Sign Up</button>
              </div>
            </form>
      </div>
    </div>
  )
}

export default SignUp