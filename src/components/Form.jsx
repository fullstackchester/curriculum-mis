import React from 'react'
import Input from './Input'

export default function Form(
    {
        formSubmit,
        formData,
        formTitle,
        errorMsg
    }) {



    return (
        <form onSubmit={formSubmit}
            spellCheck='false'
            className='h-auto w-1/2 poppins p-5 flex flex-col'>

            <h1 className='font-light text-2xl text-zinc-800 mb-5'>{formTitle}</h1>
            {formData.map((val, key) => {
                return (
                    <Input
                        key={key}
                        placeholder={val.placeholder}
                        label={val.title}
                        value={val.value}
                        type={val.type}
                        onChange={val.onChange} />
                )

            })}
            {errorMsg &&
                <p
                    className='poppins text-sm text-center text-red-700 p-2
                     border border-red-100 bg-red-50 mb-2 rounded-md'>
                    {errorMsg}
                </p>}
            <button
                type='submit'
                className='w-full h-fit bg-zinc-800 text-white text-sm p-2 rounded-md'>
                Submit

            </button>
        </form>
    )
}
