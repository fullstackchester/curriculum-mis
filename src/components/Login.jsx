import React, { useState, useRef } from 'react';
import { auth } from '../js/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loginError, setLoginError] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const emailRef = useRef()
    const passRef = useRef()

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)

    })


    const login = () => {
        // return setLoginError('taningamo gago ka')

        if (emailRef.current.value !== '' || passRef.current.value !== '') {

            signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
                .then(() => {
                    navigate('/')
                })
                .catch((e) => {
                    return setLoginError(e.message)
                })
        } else {
            return emailRef.current.value === null ? setLoginError('Enter email address') : setLoginError('Enter password')
        }
    }

    return (
        <div className='w-full h-full flex justify-center items-center bg-slate-50'>
            <div className='w-[400px] h-2/4 bg-white border border-slate-100 shadow-lg flex flex-col rounded-lg px-10 py-6'
                spellCheck='false'>
                <div className='w-full h-10 flex flex-row'>
                    <img
                        src='logo192.png'
                        className='h-8 w-auto' />
                    <span className='text-2xl ml-2 font-semibold poppins text-zinc-700'>
                        Login
                    </span>
                </div>

                <input
                    type='text'
                    ref={emailRef}
                    className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
                    placeholder='Email'></input>

                <input
                    type='password'
                    ref={passRef}
                    className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
                    placeholder='Password'></input>

                <div className='w-full h-7 p-1 mt-3'>
                    <p
                        className='w-full h-full text-xs font-medium text-red-500 text-right poppins'>
                        {loginError}
                    </p>
                </div>

                <button
                    type='submit'
                    onClick={login}
                    className='w-full outline-none bg-zinc-700 text-white text-sm rounded-md p-2 mt-4 poppins hover:text-cyan-300 hover:ring-1 hover:ring-cyan-300'>
                    Login
                </button>

                <div className='w-full poppins mt-5'>
                    <p className='text-sm font-normal text-center'>
                        Don't have an account?
                        <Link to='/register'>
                            <span className='ml-2 font-semibold text-cyan-500 cursor-pointer'>
                                Register
                            </span>
                        </Link>

                    </p>
                </div>
            </div>
        </div>
    )
}
