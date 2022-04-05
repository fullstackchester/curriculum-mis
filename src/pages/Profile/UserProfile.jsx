import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { useAuth } from '../../Firebase/AuthContext'
import DisplayData from '../../components/DisplayData'

export default function UserProfile() {

    const navigate = useNavigate()
    const { currentUser } = useAuth()

    return (
        <div className='w-full h-auto bg-white flex flex-col p-4'>
            <div className='w-full h-full flex flex-row '>

                <div className='w-fit h-full border-slate-300 flex justify-center flex-col mr-5'>
                    <img
                        className='w-[220px] h-[220px] rounded-[100%] bg-sky-800 border border-sky-800 bg-cover mb-4'
                        src={require('../../img/peep-62.svg').default} />
                    {currentUser.emailVerified ? 'Verified Account' : 'Not verified'}

                </div>

                <div className='h-full flex flex-col flex-grow'>
                    <DisplayData label='Administrator Id' data={currentUser.uid} />
                    <DisplayData label='Display name' data={currentUser.displayName} />
                    <DisplayData label='Email address' data={currentUser.email} onClick={console.log(currentUser)} />
                    <DisplayData label='Phone' data={currentUser.phoneNumber ? currentUser.phoneNumber : '--'} />
                    <DisplayData label='Email verified' data={currentUser.emailVerified ? 'Verified' : 'Not verification'} />
                    <button onClick={(e) => {
                        e.preventDefault()
                        navigate('edit-profile')
                    }}
                        className='w-fit py-2 px-4 bg-zinc-800 text-white poppins text-xs font-light flex flex-row rounded-md self-end'>
                        Update Profile <AiOutlineEdit className='ml-2' />
                    </button>
                </div>

            </div>

        </div>
    )
}
