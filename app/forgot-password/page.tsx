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
      setMessage('Un email de r√initialisation vous a √t√ envoy√. V√rifiez votre bo√te de r√ception.')
      setEmail('')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-">
      <div className="bg-white/ backdrop-blur-xl rounded-xl p- w-full max-w-md border border-white/">
        <h className="text-xl font-bold text-white mb-">Mot de passe oubli√ ?</h>
        <p className="text-white/ text-sm mb-">
          Entrez votre email et nous vous enverrons un lien pour r√initialiser votre mot de passe.
        </p>

        {message && (
          <div className="mb- p- bg-green-/ text-green- rounded-xl text-sm">
            {message}
          </div>
        )}
        {error && (
          <div className="mb- p- bg-red-/ text-red- rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-">
          <div>
            <label className="block text-white/ text-sm mb-">Email</label>
            <div className="relative">
              <FiMail className="absolute left- top-/ -translate-y-/ text-white/" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            {loading ? 'Envoi...' : 'Envoyer le lien'}
          </button>
        </form>

        <div className="mt- text-center">
          <Link href="/login" className="text-white/ text-sm hover:text-white inline-flex items-center gap-">
            <FiArrowLeft size={} /> Retour √† la connexion
          </Link>
        </div>
      </div>
    </div>
  )
}