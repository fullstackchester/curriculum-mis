import React from 'react';
import { useState, useRef } from 'react';
import { auth } from '../js/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, AuthErrorCodes, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';


export default function Register() {
  document.title = 'Register'
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPass, setRegisterPass] = useState('')
  const [registerConfPass, setRegisterConfPass] = useState('')
  const [registerError, setRegisterError] = useState('')
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    setRegisterError(user.displayName)
  })


  const clickME = () => {

    if (registerName === '' || registerEmail === '' || registerPass === '' || registerConfPass === '') {
      return setRegisterError('Fill up the missing field')
    } else {

      if (registerPass === registerConfPass) {
        CreateAcc()
      } else {
        return setRegisterError('Passwords do not match')
      }
    }
  }


  const CreateAcc = () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, registerEmail, registerPass)
      .then(() => {

      })
      .catch((e) => {
        return setRegisterError(e.message)
      })


    setLoading(false)
  }


  // create a function that converts the error code into readable message

  const errorMsg = (code) => {
    return ('tanga')
  }


  return (
    <div className='w-full h-full flex justify-center items-center bg-slate-50'>
      <div
        className='w-[400px] h-auto bg-white border border-slate-100 shadow-lg flex flex-col rounded-lg px-10 py-6'
        spellCheck='false'>

        <div className='w-full h-10 flex flex-row'>
          <img
            src='logo192.png'
            className='h-8 w-auto' />
          <span className='text-2xl ml-2 font-semibold poppins text-zinc-700'>
            Register
          </span>
        </div>

        <input
          type='text'
          onChange={(event) => {
            setRegisterName(event.target.value)
          }}
          className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
          placeholder='Administrator Name'></input>

        <input
          type='text'
          // ref={emailRef}
          onChange={(event) => {
            setRegisterEmail(event.target.value)
          }}
          className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
          placeholder='Email'></input>

        <input
          type='password'
          // ref={passRef}
          onChange={(event) => {
            setRegisterPass(event.target.value)
          }}
          className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
          placeholder='Password'></input>

        <input
          type='password'
          // ref={confirmPassRef}
          onChange={(event) => {
            setRegisterConfPass(event.target.value)
          }}
          className='w-full p-2 border border-slate-200 bg-slate-50 rounded-md text-zinc-700 font-medium outline-none text-sm mt-5 poppins focus:ring-1 focus:ring-cyan-300'
          placeholder='Confirm password'></input>

        <div className='w-full h-7 p-1 mt-3'>
          <p
            className='w-full h-full text-xs font-medium text-red-500 text-right poppins'>
            {registerError}
          </p>
        </div>

        <button
          type='submit'
          onClick={clickME}
          disabled={loading}
          className='w-full outline-none bg-zinc-700 text-white text-sm rounded-md p-2 mt-4 poppins'>
          Create account
        </button>


        <div className='w-full poppins mt-5'>
          <p className='text-sm font-normal text-center'>
            Already have an account?

            <Link to='/'>
              <span className='ml-2 font-semibold text-cyan-500 cursor-pointer'>
                Login
              </span>
            </Link>

          </p>
        </div>

      </div>
    </div>
  )
}
