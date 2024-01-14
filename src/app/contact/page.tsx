import ContactPage from '@/components/Form'
import { NavbarHomepage } from '@/components/NavbarHomepage'

export default function page (): JSX.Element {
  return (
    <main className='h-full flex flex-col justify-center w-full'>
      <NavbarHomepage />
      <ContactPage />
    </main>
  )
}
