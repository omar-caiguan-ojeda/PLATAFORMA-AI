"use client"

import type { ReactNode } from "react"

interface InfiniteMarqueeProps {
  children: ReactNode
  speed?: number
  direction?: "left" | "right"
  className?: string
}

export function InfiniteMarquee({ children, speed = 40, direction = "left", className = "" }: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex gap-8"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="flex gap-8 shrink-0">{children}</div>
        <div className="flex gap-8 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
