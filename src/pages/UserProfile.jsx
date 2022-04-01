import React from 'react'
import Avatar from '../components/Avatar'
import UserData from '../components/UserData'
import { useAuth } from '../Firebase/AuthContext'


export default function UserProfile() {
    const { currentUser } = useAuth()
    return (    
        <div className='w-full h-auto bg-white rounded-md flex flex-col p-4'>

            <div className='w-full h-auto flex flex-row'>
                <Avatar
                    className='w-40 h-40 border-2 border-zinc-800 bg-slate-500 rounded-[100%] object-cover'
                    alt='admin-avatar'
                    src='img/Bust/peep-46.svg' />

                <div className='h-auto w-[calc(100%-10rem)] ml-4 flex flex-col'>


                    <UserData
                        label='Administrator id'
                        name='admin-id'
                        value={currentUser && currentUser.uid}
                    />
                    <UserData
                        label='Display name'
                        name='display-name'
                        value={currentUser && currentUser.displayName}
                    />

                    <UserData
                        label='Email address'
                        name='email'
                        value={currentUser && currentUser.email}
                    />

                    <UserData
                        label='Phone'
                        name='phone'
                        value={currentUser && currentUser.phoneNumber}
                    />

                    <UserData
                        label='Email verified'
                        name='email-verified'
                        value={currentUser && currentUser.emailVerified}
                    />

                    <UserData
                        label='Last sign-in'
                        name='last-sign-in'
                        value={currentUser && currentUser.metadata.lastSignInTime}
                    />
                </div>

            </div>


            <div className='w-full h-auto flex flex-row justify-end'>
                <button className='w-auto h-fit py-2 px-5 font-light rounded-md bg-zinc-800 text-xs text-white poppins mr-5'>Edit</button>

                <button className='w-auto h-fit py-2 px-5 font-light rounded-md bg-red-800 text-xs text-white poppins'>Delete account</button>

            </div>
        </div>

    )
}
