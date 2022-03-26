import React, { useState } from 'react';
import { IoLockClosed, IoChevronForward } from "react-icons/io5";


export default function Header() {

    const [title, setTitle] = useState('')



    return (
        <div className='h-10 w-full bg-zinc-700 flex flex-row justify-between items-center'>
            <span className='text-sm text-slate-50 poppins px-3 flex flex-row items-center'> <IoChevronForward className='mr-3 text-cyan-300' /> Dashboard</span>
            <button className='h-full w-auto px-2 text-slate-50 text-xs poppins hover:bg-zinc-800 hover:text-cyan-300 flex flex-row items-center'>
                Logout
                <IoLockClosed className='ml-1' />
            </button>
        </div>
    )
}
