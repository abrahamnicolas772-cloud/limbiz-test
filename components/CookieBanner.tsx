'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X, Shield } from '@/lib/icons'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9999]"
        >
          <div className="relative">
            {/* Glow dèyè */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-blue-500/20 rounded-2xl blur-xl opacity-60" />

            {/* Glass card */}
            <div className="relative bg-blue-950/70 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-5 shadow-2xl overflow-hidden">
              {/* Top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

              {/* Bouton fèmen */}
              <button
                onClick={acceptEssential}
                className="absolute top-3 right-3 text-white/30 hover:text-white/60 transition p-1"
                aria-label="Close"
              >
                <X className="w-4 h-4" strokeWidth={2} />
              </button>

              {/* Header */}
              <div className="flex items-start gap-3 mb-4 pr-6">
                <div className="relative w-10 h-10 shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-40 blur-lg" />
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1.5px]">
                    <div className="w-full h-full rounded-[10px] bg-blue-950/80 backdrop-blur-xl flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm mb-1">Cookie Preferences</h4>
                  <p className="text-white/50 text-xs leading-relaxed">
                    We use cookies to improve your experience and analyze site traffic.
                  </p>
                </div>
              </div>

              {/* Bouton yo */}
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <button
                  onClick={acceptEssential}
                  className="flex-1 py-2.5 bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.06] rounded-xl text-white/70 hover:text-white text-xs font-medium transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" strokeWidth={2} />
                  Essential Only
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 py-2.5 bg-blue-500/20 backdrop-blur-xl border border-blue-400/40 hover:border-blue-300/60 hover:bg-blue-500/30 rounded-xl text-white text-xs font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Accept All
                </button>
              </div>

              {/* Links */}
              <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5">
                <Link href="/privacy" className="text-white/40 hover:text-blue-400 text-[10px] uppercase tracking-wider transition">
                  Privacy
                </Link>
                <span className="text-white/10">·</span>
                <Link href="/cookies" className="text-white/40 hover:text-blue-400 text-[10px] uppercase tracking-wider transition">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
