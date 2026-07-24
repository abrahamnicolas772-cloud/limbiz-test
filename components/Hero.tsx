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
    const particleCount = 80

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.shadowColor = 'rgba(59, 130, 246, 0.3)'
        ctx.shadowBlur = 15
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 top-20 pointer-events-none" />

      <div className="absolute inset-0 z-0 top-20 pointer-events-none">
        <svg className="w-full h-full opacity-[0.08]">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.2 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="absolute inset-0 z-0 top-20">
        <img
          src="/HERO.png"
          alt="LIMBIZ Hero Background"
          className="w-full h-full object-contain object-[93%]"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none top-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[150px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-slow animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10 h-full min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-0 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-5 pr-1 lg:max-w-2xl"
          >
            <div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-5"
              />

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white"
              >
                Don't Just
                <br />
                Create It.
                <br />
                <span className="font-bold text-blue-500">
                  Structure It.<sup className="text-blue-400/70 text-xl md:text-3xl lg:text-4xl font-light ml-1">™</sup>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/50 text-sm sm:text-base md:text-lg max-w-2xl leading-snug mt-3 font-light tracking-wide"
              >
                Start, structure, fund, grow, and protect your business with LIMBIZ™.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-center gap-4 mt-4"
              >
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                </div>
                <div>
                  <p className="text-white/80 text-sm sm:text-base font-medium">
                    Trusted by <span className="text-blue-400 font-bold">500+</span> entrepreneurs nationwide
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 sm:gap-4 mt-5"
              >
                {/* Get Started → Register */}
                <Link href="/register" className="group relative px-7 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full font-medium text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 text-sm sm:text-base overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Link>
                
                {/* View Services → /services */}
                <Link href="/services" className="px-7 py-3 sm:px-8 sm:py-3.5 border border-white/20 hover:border-white/40 rounded-full font-medium text-white/80 hover:text-white backdrop-blur-sm hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
                  View Services
                </Link>
                
                {/* Book a Consultation → /contact */}
                <Link href="/contact" className="px-7 py-3 sm:px-8 sm:py-3.5 border border-blue-500/30 hover:border-blue-400/60 text-blue-400 hover:text-blue-300 rounded-full font-medium backdrop-blur-sm hover:bg-blue-500/10 transition-all duration-300 text-sm sm:text-base">
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/15 to-transparent mt-0.5" />
      </div>
    </section>
  )
}
