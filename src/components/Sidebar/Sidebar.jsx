import React, { useState } from 'react'
import { SidebarData } from './SidebarData';
import { Link, NavLink } from 'react-router-dom';
import Account from '../Account';

export default function Sidebar() {

    const [title, setTitle] = useState('');
    return (
        <div className='w-[250px] h-full bg-zinc-800 '>
            <div className='w-full h-auto flex flex-row px-1 py-2 items-center border-b border-slate-300/30'>
                <img src='logo.svg' className='h-10 cursor-pointer' />
                <span className='text-xl text-white font-light'>Curriculum</span>
            </div>
            <Account headTitle={setTitle} />
            <ul className='flex flex-col py-2'>
                {SidebarData.map((val, key) => {
                    return (

                        <li key={key}
                            className='h-10 text-white poppins cursor-pointer font-light'>

                            <NavLink
                                to={val.link}
                                className={({ isActive }) => isActive ? 'text-cyan-300 font-medium' : ''}
                                onClick={() => {
                                    setTitle(val.title)
                                }} >

                                <div
                                    className='h-full w-full text-md mr-3 flex flex-row items-center
                                    px-3 hover:bg-zinc-700'>
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
    )
}
