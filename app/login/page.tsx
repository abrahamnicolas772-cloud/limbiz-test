'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

      <Link href="/" className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-lg transition-all duration-300 text-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl rounded-3xl shadow-2xl z-10 overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative hidden md:flex items-center justify-center min-h-[500px]">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop" alt="Business" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            <div className="relative z-10 text-center">
              <img src="/LOGO1.png" alt="LIMBIZ" className="h-80 w-auto mx-auto" style={{ clipPath: 'inset(0 0 12% 0)' }} />
              <h2 className="text-3xl font-bold text-white" style={{ marginTop: '-30px' }}>Welcome Back</h2>
              <p className="text-white/50 text-sm mt-1">Continue building your empire</p>
            </div>
          </div>

          <div className="bg-[#060d18] p-8 md:p-10">
            <div className="md:hidden text-center mb-6">
              <img src="/LOGO1.png" alt="LIMBIZ" className="h-56 w-auto mx-auto" style={{ clipPath: 'inset(0 0 12% 0)' }} />
              <h2 className="text-xl font-bold text-white" style={{ marginTop: '-20px' }}>Welcome Back</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5">Email Address</label>
                <div className="relative">
                  <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5">Password</label>
                <div className="relative">
                  <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm" required />
                </div>
              </div>
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-xs font-medium transition">Forgot Password?</Link>
              </div>
              <button type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition">Sign in</button>
            </form>

            <p className="mt-4 text-center text-white/40 text-sm">
              Don't have an account? <Link href="/register" className="text-blue-400 hover:text-blue-300 transition font-medium">Create one here</Link>
            </p>

            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-white/[0.08]" />
              <span className="text-white/20 text-xs uppercase">OR</span>
              <div className="flex-1 h-px bg-white/[0.08]" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white/60 hover:text-white hover:bg-white/[0.06] transition text-xs font-medium flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button className="py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white/60 hover:text-white hover:bg-white/[0.06] transition text-xs font-medium flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
