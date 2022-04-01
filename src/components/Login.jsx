import React, { useState } from 'react';
import { auth } from '../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../css/input.css';

export default function Login() {


    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    // check if input are empty
    const isEmpty = string => string === ''


    function handleSubmit(e) {
        e.preventDefault()
        if (isEmpty(email) || isEmpty(pass)) {
            return setError('Missing email or password')
        } else {
            signInWithEmailAndPassword(auth, email, pass)
                .then(() => {
                    navigate('/dashboard')
                })
                .catch((e) => {
                    setError(e.code)
                })
        }
    }



    return (
        <div className='w-full h-screen flex justify-center items-center'>


            <div className='w-[22rem] h-auto py-5 px-8 bg-slate-50/30 border border-zinc-200/50 rounded-md shadow-lg flex flex-col poppins '>
                <p className='font-medium text-2xl text-center text-zinc-700 mb-10'>Login</p>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col poppins mb-5'
                    autoComplete='false'
                    spellCheck='false'>

                    <label
                        htmlFor='email'
                        className='text-sm text-zinc-600 font-medium poppins'>Email</label>
                    <input
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        type='text'
                        name='email'
                        placeholder='example@email.com'
                        className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />
                    <label
                        htmlFor='password'
                        className='text-sm text-zinc-600 font-medium poppins'>Password</label>
                    <input
                        onChange={(event) => {
                            setPass(event.target.value)
                        }}
                        type='password'
                        name='password'
                        placeholder='min. 6 characters'
                        className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />

                    <p className='text-right text-sm text-red-600 poppins mb-5'>{error}</p>

                    <input
                        type='submit'
                        value='Login'
                        className='w-full h-auto p-2 border border-cyan-900 bg-cyan-900 rounded-md outline-none text-white text-sm cursor-pointer' />

                </form>

                <p className='text-sm font-medium text-center text-zinc-700'>Don't have an account?
                    <Link to='/register'>
                        <span className='font-semibold text-cyan-500 cursor-pointer hover:underline ml-1'>Register</span>
                    </Link>

                </p>

            </div>







        </div>
    )
}
