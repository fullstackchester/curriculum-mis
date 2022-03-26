import React, { useState, useRef } from 'react';
import { auth } from '../js/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

export default function Main() {

    const [user, setUser] = useState('')
    const [account, setAccount] = useState('')

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)

        if (user !== null) {
            setAccount(user.uid)
        }
    })


    return (
        <div className='w-screen h-full flex flex-row'>
            <Sidebar />
            {/* {account} */}
        </div>
    )
}
