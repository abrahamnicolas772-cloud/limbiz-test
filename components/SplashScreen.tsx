'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    // Générer les particules côté client uniquement
    setParticles(
      [...Array(20)].map(() => ({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
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
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,80,180,0.2),transparent_70%)]" />
          
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: p.x, y: p.y, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 1, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]"
            />

            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <img 
                src="/LOGO1.png" 
                alt="LIMBIZ" 
                className="h-[500px] w-auto mx-auto drop-shadow-2xl max-w-none"
                style={{ clipPath: 'inset(0 0 10% 0)' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/30 text-sm mt-0 tracking-widest uppercase font-light"
              style={{ marginTop: '-40px' }}
            >
              Start • Structure • Fund • Grow • Protect
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-8 flex gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-blue-400"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
