import React, { useState } from 'react';
import { IoLockClosed, IoChevronForward } from "react-icons/io5";
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../js/firebase';
import Modal from 'react-modal';

export default function Header(props) {

    const [user, setUser] = useState('')
    const [signOut, setSignOut] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)

    onAuthStateChanged(auth, (signedUser) => {
        setUser(signedUser)
        if (user) {
            setSignOut(false)
        }
    })

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }

    return (
        <div className='h-10 w-full bg-zinc-700 flex flex-row justify-between items-center sticky top-0 left-270'>
            <span
                className='text-sm text-slate-50 poppins px-3 flex flex-row items-center'>
                <IoChevronForward className='mr-3 text-cyan-300' />
                <span>{props.headings}</span>
            </span>
            <button
                disabled={signOut}
                onClick={openModal}
                className='h-full w-auto px-2 text-slate-50 text-xs poppins
                 hover:bg-zinc-800 hover:text-cyan-300 flex flex-row
                  items-center cursor-pointer outline-none'>
                Logout
                <IoLockClosed className='ml-1' />
            </button>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal" >
                <button
                    className='bg-zinc-700 text-white p-2 outline-none text-sm poppins'
                    onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>

                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>

            </Modal>
        </div>
    )
}
