'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'

function LoginContent() {
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      // Login reyisi - redirije
      window.location.href = redirect
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-blue-300 to-[#0f2847]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(10,30,60,0.5),transparent_60%)]" />
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

            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs font-medium mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-xs font-medium transition">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-xl text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <p className="mt-4 text-center text-white/40 text-sm">
              Don't have an account? <Link href="/register" className="text-blue-400 hover:text-blue-300 transition font-medium">Create one here</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060b14] flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /></div>}>
      <LoginContent />
    </Suspense>
  )
}
