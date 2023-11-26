import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { Routing } from '@/context/NavbarContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remind Pay',
  description: "Don't forget to cancel your subscriptions in time"

}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <Routing>
        <body className={inter.className}>{children}</body>
      </Routing>
    </html>
  )
}
