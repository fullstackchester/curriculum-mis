import React from 'react'
import { IoPencil, IoAdd, IoRemove } from 'react-icons/io5'


export default function FunctionPanel(props) {


    const headerData = [
        {
            title: 'Add',
            icon: <IoAdd />
        },
        {
            title: 'Modify',
            icon: <IoPencil />
        },
        {
            title: 'Delete',
            icon: <IoRemove />
        },

    ]
    return (
        <div className='w-full h-10 bg-white sticky top-14 flex justify-end shadow-sm'>
            <div className='h-full w-fit'>
                <ul className='h-full w-60 flex flex-row justify-evenly items-center text-xs font-medium poppins'>
                    {headerData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className='w-auto h-full px-4 flex flex-row items-center cursor-pointer hover:bg-zinc-200'>
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
