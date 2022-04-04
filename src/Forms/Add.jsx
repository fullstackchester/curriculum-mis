import React from 'react'
import Input from '../components/Input'

function Add({ handleSubmit, InputData, formTitle }) {
    return (
        <form
            onSubmit={handleSubmit}
            className='w-full h-auto flex flex-col poppins' >
            <h1 className='font-light text-2xl mb-5'>{formTitle} </h1>
            {InputData.map((val, key) => {
                return (
                    <Input
                        key={key}
                        label={val.title}
                        type={val.type}
                        name={val.name}
                        placeholder={val.placeholder}
                        required={val.required} />
                )
            })}

            <button
                type='submit'
                className='w-full h-auto p-2 border border-zinc-800
                             bg-zinc-800 rounded-md outline-none text-white text-xs
                              cursor-pointer'>Add</button>

        </form>
    )
}

export default Add