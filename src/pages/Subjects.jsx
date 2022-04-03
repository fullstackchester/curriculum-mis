import React, { useState } from 'react'
import FunctionPanel from '../components/FunctionPanel'
import { DummyData } from '../Data/DummyData'

export default function Subjects() {


    const [selected, setSelected] = useState([])
    const addSub = () => alert('you tried to add a subject')

    function modifySub() {
        console.log(selected)
    }

    return (
        <div className='w-full h-auto  flex flex-col'>
            <FunctionPanel
                add={addSub}
                modify={modifySub}
            />
            <div className='w-full h-[auto] flex flex-col flex-wrap justify-start content-start py-2'>
                {DummyData.map((val, key) => {
                    return (
                        <div
                            key={key}
                            className='w-full h-16 bg-white border-b border-slate-200 justify-between items-center flex flex-row p-2 poppins'>
                            <div className='flex flex-col'>
                                <h4 className='text-lg   font-medium'>{val.name.toUpperCase()} </h4>
                                <span className='text-xs font-medium text-zinc-600 whitespace-pre-wrap'>{val.email} </span>
                            </div>
                            <input
                                type='checkbox'
                                onChange={(e) => {
                                    setSelected([
                                        ...selected, {
                                            name: val.name,
                                            email: val.email
                                        }
                                    ])
                                }} />

                        </div>
                    )
                })}

            </div>

        </div>
    )
}
