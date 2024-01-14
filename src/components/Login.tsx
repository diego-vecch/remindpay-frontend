import React from 'react'

const Login: React.FC = () => {
  return (
    <div className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      <div className='mb-8 flex flex-col justify-center'>
        <div className='py-6'>
          <h4 className='text-center text-2xl text-violet-950'>Login</h4>
        </div>
        <form action='' className='w-full max-w-md bg-purple-0 rounded-md  '>
          <div className='mb-4'>
            <input
              type='text' id='emailorusername'
              required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Email or Username:'
            />
          </div>
          <div className='mb-4'>
            <input
              type='password' id='password' required
              autoComplete='off'
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900 focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Password:'
            />
          </div>
          <button type='submit' className='bg-purple-700 text-white p-2 w-full rounded-md mb-2'>Log in</button>
          <button type='submit' className='bg-transparent text-purple-700 p-2 w-full rounded-md'>Forgot your password?</button>
        </form>
      </div>
    </div>
  )
}

export default Login
