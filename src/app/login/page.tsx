import Login from '@/components/Login'
import { NavbarHomepage } from '@/components/NavbarHomepage'

export default function page (): JSX.Element {
  return (
    <main className='h-screen flex flex-col justify-center w-full'>
      <NavbarHomepage />
      <Login />
    </main>
  )
}
