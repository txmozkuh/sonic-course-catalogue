import React, { ReactNode } from "react";

interface GradientBtnProps {
  title: string;
  icon?: ReactNode;
  shadow?: boolean;
  className?: string;
}

export default function GradientBtn({
  title,
  icon,
  shadow,
  className,
}: GradientBtnProps) {
  return (
    <button className={`relative inline-block group text-sm ${className}`}>
      {shadow && (
        <div
          className={`absolute inset-0 bg-gradient-sonic-mirrored animate-gradient rounded-full blur-sm group-hover:blur group-hover:brightness-125 transition`}
        />
      )}
      <div className="bg-gradient-sonic-mirrored animate-gradient z-10 p-[1px] rounded-full relative overflow-hidden">
        <div className="size-full bg-black/85 px-3 py-1 rounded-full flex justify-center items-center gap-1">
          {title}
          {icon}
        </div>
        <div className="-skew-x-12 group pointer-events-none via-white/20 absolute inset-0 z-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full transition duration-500 group-hover:-translate-x-full"></div>
        </div>
      </div>
    </button>
  );
}
