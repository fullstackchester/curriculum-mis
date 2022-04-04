import React from 'react'

export default function Input(props) {
    return (
        <div className='h-auto w-auto flex flex-col'>
            <label
                htmlFor={props.name}
                className='text-xs text-zinc-600 font-medium poppins'>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className='w-60 h-auto text-xs text-zinc-600 poppins border border-zinc-300 p-3 outline-none rounded-md
                 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent font-medium' />

        </div>
    )
}
