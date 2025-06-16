import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[100%] min-h-[93vh] md:h-full flex flex-col bg-zinc-400 md:flex-row '>
            <ToastContainer/>
            <div className='h-full w-full md:w-[15%]  text-center border-r-2 border-slate-500 bg-slate-400 '>
                <ul className=' py-3  flex justify-around  md:flex-col  w-full,justify-between '>
                    <li className='hover:bg-slate-500   h-[45px] flex items-center justify-center'><NavLink to={"/dashboard/allusers"}>All Users</NavLink></li>

                    <li className=' hover:bg-slate-500   h-[45px] flex items-center justify-center'> <NavLink to={"/dashboard/createusers"}>Create User</NavLink></li>
                    <li className='hover:bg-slate-500   h-[45px] flex items-center justify-center'><NavLink to={"/dashboard/help"}>Help</NavLink></li>
                </ul>
            </div>
            <div className='w-full md:w-[85%] h-full '>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
