import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [formData,setformData]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setformData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        try {
            localStorage.setItem("loginDetails",JSON.stringify(formData))
                    console.log("Form Submitted!",formData)

            navigate("/login")
        } catch (error) {
            console.log(error)
        }

    }
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register