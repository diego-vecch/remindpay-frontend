'use client'
import { useState, createContext, SetStateAction } from 'react'

export const NavbarContext = createContext<{
  position: {
    home: string
    how: string
  }
  setPosition: React.Dispatch<SetStateAction<{ home: string, how: string }>>
}>({
  position: {
    home: 'border-b-2 border-blue-regular',
    how: ''
  },
  setPosition: (): void => {}
})

export function Routing ({ children }: { children: React.ReactNode }): JSX.Element {
  const [position, setPosition] = useState({
    home: 'border-b-2 border-blue-regular',
    how: ''
  })
  return (
    <NavbarContext.Provider value={{ position, setPosition }}>
      {children}
    </NavbarContext.Provider>
  )
}
