import React from 'react'
import Input from '../components/Input'

function Add({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}
            className='w-full h-full flex flex-col poppins'>
            <h1 className='font-light text-2xl mb-5'>New Subject</h1>

            <Input label='Course code' name='course-code' type='text' placeholder='e.g IT 101' />
            <Input label='Subject name' name='subject-name' type='text' placeholder='e.g Object Oriented Programming' />

            <button
                type='submit'
                className='w-full h-auto p-2 border border-zinc-800
                 bg-zinc-800 rounded-md outline-none text-white text-xs
                  cursor-pointer'>Add</button>

        </form>
    )
}

export default Add