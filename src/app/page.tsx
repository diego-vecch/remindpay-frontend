import { NavbarHomepage } from '@/components/NavbarHomepage'
import { Header } from '@/components/Header'
import { Description } from '@/components/Description'
import { SectionCards } from '@/components/SectionCards'
import { Footer } from '@/components/Footer'

export default function Home (): JSX.Element {
  return (
    <main className=' h-full flex flex-col justify-center w-full'>
      <NavbarHomepage />
      <Header />
      <Description />
      <SectionCards />
      <Footer />
    </main>
  )
}
