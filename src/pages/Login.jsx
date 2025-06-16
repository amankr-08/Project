import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify';
import { SomeData } from '../Layout';

const Login = () => {

const { logState, setlogState } = useContext(SomeData)

  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = loginData

  const navigate = useNavigate()
  const token="jhgfiytffufufuffuyfufufufuufufvjvjvhb"
  const handleInput = (e) => {
    const { name, value } = e.target
    setloginData({ ...loginData, [name]: value })
  }

  const handleForm = (e) => {
    e.preventDefault()
    const storedData = JSON.parse(localStorage.getItem("loginDetails"));

      if (!storedData) {
    toast.error("No user found. Please Sign up!", {
      position: "top-center",
      autoClose: 2000
    });
    return;
  }

    if (storedData.email === email && storedData.password === password) {
     
      setloginData({
        email: "",
        password: ""
      });
      localStorage.setItem("token",token)
      setlogState(true)
      
       toast.success('Logged in successfully!', {
            position: "top-center",
            autoClose: 2000
          });
          navigate("/dashboard/allusers");
    }
    else if (!storedData) {
      toast.error("No user found. Please register.", { // Added this check
        position: "top-center",
        autoClose: 2000
      })
    }
    else {
      toast.error("Invalid credentials!", {
        position: "top-center",
        autoClose: 2000
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      

      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to your account</h2>
        <form className="space-y-4" onSubmit={handleForm}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              name='email'
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              name='password'
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login;
