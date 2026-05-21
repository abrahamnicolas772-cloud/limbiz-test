'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { FiLock, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // Vérifier si l'utilisateur a un token valide (via la session)
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        setError('Lien invalide ou expiré. Veuillez refaire une demande de réinitialisation.')
      }
    }
    checkSession()
  }, [supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      return
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères')
      return
    }

    setLoading(true)
    setError('')
    setMessage('')

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Mot de passe modifié avec succès ! Vous allez être redirigé...')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2">Nouveau mot de passe</h1>
        <p className="text-white/50 text-sm mb-6">
          Choisissez un mot de passe sécurisé pour votre compte.
        </p>

        {message && (
          <div className="mb-4 p-3 bg-green-500/20 text-green-400 rounded-xl text-sm flex items-center gap-2">
            <FiCheckCircle /> {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/60 text-sm mb-1">Nouveau mot de passe</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-white/5 border border-white/10 rounded-xl text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-white/60 text-sm mb-1">Confirmer le mot de passe</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? 'Changement...' : 'Modifier le mot de passe'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/login" className="text-white/40 text-sm hover:text-white">
            Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}