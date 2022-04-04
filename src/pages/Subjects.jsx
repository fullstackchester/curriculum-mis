import React, { useState, useEffect } from 'react'
import FunctionPanel from '../components/FunctionPanel'
import { ref, onValue } from 'firebase/database'
import { database } from '../Firebase/firebase'
import Modal from '../components/Modal'
import Add from '../Forms/Add'

export default function Subjects() {


    const [selected, setSelected] = useState([])
    const [subjects, setSubjects] = useState([])
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)


    useEffect(() => { // using useEffect to unsub the onValue once all the data was fetched

        const getSubjects = ref(database, 'subjects/')
        const unSub = onValue(getSubjects, (data) => data.exists() ? setSubjects(data.val()) : '')

        return unSub
    }, [])

    // function for adding new subject
    function AddSub(e) {
        e.preventDefault()
        alert('ADDING SUBJECT')
    }

    return (
        <div className='w-full h-auto  flex flex-col items-center'>
            <FunctionPanel
                add={() => { modalOpen ? closeModal() : openModal() }}
            />
            {modalOpen && <Modal
                modalOpen={modalOpen}
                handleClose={closeModal}
                children={<Add handleSubmit={AddSub} />} />}


            <div className='w-[90%] h-[auto] flex flex-col flex-wrap justify-start content-start py-2'>
                {subjects.map((val, key) => {
                    return (
                        <div
                            key={key}
                            className='w-full min-w-fit h-10 bg-white border-b
                             border-slate-200 justify-start items-center
                            flex flex-row p-2 poppins'>

                            <span className='w-1/12 text-xs font-medium whitespace-pre-wrap'>{val.courseCode} </span>
                            <h4 className='w-3/12 text-xs font-medium'>{val.name.toUpperCase()} </h4>

                            <input
                                type='checkbox'
                                className='justify-self-end'
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelected([
                                            ...selected, {
                                                name: val.name,
                                                courseCode: val.courseCode
                                            }
                                        ])
                                    } else {
                                        setSelected([
                                            ...selected, {
                                                name: '',
                                                courseCode: ''
                                            }
                                        ])
                                    }
                                }} />

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
