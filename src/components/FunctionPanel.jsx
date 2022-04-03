import React from 'react'
import { IoPencil, IoAdd, IoRemove } from 'react-icons/io5'


export default function FunctionPanel(props) {


    const headerData = [
        {
            title: 'Add',
            icon: <IoAdd />,
            function: props.add
        },
        {
            title: 'Modify',
            icon: <IoPencil />,
            function: props.modify
        },
        {
            title: 'Delete',
            icon: <IoRemove />,
            function: props.delete
        },

    ]
    return (
        <div className='w-full h-10 bg-zinc-800 rounded-sm sticky top-14 flex justify-end shadow-sm'>
            <div className='h-full w-fit'>
                <ul className='h-full w-60 flex flex-row justify-evenly items-center text-xs font-medium poppins'>
                    {headerData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                onClick={val.function}
                                className='w-auto h-full px-4 flex flex-row text-white font-light items-center cursor-pointer hover:bg-zinc-700'>
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
