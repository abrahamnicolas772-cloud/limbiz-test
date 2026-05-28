'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight, FiHome } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message === 'Invalid login credentials' ? 'Email ou mot de passe incorrect' : error.message)
    } else {
      router.push('/')
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
            <h className="text-xl font-bold text-white">Bienvenue</h>
            <p className="text-white/ text-sm mt-">Connectez-vous à votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-">
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
              {loading ? 'Connexion en cours...' : 'Se connecter'}
              {!loading && <FiArrowRight size={} />}
            </button>
          </form>

          <div className="flex justify-between items-center mt- text-sm">
            <Link href="/forgot-password" className="text-blue- hover:underline">
              Mot de passe oubli� ?
            </Link>
            <Link href="/register" className="text-white/ hover:text-white transition">
              Cr�er un compte 
            </Link>
          </div>

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
            Continuer avec Google
          </button>

          {/ Bouton Retour à l'accueil /}
          <div className="mt- text-center">
            <Link
              href="/"
              className="inline-flex items-center gap- text-white/ text-sm hover:text-white transition"
            >
              <FiHome size={} /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}