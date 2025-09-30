import React, { ReactNode } from 'react'

interface GradientBtnProps {
  title: string
  icon?: ReactNode
  shadow?: boolean
  className?: string
}

export default function GradientBtn({ title, icon, shadow, className }: GradientBtnProps) {
  return (
    <button className={`group relative inline-block text-sm ${className}`}>
      {shadow && (
        <div
          className={`bg-gradient-sonic-mirrored animate-gradient absolute inset-0 rounded-full blur-sm transition group-hover:blur group-hover:brightness-125`}
        />
      )}
      <div className="bg-gradient-sonic-mirrored animate-gradient relative z-10 overflow-hidden rounded-full p-[1px]">
        <div className="flex size-full items-center justify-center gap-1 rounded-full bg-black/85 px-3 py-1 text-base font-semibold">
          {title}
          {icon}
        </div>
        <div className="group pointer-events-none absolute inset-0 z-20 -skew-x-12 via-white/20">
          <div className="h-full w-full translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-500 group-hover:-translate-x-full"></div>
        </div>
      </div>
    </button>
  )
}
