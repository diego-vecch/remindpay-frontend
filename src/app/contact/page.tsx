import FormContact from '@/components/FormContact'
import { NavbarHomepage } from '@/components/NavbarHomepage'

export default function page (): JSX.Element {
  return (
    <main className='h-screen flex flex-col justify-center w-full'>
      <NavbarHomepage />
      <FormContact />
    </main>
  )
}
