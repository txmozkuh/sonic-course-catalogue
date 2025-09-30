import Image from 'next/image'
import heroImg from '@/public/hero.svg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="w-full">
      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="text-2xl font-bold">Welcome to Sonic</div>
          <Image src={heroImg} alt="hero-img" />
          <Link href={'/learn/catalogue'}>
            <Button className="rounded-xl">Check out out Blockchain courses</Button>
          </Link>
        </div>
        <div className="bg-gradient-sonic absolute top-[15%] left-[50%] -z-50 aspect-square size-svh -translate-x-[50%] animate-[spin_15s_linear_infinite] rounded-full blur-[100px]"></div>
      </div>
    </section>
  )
}
