'use client'
import { useState, createContext, SetStateAction } from 'react'

type PositionObject = {
  home: string
  how: string
  about: string
}

export const NavbarContext = createContext<{
  position: PositionObject
  setPosition: React.Dispatch<SetStateAction<PositionObject>>
}>({
  position: {
    home: 'border-b-2 border-blue-regular',
    how: '',
    about: ''
  },
  setPosition: (): void => {}
})

export function Routing ({ children }: { children: React.ReactNode }): JSX.Element {
  const [position, setPosition] = useState({
    home: 'border-b-2 border-blue-regular',
    how: '',
    about: ''
  })
  return (
    <NavbarContext.Provider value={{ position, setPosition }}>
      {children}
    </NavbarContext.Provider>
  )
}
