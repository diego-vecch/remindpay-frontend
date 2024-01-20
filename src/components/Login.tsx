'use client'
import { useState } from 'react'
import { ButtonForm } from './ButtonForm'
import { EyeOpenPasswordForm, EyeClosePasswordForm } from './Icons/EyePasswordForm'

const Login: React.FC = () => {
  const [view, setview] = useState(false)
  const password = view ? 'text' : 'password'
  const [email, setEmail] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const [apiResponse, setApiResponse] = useState(null)

  const handleSubmit = (): void => {
    try {
      const response = fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password: passwordUser
        })
      }).then((res) => {
        const data = res.json()
        setApiResponse(data)
        console.log(apiResponse)
      })
      if (response.ok) {
        // Manejar la respuesta de éxito, por ejemplo, redirigir al usuario.
        console.log('Inicio de sesión exitoso')
        // Puedes redirigir al usuario o realizar otras acciones aquí.
      } else {
        // Manejar errores de autenticación.
        console.error('Error al iniciar sesión:', response.statusText)
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error)
    }
  }
  return (
    <div className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      <div className='mb-8 flex flex-col gap-2 justify-center w-96'>
        <div className='py-6'>
          <h4 className='text-center text-3xl text-violet-900'>Login</h4>
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
              type='password'
              required
              autoComplete='off'
              value={passwordUser}
              onChange={(e) => setPasswordUser(e.target.value)}
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
          <ButtonForm
            click={(e: { preventDefault: () => void }) => {
              e.preventDefault()
              handleSubmit()
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
