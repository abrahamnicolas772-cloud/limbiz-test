'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2 + 0.5, speedX: (Math.random() - 0.5) * 0.3, speedY: (Math.random() - 0.5) * 0.3, opacity: Math.random() * 0.4 + 0.1 })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.speedX; p.y += p.speedY
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`; ctx.fill()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('resize', resizeCanvas); cancelAnimationFrame(animationId) }
  }, [])

  return (
    <section className="relative min-h-[100svh] bg-black overflow-hidden pt-16 md:pt-20 flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-[0.06]">
          <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.2 0"/></filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      <div className="absolute inset-0 z-0 top-16 md:top-20">
        <img src="/HERO.png" alt="LIMBIZ Hero" className="w-full h-full object-contain object-[93%] md:object-[85%] opacity-30 md:opacity-100" onError={(e) => { e.currentTarget.style.display = 'none' }} loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-purple-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight text-white"
            >
              Don't Just<br/>
              Create It.<br/>
              <span className="font-bold text-blue-500 relative">
                Structure It.<span className="text-blue-400/70 text-[0.3em] font-light relative -top-[1.6em] -ml-[0.90em]">™</span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl mt-3 md:mt-4 font-light tracking-wide"
            >
              Start, structure, fund, grow, and protect your business with LIMBIZ™.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 md:gap-4 mt-4 md:mt-5 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/20 object-cover" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/20 object-cover" />
                <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/20 object-cover" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/20 object-cover" />
              </div>
              <p className="text-white/60 text-xs sm:text-sm md:text-base font-medium">
                Trusted by <span className="text-blue-400 font-bold">500+</span> entrepreneurs
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4 mt-5 md:mt-6 justify-center lg:justify-start"
            >
              <Link href="/register" className="px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 text-xs sm:text-sm md:text-base">
                Get Started →
              </Link>
              <Link href="/services" className="px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 border border-white/20 hover:border-white/40 rounded-full font-medium text-white/70 hover:text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 text-xs sm:text-sm md:text-base">
                View Services
              </Link>
              <Link href="/contact" className="px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 border border-blue-500/30 hover:border-blue-400/60 text-blue-400 hover:text-blue-300 rounded-full font-medium backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300 text-xs sm:text-sm md:text-base">
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent mt-0.5" />
      </div>
    </section>
  )
}