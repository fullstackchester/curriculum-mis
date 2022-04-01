import React from 'react'
import { IoBarChart, IoSchool, IoPeople } from 'react-icons/io5';
export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <IoBarChart />,
        link: '/dashboard',
    },
    {
        title: 'Curriclum',
        icon: <IoSchool />,
        link: '/curriculum',
    },
    {
        title: 'Faculty',
        icon: <IoPeople />,
        link: '/faculty',
    },
]
