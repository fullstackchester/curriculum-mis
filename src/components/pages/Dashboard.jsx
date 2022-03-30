import React, { useState, useRef } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header'
import { auth } from '../../js/firebase'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'


export default function Dashboard() {
    const [user, setUser] = useState('')
    const [data, setData] = useState('')
    const nameRef = useRef()

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        if (user) {
            user.providerData.forEach((profile) => {
                return setData('Display name: ' + profile.displayName)
            })
        } else {
            return setData('user undefined')
        }
    })

    const setDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
        }).then(() => {
            alert("update successful")
        }).catch((e) => {
            alert(e.message)
        });
    }
    return (

        <div
            className='h-full w-full flex flex-row bg-gray-100'>
            <Sidebar />
            <div
                className='h-full w-[calc(100%-250px)] flex flex-col'>
                <Header />
                <div className='w-full h-[calc(100%-2.5rem)] p-3'>
                    <div className='w-full h-full bg-white rounded-md border border-slate-200'>

                    </div>
                </div>
            </div>
        </div>
    )
}
