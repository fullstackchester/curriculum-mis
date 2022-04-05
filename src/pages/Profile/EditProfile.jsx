import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/Form'
import { useAuth } from '../../Firebase/AuthContext'
import Input from '../../components/Input'

export default function EditProfile() {

    const { currentUser } = useAuth()
    const [displayName, setDisplayName] = useState(currentUser.displayName)
    const [email, setEmail] = useState(currentUser.email)
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber ? currentUser.phoneNumber : '')
    const [error, setError] = useState('')
    const adminData = [
        {
            name: 'displayName',
            title: 'Display name',
            placeholder: 'e.g. John Smith',
            type: 'text',
            value: displayName,
            onChange: (e) => setDisplayName(e.target.value)
        },
        {
            name: 'email',
            title: 'Email',
            placeholder: 'only Gmail accounts accepted',
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            name: 'phone',
            title: 'Phone number',
            placeholder: '0912xxxxxxxx',
            type: 'text',
            value: phoneNumber,
            onChange: (e) => setPhoneNumber(e.target.value)
        },
    ]

    function updateProfile(e) {
        e.preventDefault()
        
    }
    return (
        <div className='w-full h-auto bg-white flex flex-row p-4'>
            <Form formTitle='Update Profile' formData={adminData} formSubmit={updateProfile} errorMsg={error} />
        </div>
    )
}
