// import React, { useState } from 'react'
// import { IoAddOutline, IoTrashOutline } from 'react-icons/io5'
// import Delete from '../Forms/Delete'
// import Add from '../Forms/Add'
// import Modal from './Modal'

// export default function FunctionBar({ FormInputData, HandleAdd, HandleDel, formTitle }) {

//     const [modalOpen, setModalOpen] = useState(false)
//     const [modalForm, setModalForm] = useState()

//     const openModal = () => setModalOpen(true)
//     const closeModal = () => setModalOpen(false)


//     const chooseForm = (form) => {
//         setModalForm(form)
//         modalOpen ? closeModal() : openModal()
//     }


//     return (
//         <div className='h-10 w-full bg-zinc-800 sticky top-[57px] text-white flex items-center justify-end p-2'>

//             {modalOpen && <Modal
//                 modalOpen={modalOpen}
//                 handleClose={closeModal}
//                 children={modalForm}
//             />}

//             <div className='w-20 h-auto flex flex-row justify-evenly'>
//                 <IoAddOutline
//                     className='text-white text-xl'
//                     onClick={() => {
//                         chooseForm(<Add handleSubmit={HandleAdd} InputData={FormInputData} formTitle={formTitle} />)
//                     }} />
//                 <IoTrashOutline
//                     className='text-white text-xl'
//                     onClick={() => chooseForm(<Delete handleSubmit={HandleDel} />)} />

//             </div>

//         </div>
//     )
// }
