import React, { useState } from 'react'
import { IoPencil, IoAdd, IoRemove } from 'react-icons/io5'

export default function FunctionPanel({ add, mod, del }) {

    const headerData = [
        {
            title: 'Add',
            icon: <IoAdd />,
            func: add,
        },
        {
            title: 'Delete',
            icon: <IoRemove />,
            func: del,
        },

    ]
    return (
        <div className='w-full h-10 bg-zinc-800 rounded-sm sticky top-14 flex justify-end shadow-sm'>


            <div className='h-full w-fit'>
                <ul className='h-full w-40 flex flex-row justify-evenly items-center text-xs font-medium poppins'>
                    {headerData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                onClick={val.func}
                                className='w-auto h-full px-4 flex flex-row text-white font-light items-center cursor-pointer'>
                                {val.title}
                                <span className='ml-1'> {val.icon} </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
