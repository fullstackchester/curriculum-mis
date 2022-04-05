import React, { useState } from 'react'
import { IoLockClosed, IoChevronForward } from "react-icons/io5"
import { Outlet } from 'react-router-dom'
import { useAuth } from '../Firebase/AuthContext'
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router-dom'
import Account from '../components/Account'

export default function Layout() {

    const [pageTitle, setPageTitle] = useState('PAGE TITLE')
    const { logout } = useAuth()


    async function logoutUser(e) {
        e.preventDefault()

        try {
            await logout()
        } catch (error) {
            alert(e.message)
        }
    }

    return (
        <div className="w-full h-full flex flex-row">
            <div className='w-[250px] h-screen bg-zinc-800 sticky top-0'>
                <div className='w-full h-auto flex flex-row px-1 py-2 items-center'>
                    <img
                        src={require('../img/logo.svg').default}
                        className='w-10 h-10'
                        alt='logo.png' />
                    <span
                        className='text-xl text-white font-extralight poppins'>Curriculum</span>
                </div>
                <Account />

                <ul className='flex flex-col py-2'>
                    {SidebarData.map((val, key) => {
                        return (
                            <li key={key}
                                className='h-10 text-slate-400/70 poppins cursor-pointer font-light' >
                                <NavLink
                                    to={val.link}
                                    className={({ isActive }) => isActive ? 'text-white' : ''} >
                                    <div
                                        className='h-full w-full text-md mr-3 flex flex-row items-center
                                     hover:bg-zinc-700/40 hover:text-white px-6'>
                                        {val.icon}
                                        <span className='ml-3 text-sm'>
                                            {val.title}
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className='h-full w-[calc(100%-250px)] flex flex-col'>
                <div className='h-10 w-full bg-white flex flex-row justify-between items-center sticky top-0 shadow-sm poppins'>
                    <span className='text-md poppins'> </span>
                    <button
                        onClick={logoutUser}
                        className='h-full w-auto px-4 text-zinc-800 text-xs  
                    flex flex-row font-medium hover:bg-zinc-100
                    items-center cursor-pointer outline-none'>
                        Logout
                        <IoLockClosed className='ml-1' />
                    </button>

                </div>
                <div className='w-full h-[calc(100%-2.5rem)]'>
                    <Outlet />
                </div>


            </div>
        </div>
    )
}
