
import { RegisterForm } from '@/components/RegisterForm'
import { NavbarHomepage } from '@/components/NavbarHomepage'

export default function page (): JSX.Element {
  return (

    <main className='h-screen flex flex-col justify-center w-full'>
      <NavbarHomepage />
      <RegisterForm />
    </main>

  )
}
