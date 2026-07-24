'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-300 to-[#0f2847]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,30,60,0.5),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <Link href="/login" className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-lg transition-all duration-300 text-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Back to Login
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl rounded-3xl shadow-2xl z-10 overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative hidden md:flex items-center justify-center min-h-[450px]">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop" alt="Business" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            <div className="relative z-10 text-center">
              <img src="/LOGO1.png" alt="LIMBIZ" className="h-80 w-auto mx-auto" style={{ clipPath: 'inset(0 0 12% 0)' }} />
              <h2 className="text-3xl font-bold text-white" style={{ marginTop: '-30px' }}>Forgot Password?</h2>
              <p className="text-white/50 text-sm mt-1">We'll send you a reset link</p>
            </div>
          </div>

          <div className="bg-[#060d18] p-8 md:p-10">
            <div className="md:hidden text-center mb-6">
              <img src="/LOGO1.png" alt="LIMBIZ" className="h-56 w-auto mx-auto" style={{ clipPath: 'inset(0 0 12% 0)' }} />
              <h2 className="text-xl font-bold text-white" style={{ marginTop: '-20px' }}>Forgot Password?</h2>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Check Your Email</h3>
                <p className="text-white/40 text-sm mb-6">We've sent a password reset link to <span className="text-blue-400">{email}</span></p>
                <button onClick={() => setSent(false)} className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                  Send again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-1.5">Email Address</label>
                  <div className="relative">
                    <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm" required />
                  </div>
                </div>
                <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition">
                  Send Reset Link
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-white/40 text-sm">
              Remember your password? <Link href="/login" className="text-blue-400 hover:text-blue-300 transition font-medium">Sign in</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
