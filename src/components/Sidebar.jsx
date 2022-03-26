import React from 'react';
import Account from './Account';
import { IoBarChart, IoSchool, IoPeople } from "react-icons/io5";

export default function Sidebar() {
    return (
        <div className='w-[16rem] min-h-screen h-full bg-zinc-800'>


            {/* webname and main logo */}
            <div className='flex flex-row items-center h-10 w-full p-1 border-b border-slate-50/30'>
                <img src='logo.svg' className='h-full w-auto' />
                <span className='text-slate-50 text-lg poppins font-light'>Curriculum</span>
            </div>

            <Account />
            <ul className='w-full poppins px-2 py-4'>
                <li className='w-full h-10 text-slate-50 text-sm flex flex-row items-center p-3 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-cyan-300'> <IoBarChart className='mr-3 text-xl' /> Dashboard</li>
                <li className='w-full h-10 text-slate-50 text-sm flex flex-row items-center p-3 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-cyan-300'> <IoSchool className='mr-3 text-xl' /> Curriculum</li>
                <li className='w-full h-10 text-slate-50 text-sm flex flex-row items-center p-3 rounded-md cursor-pointer hover:bg-zinc-700 hover:text-cyan-300'> <IoPeople className='mr-3 text-xl' /> Faculty</li>

            </ul>

        </div>
    )
}
