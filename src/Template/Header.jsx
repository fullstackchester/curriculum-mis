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
        <div className='h-10 w-full bg-white flex flex-row justify-between items-center sticky top-0 shadow-sm'>
            <span
                className='text-sm text-slate-900 poppins px-3 flex flex-row items-center'>
                <IoChevronForward className='mr-3 text-cyan-300' />
                <span>{props.title}</span>
            </span>

            <div className='h-full w-auto flex flex-row poppins items-center'>
                <input
                    spellCheck='false'
                    type='text'
                    className='h-[80%] w-60 py-2 px-4 outline-none border border-zinc-100 bg-zinc-100
                    rounded-md text-zinc-800 text-xs'
                    placeholder='Search ' />

                <button
                    onClick={logoutUser}
                    className='h-full w-auto px-4 text-zinc-800 text-xs  
                    flex flex-row font-medium hover:bg-zinc-100
                    items-center cursor-pointer outline-none'>
                    Logout
                    <IoLockClosed className='ml-1' />
                </button>
            </div>


        </div>
    )
}
