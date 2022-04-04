import React from 'react'

export default function Input(props) {
    return (
        <div className='h-auto w-full flex flex-col poppins'>
            <label
                htmlFor={props.name}
                className='text-xs text-zinc-600 font-semibold'>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                required={props.required}
                className='w-full h-auto text-sm text-zinc-600 border border-zinc-300 p-3 outline-none rounded-md
                 focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />
        </div>
    )
}
