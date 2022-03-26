import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Account() {



    return (
        <div className='w-full h-20 border-b border-slate-50/30 flex flex-row '>
            <img src='img/Bust/peep-46.svg' className='h-full w-auto' />
            <div className='h-full w-auto ml-4 py-2 flex flex-col poppins'>
                <p className='text-white text-md font-medium'>Administrator62</p>
                <span className='text-cyan-300 text-xs font-lightw'>Department Head </span>

                <p className='text-xs text-white mt-2 flex flex-row items-center'>
                    Online
                    <IoCheckmarkCircle className='ml-2 text-green-400' />
                </p>
            </div>
        </div>
    )
}
