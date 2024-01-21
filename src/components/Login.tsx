'use client'
import { useState } from 'react'
import { ButtonForm } from './ButtonForm'
import { EyeOpenPasswordForm, EyeClosePasswordForm } from './Icons/EyePasswordForm'

const Login: React.FC = () => {
  const [view, setview] = useState(false)
  const typeInput = view ? 'text' : 'password'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [responseLogin, setResponseLogin] = useState({
    status: '',
    message: ''
  })

  const handleSubmit = (): void => {
    const URL = process.env.NEXT_PUBLIC_URL_LOGIN ?? 'localhost:8000/api/v1/auth/login'
    void fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(async res => {
      const data = await res.json()
      if (!res.ok) {
        setResponseLogin({
          status: data.status,
          message: data.message
        })
      }
      return data
    }).then(response => {
      sessionStorage.setItem('JWT', response.token)
      setResponseLogin({
        status: response.status,
        message: response.message
      })
      redirect()
    })
  }

  const redirect = (): void => global.location.replace('http://localhost:3000/')

  return (
    <div className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      <div className='mb-8 flex flex-col gap-2 justify-center w-96'>
        <div className='pt-4 pb-1'>
          <h4 className='text-center text-3xl text-violet-900 mb-2'>Login</h4>
          {responseLogin.status === '' && (<article className='h-10 flex justify-center' />)}
          {responseLogin.status === 'error' && (<article className='text-red-600 bg-red-400 bg-opacity-20 text-center h-10 flex items-center justify-center'>{responseLogin.message}</article>)}
          {responseLogin.status === 'success' && (<article className='text-green-600 bg-green-400 bg-opacity-20 text-center h-10 flex items-center justify-center'>{responseLogin.message}</article>)}
          {(responseLogin.status !== 'success' && responseLogin.status !== '' && responseLogin.status !== 'error') && (<article className='text-red-600 bg-red-400 bg-opacity-20 text-center h-10 flex items-center justify-center'>{responseLogin.message}</article>)}
        </div>
        <form action='' className='w-full max-w-md rounded-md flex flex-col gap-4 '>
          <div className='mb-4'>
            <input
              type='text' id='email'
              required
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900  focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Email:'
            />
          </div>
          <div className='mb-4 flex'>
            <input
              type={typeInput}
              required
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded-md bg-purple-500 bg-opacity-5 placeholder-purple-700 border-purple-900 focus:outline-none focus:border-violet-600 focus:placeholder-violet-500 focus:bg-opacity-0 text-purple-800' placeholder='Password:'
            />
            <div className='pt-1 z-10'>
              <button
                className='absolute ml-3'
                onClick={(e) => {
                  e.preventDefault()
                  setview(!view)
                }}
              >
                {view && (<EyeOpenPasswordForm />)}
                {!view && (<EyeClosePasswordForm />)}

              </button>
            </div>

          </div>
          <ButtonForm
            click={(e: { preventDefault: () => void }) => {
              e.preventDefault()
              void handleSubmit()
            }} nameButton='Log in'
          />
          <div className='w-full flex justify-center'>
            <button type='submit' className='bg-transparent text-purple-700 rounded-md hover:underline'>Forgot your password?</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
