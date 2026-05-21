'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { FiMail, FiArrowLeft } from 'react-icons/fi'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Un email de réinitialisation vous a été envoyé. Vérifiez votre boîte de réception.')
      setEmail('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-bold text-white mb-2">Mot de passe oublié ?</h1>
        <p className="text-white/50 text-sm mb-6">
          Entrez votre email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>

        {message && (
          <div className="mb-4 p-3 bg-green-500/20 text-green-400 rounded-xl text-sm">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/60 text-sm mb-1">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {loading ? 'Envoi...' : 'Envoyer le lien'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/login" className="text-white/40 text-sm hover:text-white inline-flex items-center gap-1">
            <FiArrowLeft size={14} /> Retour à la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}