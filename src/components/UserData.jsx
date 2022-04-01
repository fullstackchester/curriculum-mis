import React from 'react'

export default function UserData(props) {
    return (
        <div className='w-fit h-fit flex flex-col poppins font-medium mb-5'>
            <label
                htmlFor={props.name}
                className='text-xs text-zinc-500'> {props.label} </label>
            <span
                name={props.name}
                className='text-lg text-zinc-800'> {props.value ? props.value : '--'} </span>
        </div>
    )
}
