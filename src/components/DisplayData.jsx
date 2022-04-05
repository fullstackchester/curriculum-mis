import React from 'react'

export default function DisplayData({ label, data }) {


    return (
        <div className='h-min w-auto poppins flex flex-col mb-4'>
            <label
                htmlFor={label.toLowerCase() }
                className='text-sm font-medium text-zinc-600'> {label} </label>
            <span
                name={label.toLowerCase()}
                className='w-auto h-auto text-xl text-zinc-900 font-medium'>{data} </span>

        </div>
    )
}
