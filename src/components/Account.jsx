import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../Firebase/AuthContext';
import Avatar from './Avatar';

export default function Account() {

    const { currentUser } = useAuth()

    return (
        <div className='w-full h-auto flex flex-row px-2 py-4'>
            <Avatar
                alt='admin-avatar'
                src='img/Bust/peep-46.svg'
                className='h-20 w-20 rounded-[100%] border border-slate-200 bg-zinc-700 object-cover' />
            <div className='h-full w-[calc(100%-5rem)] ml-2 py-3 flex flex-col poppins '>
                <p className='text-white text-md font-medium'>
                    {currentUser && currentUser.displayName}
                </p>
                <span
                    className='text-slate-100/70 text-xs font-light text-ellipsis'>
                    {currentUser && currentUser.email}
                </span>

                <p
                    className='text-xs text-white mt-2 flex flex-row
                     items-center cursor-pointer hover:underline'>
                    <Link to='/user_profile'>
                        View profile
                    </Link>
                </p>
            </div>
        </div>
    )
}
