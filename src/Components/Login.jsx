import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Sidebar from './Menu/Sidebar';
import Facebook_home from './Home/Facebook_home';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loggedin, setLoggedin] = useState(false);

    const submithaldel = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin") {
            setLoggedin(true)
            toast.success("correct info");
            // alert("success")
        } else {
            toast.error("error");
            // alert("error")

        }
    }


    return loggedin ? (
        <div>
            {navigate('/home')}
        </div>
    ) : (
        <form onSubmit={submithaldel} className="min-h-screen flex items-center justify-around bg-gray-50 ">

            <div className='w-96 h-28  flex flex-col justify-center '>
                <div className='w-80'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="" />
                </div >
                <h1 className="text-2xl w-aut mx-8">Facebook helps you connect and share with the people in your life</h1>
            </div >
            <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-lg">

                <div className=' flex flex-col items-center justify-center '>
                    <input
                        className="mt-4 p-2 border rounded-lg w-full"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <input
                        className="mt-4 p-2 border rounded-lg w-full"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
                        type='submit'
                    >
                        Login
                    </button>

                    <div>
                        <a href="">Forgot password?</a>
                    </div>

                    <hr />

                    <div className='flex flex-col '>
                        <a href="" className='bg-green-100 p-4 '>Create an account</a>
                        {/* <label htmlFor="" className="mt-4 p-2  rounded-lg w-full">Don't Have An Account</label> */}
                        {/* <label htmlFor="" className="mt-4 p-2  rounded-lg w-full">Sign up</label> */}

                    </div>
                </div>

            </div>
        </form >
    )

}

export default Login