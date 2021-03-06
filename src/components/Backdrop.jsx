import React from 'react'
import { motion } from 'framer-motion'

const Backdrop = ({ children, onClick }) => {
    return (
        <motion.div
            className='w-screen h-screen absolute top-0 left-0 bg-black/70 flex justify-center items-center'
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>

            {children}

        </motion.div>
    )
}
export default Backdrop