'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Forcer l'affichage pour test
    const consent = localStorage.getItem('cookie-consent')
    console.log('Cookie consent:', consent)
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
          className="fixed bottom-4 left-4 right-4 z-[9999]"
        >
          <div className="max-w-md mx-auto bg-[#0d1425] border border-white/[0.08] rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🍪</span>
              <div>
                <h4 className="text-white font-semibold text-sm">Cookie Preferences</h4>
                <p className="text-white/40 text-xs">We use cookies to improve your experience.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={acceptEssential} className="flex-1 py-2.5 border border-white/10 rounded-xl text-white/50 text-xs hover:text-white transition">
                Essential Only
              </button>
              <button onClick={acceptAll} className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-xs font-semibold transition">
                Accept All
              </button>
            </div>
            <div className="flex justify-center gap-3 mt-3">
              <Link href="/privacy" className="text-white/20 text-[10px] hover:text-white/40 transition">Privacy</Link>
              <Link href="/cookies" className="text-white/20 text-[10px] hover:text-white/40 transition">Cookies</Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
