'use client'

import { ButtonForm } from './ButtonForm'

const Register: React.FC = () => {
  return (
    <div className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      <div className='mb-8 flex flex-col gap-2 justify-center w-96'>
        <div className='py-6'>
          <h4 className='text-center text-3xl text-violet-900'>Register</h4>
        </div>
        <form action='' className='w-full max-w-md rounded-md flex flex-col gap-4 '>
          <div className='mb-4'>
            <input
              type='text' id='email'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Email:'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text' id='Name'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Name:'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text' id='userName'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='UserName:'
            />
          </div>

          <div className='mb-4'>
            <input
              type='password' id='password'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Password:'
            />
          </div>
          <ButtonForm nameButton='Register' />

        </form>
      </div>
    </div>
  )
}

export default Register
