import React from 'react'
import { NavLink } from 'react-router-dom';
import Account from '../components/Account'
import { SidebarData } from './SidebarData';
import Header from './Header';

const Layout = (ComposedComponent) => () => (

    <div className="w-full h-full flex flex-row">
        {/* // sidebar */}
        <div className='w-[250px] h-screen bg-zinc-800 sticky top-0'>
            <div className='w-full h-auto flex flex-row px-1 py-2 items-center'>
                <img
                    alt='react-logo'
                    src='logo.svg'
                    className='h-10 cursor-pointer text-white' />
                <span
                    className='text-xl text-white'>Curriculum</span>
            </div>

            <Account />
            <ul className='flex flex-col py-2'>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className='h-10 text-slate-400/70 poppins cursor-pointer font-light'>
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
            {/* // Header */}
            <Header />
            <div className='w-full h-[calc(100%-2.5rem)] p-4'>
                <ComposedComponent />
            </div>


        </div>
    </div>
)

export default Layout
