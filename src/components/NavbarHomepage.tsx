'use client'
import { useState } from 'react'
import Link from 'next/link'
import ButtonMenu from './ButtonMenu'
import { IconHamburguerMenu, LogoNavbar, IconDarkMode } from './IconsSvg'
type Active = {
  active: string
}

export const NavbarHomepage: React.FC<Active> = ({ active: string }) => {
/*   const classborder =
    'relative before:w-full before:h-1 before:rounded before:bg-blue-regular before:absolute before:-bottom-1' */
  const [open, setOpen] = useState(true)
  const handleNav = (): void => {
    setOpen(!open)
  }

  return (
    <nav className='sm:items-center text-end sm:flex-wrap font-primary flex justify-center  w-full'>
      <div className='flex justify-center items-start flex-grow md:flex md:items-center  text-purple-dark max-w-[1450px] w-full '>
        <div className='pt-4 ml-8 mb-2'>
          <Link href='/'>
            <LogoNavbar />
          </Link>
        </div>

        <div
          onClick={handleNav}
          className=' mr-10 ml-2 mt-6 sm:hidden flex-auto grid justify-items-end'
        >
          <IconHamburguerMenu /* name={open ? 'close' : 'menu'} */ />
        </div>

        <ul
          className={`flex-auto text-sm sm:flex-grow self-start hidden sm:flex justify-end pr-6 pt-6 gap-14 md:gap-6 sm:gap-4 items-center lg:text-xl ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          <Link
            href='/'
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active == 'home' ? classborder : ''
            }`} */
          >
            Home
          </Link>
          <Link
            href='/howitwork'
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active === 'how' ? classborder : ''
            }`} */
          >
            How it Work
          </Link>
          <Link
            href='/about'
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active === 'about' ? classborder : ''
            }`} */
          >
            About
          </Link>
          <Link
            href='/contact'
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active === 'contact' ? classborder : ''
            }`} */
          >
            Contact
          </Link>

          <Link href='/Signin'>
            <ButtonMenu name='Signin' />
          </Link>

          <Link href='/Login'>
            <ButtonMenu name='Login' />
          </Link>

          <Link href='/'>
            <IconDarkMode />
          </Link>
        </ul>
        <div className={!open ? 'mt-16 mr-1 px-2 vy-sm:mr-10 fixed right-8 top-0 w-[30%] ease-in-out duration-500 rounded sm:hidden bg-[#E8E1FF] border-purple-dark border-2' : 'fixed left-[-100%]'}>

          <div>
            <ul className='justify-items-start pt-3 flex flex-col gap-4'>
              <li className='text-sm text-center vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold'>
                <Link href='/'>
                  Home
                </Link>
              </li>

              <li className='w-full text-center text-sm vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold'>
                <Link href='/howitwork'>
                  How it Work
                </Link>
              </li>
              <li className='text-sm text-center vy-sm:text-base vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold'>
                <Link
                  href='/about'
                >
                  About
                </Link>
              </li>
              <li className='text-sm text-center vy-sm:text-base  vy-sm:p-1 hover:text-purple-regular vy-sm:font-bold'>
                <Link href='/contact'>
                  Contact
                </Link>
              </li>

              <li className='p-1'>
                <Link href='/Signin'>
                  <ButtonMenu name='Signin' />
                </Link>
              </li>
              <li className='p-1'>
                <Link href='/Login'>
                  <ButtonMenu name='Login' />
                </Link>
              </li>
              <li>
                <Link href='/' className='mr-2 grid justify-items-end px-2 py-1'>
                  <IconDarkMode />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
