import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Profile() {

    return (
        <div className=' w-full h-auto p-4'>
            <Outlet />
        </div>
    )
}

