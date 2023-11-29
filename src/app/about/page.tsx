import Image from 'next/image'
import { NavbarHomepage } from '@/components/NavbarHomepage'
import { Footer } from '@/components/Footer'

export default function page (): JSX.Element {
  return (
    <main className='h-full flex flex-col w-full'>
      <NavbarHomepage />
      <div className=' flex h-full flex-col justify-center w-full mx-auto my-auto max-w-[1400px]'>
        <div className="pt-28 h-full flex justify-center items-center text-violet-900 text-4xl font-semibold font-['Concert One'] ">
          <h1>About</h1>
        </div>
        <div className='flex justify-center items-center pt-20 pb-20  w-full h-full'>
          <div className='flex flex-col md:flex-row px-28 gap-10 md:gap-28'>
            <div className='flex w-full'>
              <Image
                src='/about.webp'
                alt='Autor of image of Kaleidico, from Unplash'
                width={600}
                height={300}
              />
            </div>
            <div className='w-full bg-purple-400 rounded flex justify-center'>
              <div className="text-violet-900 text-center font-medium font-['DM Sans'] mx-9 my-9">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type  specimen book.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
