import React from 'react'

const ContactPage: React.FC = () => {
  return (
    <main className='h-full flex flex-col pt-20 justify-center items-center w-full'>
      {/* Otros componentes o contenido */}

      <main className='mb-8'> {/* Agregar margen inferior de 8 unidades */}
        <form action='' className='w-full max-w-md p-6 bg-purple-0 rounded-md shadow-md '>
          <div className='mb-4'>
            <input type='text' id='name' required className='w-full p-2 border rounded-md bg-transparent placeholder-purple-500 border-purple-900' placeholder='Name:' />
          </div>
          <div className='mb-4'>
            <input type='email' id='email' required className='w-full p-2 border rounded-md bg-transparent placeholder-purple-500 border-purple-900' placeholder='Email:' />
          </div>
          <div className='mb-4'>
            <textarea id='message' className='w-full p-2 border rounded-md bg-transparent placeholder-purple-500 border-purple-900' placeholder='Message:' cols={30} rows={10} required />
          </div>
          <button type='submit' className='bg-purple-700 text-white p-2 rounded-md'>Submit</button>
        </form>
      </main>
    </main>
  )
}

export default ContactPage
