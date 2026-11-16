'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number; delay: number }[]>([])

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: 1 + Math.random() * 3,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 2,
      }))
    )

    const timer = setTimeout(() => setIsVisible(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* BACKGROUND — koulè anvan */}
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,80,180,0.2),transparent_70%)]" />

          {/* PARTICLES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: p.x, y: p.y }}
                animate={{
                  opacity: [0, 0.7, 0],
                  y: [p.y, p.y - 80, p.y - 160],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute bg-blue-400/40 rounded-full"
                style={{ width: p.size, height: p.size }}
              />
            ))}
          </div>

          {/* KONTNI */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Glow dèyè logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.35 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-blue-500 rounded-full blur-[120px]"
            />

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
              className="relative"
            >
              <img
                src="/LOGO1.png"
                alt="LIMBIZ"
                className="h-56 md:h-72 lg:h-80 w-auto mx-auto drop-shadow-2xl max-w-none"
                style={{ clipPath: 'inset(0 0 8% 0)' }}
              />
            </motion.div>

            {/* 3 PWEN MODÈN */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-8 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.35, 1, 0.35],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="block w-2 h-2 rounded-full bg-blue-400"
                  style={{
                    boxShadow: '0 0 12px rgba(59,130,246,0.6)',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
