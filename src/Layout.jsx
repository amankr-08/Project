import React, { createContext, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const SomeData = createContext()
const Layout = () => {
  const [logState,setlogState]=useState(false)
  return (
    
    <div className='w-full h-[100vh]'>
<ToastContainer />
      <SomeData.Provider value={{logState,setlogState}}>
        <Navbar />
        <Outlet />
        
      </SomeData.Provider>
    </div>
  )
}

export default Layout