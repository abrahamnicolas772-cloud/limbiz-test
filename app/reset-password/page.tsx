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

  // V√rifier si l'utilisateur a un token valide (via la session)
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        setError('Lien invalide ou expir√. Veuillez refaire une demande de r√initialisation.')
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
    if (password.length < ) {
      setError('Le mot de passe doit contenir au moins  caract√®res')
      return
    }

    setLoading(true)
    setError('')
    setMessage('')

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Mot de passe modifi√ avec succ√®s ! Vous allez √™tre redirig√...')
      setTimeout(() => {
        router.push('/login')
      }, )
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-">
      <div className="bg-white/ backdrop-blur-xl rounded-xl p- w-full max-w-md border border-white/">
        <h className="text-xl font-bold text-white mb-">Nouveau mot de passe</h>
        <p className="text-white/ text-sm mb-">
          Choisissez un mot de passe s√curis√ pour votre compte.
        </p>

        {message && (
          <div className="mb- p- bg-green-/ text-green- rounded-xl text-sm flex items-center gap-">
            <FiCheckCircle /> {message}
          </div>
        )}
        {error && (
          <div className="mb- p- bg-red-/ text-red- rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-">
          <div>
            <label className="block text-white/ text-sm mb-">Nouveau mot de passe</label>
            <div className="relative">
              <FiLock className="absolute left- top-/ -translate-y-/ text-white/" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right- top-/ -translate-y-/ text-white/ hover:text-white"
              >
                {showPassword ? <FiEyeOff size={} /> : <FiEye size={} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-white/ text-sm mb-">Confirmer le mot de passe</label>
            <div className="relative">
              <FiLock className="absolute left- top-/ -translate-y-/ text-white/" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py- bg-blue- rounded-xl text-white font-semibold hover:bg-blue- transition disabled:opacity-"
          >
            {loading ? 'Changement...' : 'Modifier le mot de passe'}
          </button>
        </form>

        <div className="mt- text-center">
          <Link href="/login" className="text-white/ text-sm hover:text-white">
            Retour √† la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}