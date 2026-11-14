'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  y?: number
  duration?: number
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  y = 40, 
  duration = 0.8 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: y },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      anim.kill()
    }
  }, [delay, y, duration])

  return <div ref={ref}>{children}</div>
}
