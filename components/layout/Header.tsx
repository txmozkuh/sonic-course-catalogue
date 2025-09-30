import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import sonicLogo from '@/public/sonic.svg'
import GradientBtn from '@components/ui/gradient-btn'

export default function Header() {
  return (
    <header className="bg-background text-foreground fixed top-0 left-0 z-50 w-full">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link href={'/'} className="flex items-center">
          <Image src={sonicLogo} alt="sonic-logo" className="h-8 w-32" />
        </Link>
        <GradientBtn title="Sonic" shadow className="font-light" />
      </nav>
    </header>
  )
}
