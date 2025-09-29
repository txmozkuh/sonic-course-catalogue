import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@components/layout/Header'

const geistUrbanist = Urbanist({
  variable: '--font-geist-urbanist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sonic',
  description: 'Designed by Daeva',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistUrbanist.className} dark bg-[#141416] antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
