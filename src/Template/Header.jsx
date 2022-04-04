import React from 'react';
import { IoLockClosed, IoChevronForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Firebase/AuthContext';

export default function Header(props) {

    const navigate = useNavigate()
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
        <div className='h-10 w-full bg-white flex flex-row justify-end items-center sticky top-0 shadow-sm'>
            
            <button
                    onClick={logoutUser}
                    className='h-full w-auto px-4 text-zinc-800 text-xs  
                    flex flex-row font-medium hover:bg-zinc-100
                    items-center cursor-pointer outline-none'>
                    Logout
                    <IoLockClosed className='ml-1' />
                </button>

        </div>
    )
}
