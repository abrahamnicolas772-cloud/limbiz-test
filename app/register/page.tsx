'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { FiMail, FiLock, FiUser, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function RegisterPage() {
  const router = useRouter()
  const supabase = createClient()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/login?registered=true')
    }
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) setError(error.message)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p- relative overflow-hidden">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute inset- -z-">
        <div className="absolute top-/ left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
        <div className="absolute bottom-/ right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
      </div>

      <motion.div
        initial={{ opacity: , y:  }}
        animate={{ opacity: , y:  }}
        transition={{ duration: . }}
        className="w-full max-w-md"
      >
        <div className="glass-premium p- rounded-xl border border-white/ shadow-xl backdrop-blur-xl">
          <div className="text-center mb-">
            <img src="/LOGO.png" alt="Limbiz" className="h- mx-auto mb-" />
            <h className="text-xl font-bold text-white">Inscription</h>
            <p className="text-white/ text-sm mt-">Cr�ez votre compte gratuitement</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-">
            <div>
              <label className="block text-white/ text-sm mb-.">Nom complet</label>
              <div className="relative">
                <FiUser className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:border-blue-/ focus:outline-none transition"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white/ text-sm mb-.">Email</label>
              <div className="relative">
                <FiMail className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:border-blue-/ focus:outline-none transition"
                  placeholder="vous@exemple.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-white/ text-sm mb-.">Mot de passe</label>
              <div className="relative">
                <FiLock className="absolute left- top-/ -translate-y-/ text-white/" size={} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:border-blue-/ focus:outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right- top-/ -translate-y-/ text-white/ hover:text-white transition"
                >
                  {showPassword ? <FiEyeOff size={} /> : <FiEye size={} />}
                </button>
              </div>
            </div>
            {error && <p className="text-red- text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py- bg-gradient-to-r from-blue- to-purple- rounded-xl text-white font-semibold flex items-center justify-center gap- hover:scale- transition disabled:opacity-"
            >
              {loading ? 'Inscription...' : 'Cr�er mon compte'}
              {!loading && <FiArrowRight size={} />}
            </button>
          </form>

          <div className="relative my-">
            <div className="absolute inset- flex items-center"><div className="w-full border-t border-white/" /></div>
            <div className="relative flex justify-center text-xs"><span className="px- bg-transparent text-white/">OU</span></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-. border border-white/ rounded-xl text-white font-medium flex items-center justify-center gap- hover:bg-white/ transition"
          >
            <svg className="w- h-" viewBox="   ">
              <path fill="currentColor" d="M. .c-.-.-.-.-.Hv.h.c-. .-. .-. .v.h.c.-. .-. .-.z" />
              <path fill="currentColor" d="M c.  .-. .-.l-.-.c-..-. .-. .-. -.-.-.-.H.v.C. . .   z" />
              <path fill="currentColor" d="M. .c-.-.-.-.-.-.s.-..-.V.H.C. .  .  s. . . .l.-..-.z" />
              <path fill="currentColor" d="M .c.  .. . .l.-.C. . .    .  . . . .l. .c.-. .-. .-.z" />
            </svg>
            S'inscrire avec Google
          </button>

          <p className="text-center text-white/ text-sm mt-">
            D�jà un compte ?{' '}
            <Link href="/login" className="text-blue- hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}