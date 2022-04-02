import React, { useState } from 'react'
import { ref, onValue, set } from 'firebase/database'
import { database } from '../Firebase/firebase'
import { useAuth } from '../Firebase/AuthContext'


export default function File() {

    const [adminData, setAdminData] = useState('')
    const [input, setInput] = useState('')
    const { currentUser } = useAuth()

    const UID = (currentUser && currentUser.uid)

    const adminRef = ref(database, 'admin/' + UID)


    onValue(adminRef, (snap) => snap.exists() ? setAdminData(snap.val().displayName) : '',
        {
            onlyOnce: true,
            
        })


    function handleSubmit(e) {
        e.preventDefault()

        set(ref(database, 'admin/' + UID), {
            displayName: input,
            fullAccess: input
        })
            .then(() => alert('write success'))
            .catch((err) => {
                alert(`${err.code}: ${err.message}`)
            });
    }


    return (

        <div className='text-3xl poppins font-light'>
            <span className='text-3xl poppins'>{adminData ? adminData : 'Null'} </span>
            <form
                onSubmit={handleSubmit}>
                <input
                    onChange={(event) => {
                        setInput(event.target.value)
                    }}
                    type='text'
                    name='email'
                    placeholder='example@email.com'
                    className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />
            </form>
        </div>
    )
}
