import GradientBtn from '@/components/ui/gradient-btn'
import Image from 'next/image'
import React from 'react'

interface CourseCardProps {
  title: string
  description: string
  level: string
}

export default function CourseCard({ title, description, level }: CourseCardProps) {
  return (
    <div className="bg-gradient-sonic size-full rounded-2xl p-[2px] transition-all duration-300 ease-in hover:-translate-y-[10px] hover:scale-105">
      <div className="bg-card flex size-full flex-col rounded-2xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={'https://pbs.twimg.com/media/GypD_RcbMAA9VqG?format=jpg&name=large'}
            alt="cover"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex h-auto flex-1 flex-col gap-4 p-4">
          <h3 className="pointer-events-none text-xl font-semibold">{title}</h3>
          <p className="pointer-events-none flex-grow text-sm font-medium text-[#b1b1b4]">
            {description}
          </p>
          <div className="bg-glass-gradient pointer-events-none w-fit self-end px-2 py-1 shadow-inner">
            <p className="text-xs font-medium hyphens-auto">{level}</p>
          </div>
          <GradientBtn title="Start learning" className="w-full cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
