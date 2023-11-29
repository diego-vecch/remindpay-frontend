'use client'
import { useState, createContext, SetStateAction } from 'react'

type PositionObject = {
  home: string
  how: string
  about: string
  contact: string
}

export const NavbarContext = createContext<{
  position: PositionObject
  setPosition: React.Dispatch<SetStateAction<PositionObject>>
}>({
  position: {
    home: '',
    how: '',
    about: '',
    contact: ''
  },
  setPosition: (): void => {}
})

export function Routing ({ children }: { children: React.ReactNode }): JSX.Element {
  const [position, setPosition] = useState({
    home: '',
    how: '',
    about: '',
    contact: ''
  })
  return (
    <NavbarContext.Provider value={{ position, setPosition }}>
      {children}
    </NavbarContext.Provider>
  )
}
