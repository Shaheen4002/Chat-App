

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding bg-opacity-30">
            <h1 className="text-3xl font-semibold text-center text-gray-300 mb-2">
                Login
                <span className="text-blue-500"> ChitChat</span>
            </h1>
            <form>
            <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Username</span>
                </lable>
                <input type="text" placeholder="Enter username" className="input input-bordered w-full" />
            </div>
            <div>
                <lable className="label p-2">
                    <span className="text-base label-text">Password</span>
                </lable>
                <input type="password" placeholder="Enter Password" className="input input-bordered w-full" />
            </div>
            <div>
            <button className="btn btn-block btn-sm mt-4">Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login