import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar/Sidebar'
import { useForm } from 'react-hook-form'
import { auth } from '../../js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function UserProfile({ domTitle }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [user, setUser] = useState('')
    const [currentName, setCurrentName] = useState('')
    const [currentUid, setCurrentUid] = useState('')
    const [currentEmail, setCurrentEmail] = useState('')

    onAuthStateChanged(auth, (currenUser) => {
        setUser(currenUser)
        if (user) {
            setCurrentName(user.displayName)
            setCurrentUid(user.uid)
            setCurrentEmail(user.email)
        }
    })



    return (
        <div
            className='base-div'>
            <Sidebar />
            <div
                className='h-full w-[calc(100%-250px)] flex flex-col'>
                <Header headings='Hello' />
                <div className='w-full h-[calc(100%-2.5rem)] p-3'>
                    <div
                        className='panel-div'>
                        <form
                            spellCheck='false'
                            onSubmit={handleSubmit(onSubmit)}
                            className='forms border border-slate-300 w-60 h-full flex flex-col justify-evenly poppins'>

                            <input
                                onChange={(event) => {
                                    setCurrentName(event.target.value)
                                }}
                                value={currentName}
                                type='text'
                                placeholder='Display name'
                                className='input-text' />
                            <input
                                value={currentUid}
                                type='text'
                                placeholder='Display name'
                                className='input-text' />
                            <input
                                value={currentEmail}
                                type='text'
                                placeholder='Email address'
                                className='input-text' />

                            <input
                                type='submit'
                                className='input-submit'
                                value='Save' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
