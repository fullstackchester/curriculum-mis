import React from 'react'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Firebase/AuthContext'

export default function Register() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [isCreated, setIsCreated] = useState(false)
  const [error, setError] = useState('')

  const [loading, setLoading] = useState()

  const { currentUser } = useAuth()

  const navigate = useNavigate()

  // check if input are empty
  const isEmpty = string => string === ''

  async function handleSubmit(e) {
    e.preventDefault()

    if (isEmpty(name) || isEmpty(email) || isEmpty(pass) || isEmpty(confirmPass)) {
      return setError('Fill up the required fields')
    } else {
      if (pass === confirmPass) {

        setError('')
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, pass)
          .then(() => {
            // auth created
          })
          .catch((err) => setError(err.code))


        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: ''
        }).then(() => navigate('/dashboard'))
          .catch((err) => setError(err.code))


        setLoading(false)

      } else {
        return setError('Passwords dont match')
      }
    }
  }

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-[22rem] h-auto py-5 px-8 bg-slate-50/30 border border-zinc-200/50 rounded-md shadow-lg flex flex-col poppins '>
        <p className='font-medium text-2xl text-center text-zinc-700 mb-10'>Register</p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col poppins mb-5'
          autoComplete='false'
          spellCheck='false'>

          <label
            htmlFor='name'
            className='text-sm text-zinc-600 font-medium poppins'>Display name *</label>
          <input
            onChange={(event) => {
              setName(event.target.value)
            }}
            type='text'
            name='name'
            placeholder='e.g. John Smith'
            className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />

          <label
            htmlFor='email'
            className='text-sm text-zinc-600 font-medium poppins'>Email *</label>
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
            className='text-sm text-zinc-600 font-medium poppins'>Password *</label>
          <input
            onChange={(event) => {
              setPass(event.target.value)
            }}
            type='password'
            name='password'
            placeholder='min. 6 characters'
            className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />

          <label
            htmlFor='confirm-password'
            className='text-sm text-zinc-600 font-medium poppins'>Confirm password *</label>
          <input
            onChange={(event) => {
              setConfirmPass(event.target.value)
            }}
            type='password'
            name='confirm-password'
            placeholder='min. 6 characters'
            className='w-full h-auto text-sm poppins border border-zinc-300 p-3 outline-none rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 mb-5 bg-transparent' />

          <p className='text-right text-sm text-red-600 poppins mb-5'>{error}</p>

          <input
            type='submit'
            value='Create account'
            disabled={loading}
            className='w-full h-auto p-2 border border-cyan-900 bg-cyan-900 rounded-md outline-none text-white text-sm cursor-pointer' />

        </form>
        <p className='text-sm font-medium text-center text-zinc-700'>Alreay have an account?
          <Link to='/'>
            <span className='font-semibold text-cyan-500 cursor-pointer hover:underline ml-1'>Login</span>
          </Link>

        </p>
      </div>
    </div>
  )
}
