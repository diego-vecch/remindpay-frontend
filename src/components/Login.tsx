'use client'
import { useState } from 'react'
import { ButtonForm } from './ButtonForm'
import { EyeOpenPasswordForm, EyeClosePasswordForm } from './Icons/EyePasswordForm'
const Login: React.FC = () => {
  const [view, setview] = useState(false)
  const password = view ? 'text' : 'password'
  return (
    <div className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      <div className='mb-8 flex flex-col gap-2 justify-center w-96'>
        <div className='py-6'>
          <h4 className='text-center text-3xl text-violet-900'>Login</h4>
        </div>
        <form action='' className='w-full max-w-md rounded-md flex flex-col gap-4 '>
          <div className='mb-4'>
            <input
              type='text' id='emailorusername'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Email or Username:'
            />
          </div>
          <div className='mb-4 flex'>
            <input
              type={password}
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900 focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Password:'
            />
            <div className='pt-1 z-10'>
              <button
                className='absolute ml-3' onClick={(e) => {
                  e.preventDefault()
                  setview(!view)
                }}
              >
                {view && (<EyeOpenPasswordForm />)}
                {!view && (<EyeClosePasswordForm />)}

              </button>
            </div>

          </div>
          <ButtonForm nameButton='Log in' />
          <div className='w-full flex justify-center'><button type='submit' className='bg-transparent text-purple-700 rounded-md hover:underline'>Forgot your password?</button></div>

        </form>
      </div>
    </div>
  )
}

export default Login
