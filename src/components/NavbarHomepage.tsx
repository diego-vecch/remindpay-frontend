'use client'
import { useState, useContext, useEffect } from 'react'
import { NavbarContext } from '@/context/NavbarContext'
import Link from 'next/link'
import ButtonMenu from './ButtonMenu'
import { IconHamburguerMenu, LogoNavbar, IconDarkMode } from './IconsSvg'

export const NavbarHomepage: React.FC = () => {
  const { position, setPosition } = useContext(NavbarContext)
  useEffect(() => {
    const params = document.location.pathname
    const LinkSelected = 'border-b-2 border-blue-regular'
    const LinkNoSelected = ''

    if (params === '/') {
      setPosition({
        home: LinkSelected,
        how: LinkNoSelected,
        about: LinkNoSelected,
        contact: LinkNoSelected
      })
    }
    if (params === '/howitwork') {
      setPosition({
        home: LinkNoSelected,
        how: LinkSelected,
        about: LinkNoSelected,
        contact: LinkNoSelected
      })
    }
    if (params === '/about') {
      setPosition({
        home: LinkNoSelected,
        how: LinkNoSelected,
        about: LinkSelected,
        contact: LinkNoSelected
      })
    }
    if (params === '/contact') {
      setPosition({
        home: LinkNoSelected,
        how: LinkNoSelected,
        about: LinkNoSelected,
        contact: LinkSelected
      })
    }
  }, [setPosition])
  const [open, setOpen] = useState(true)
  const handleNav = (): void => {
    setOpen(!open)
  }

  return (
    <nav className='sm:items-center text-end sm:flex-wrap font-primary flex justify-center  w-full max-w-[1100px] absolute top-0 m-auto z-10 right-0 left-0'>
      <div className='flex justify-center items-start flex-grow md:flex md:items-center  text-purple-dark max-w-[1450px] w-full '>
        <div className='pt-4 ml-8 mb-2 w-full'>
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

        <div
          className={`flex-auto text-sm sm:flex-grow self-start hidden sm:flex justify-center px-6 pt-7 gap-14 md:gap-6 sm:gap-4 items-center lg:text-xl ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          <Link
            href='/'
            className={`${position.home}`}
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active == 'home' ? classborder : ''
            }`} */
          >
            Home
          </Link>
          <Link
            href='/howitwork'
            className={`w-16 sm:w-24 lg:w-32 text-center ${position.how}`}
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active === 'how' ? classborder : ''
            }`} */
          >
            How it Work
          </Link>
          <Link
            href='/about'
            className={`${position.about}`}
            /* className={`lg:inline-block lg:mt-0 font-bold ${
              active === 'about' ? classborder : ''
            }`} */
          >
            About
          </Link>
          <Link
            href='/contact'
            className={`${position.contact}`}
          >
            Contact
          </Link>

        </div>
        <div
          className={`w-full flex-auto text-sm sm:flex-grow self-start hidden sm:flex justify-end px-2 pt-6 gap-10 md:gap-5 sm:gap-3 items-center lg:text-xl ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >

          <Link href='/register'>
            <ButtonMenu name='Register' />
          </Link>

          <Link href='/login'>
            <ButtonMenu name='Login' />
          </Link>

          <Link href='/'>
            <IconDarkMode />
          </Link>
        </div>
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
                <Link href='/register'>
                  <ButtonMenu name='Register' />
                </Link>
              </li>
              <li className='p-1'>
                <Link href='/login'>
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
