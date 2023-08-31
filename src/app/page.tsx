import { NavbarHomepage } from '@/components/NavbarHomepage'
import { Header } from '@/components/Header'
import { Description } from '@/components/Description'
import { SectionCards } from '@/components/SectionCards'
import { Footer } from '@/components/Footer'

export default function Home (): JSX.Element {
  return (
    <main className='bg-light-homepage h-screen flex flex-col justify-between bg-cover'>
      <NavbarHomepage active='home' />
      <Header />
      <Description />
      <SectionCards />
      <Footer />
    </main>
  )
}
