import Image from 'next/image'
import React from 'react'
export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="bg-gradient-sonic absolute top-[15%] left-[50%] -z-50 aspect-square size-svh -translate-x-[50%] animate-[spin_15s_linear_infinite] rounded-full blur-[100px]"></div>
        <Image src={'/public/hero.svg'} alt="hero-img" fill />
      </div>
      {children}
    </section>
  )
}
