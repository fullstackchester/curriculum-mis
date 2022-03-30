import React, { useState } from 'react';
import { IoPencil } from "react-icons/io5";
import { auth } from '../js/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Link } from 'react-router-dom'

export default function Account() {

    const [user, setUser] = useState('');
    onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser)
    })

    return (
        <div className='w-full h-auto flex flex-row'>
            <img src='img/Bust/peep-46.svg' className='h-auto w-20' />
            <div className='h-full w-[calc(100%-5rem)] ml-2 py-3 flex flex-col poppins '>
                <p className='text-white text-md font-medium'>
                    {user.displayName}
                </p>
                <span
                    className='text-cyan-300 text-xs font-light text-ellipsis'>
                    {user.email}
                </span>

                <p
                    className='text-xs text-white mt-2 flex flex-row
                     items-center cursor-pointer hover:underline'>
                    <Link to='/user_profile'>
                        Edit profile
                    </Link>

                    <IoPencil className='ml-2 text-cyan-300 text-lg' />
                </p>
            </div>
        </div>
    )
}
