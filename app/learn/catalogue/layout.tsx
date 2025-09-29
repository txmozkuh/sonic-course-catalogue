import Image from 'next/image'
import React from 'react'
import heroImg from '@/public/hero.svg'
export default function CatalogueLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="text-2xl font-bold">Learning. Adapting. Achieving</div>
          <Image src={heroImg} alt="hero-img" />
        </div>
        <div className="bg-gradient-sonic absolute top-[15%] left-[50%] -z-50 aspect-square size-svh -translate-x-[50%] animate-[spin_15s_linear_infinite] rounded-full blur-[100px]"></div>
      </div>
      {children}
    </section>
  )
}
