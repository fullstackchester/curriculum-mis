import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../Firebase/AuthContext';


export default function Account() {

    const { currentUser } = useAuth()


    return (
        <>
            <Link to='/profile'>
                <div className='w-full h-auto flex flex-row px-2 py-4 poppins border-y border-white/40'>
                    <img src={require('../img/peep-62.svg').default}
                        className='rounded-[100%] w-16 h-16 border border-sky-800 bg-sky-800' />
                    <div className='flex flex-col h-full ml-2 flex-grow'>
                        <h4 className='text-white text-2xl font-light '>{currentUser && currentUser.displayName}</h4>
                        <span className='text-white/70 text-xs font-light'>{currentUser && currentUser.email} </span>
                    </div>

                </div>
            </Link>
        </>
    )
}
