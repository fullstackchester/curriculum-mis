import React, { useState, useRef } from 'react';
import { auth } from '../js/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Main() {

    const [user, setUser] = useState('')
    const [account, setAccount] = useState('')

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)

        if (user !== null) {
            setAccount(user.uid)
        }
    })

    document.title = 'Curriculum'


    return (
        <div className='w-screen h-full flex flex-row'>
            <Sidebar />
            <div className='w-[calc(100%-16rem)] h-full bg-slate-50 flex flex-col'>
                <Header />
                <div className='w-full h-full  bg-zinc-100 p-3 flex flex-col'>


                    <div className='h-60 w-full rounded-lg bg-white shadow-sm p-4'>
                        <span className='text-3xl font-semibold poppins text-zinc-700'>Dashboard</span>
                    </div>

                

                </div>
            </div>
        </div>
    )
}
