import React from 'react'

export default function Data(props) {
    return (
        <div className='h-60 w-60 border border-slate-300 rounded-md'>
            <h1 className='text-3xl poppins'>{props.id}</h1>
            <p>{props.fullAccess} </p>
        </div>
    )
}
