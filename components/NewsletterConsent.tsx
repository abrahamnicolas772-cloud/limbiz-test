'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiUser, FiMail, FiGlobe, FiBriefcase } from 'react-icons/fi'

const businessStages = [
  { id: 'idea', label: 'Just an Idea' },
  { id: 'starting', label: 'Starting My Business' },
  { id: 'growing', label: 'Growing / Scaling' },
  { id: 'established', label: 'Established Business' },
]

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ht', label: 'Kreyòl' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
]

export default function NewsletterConsent() {
  const [formData, setFormData] = useState({ name: '', email: '', language: 'en', businessStage: '' })
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) { setError('Please enter your name'); return }
    if (!formData.email.trim() || !formData.email.includes('@')) { setError('Please enter a valid email'); return }
    if (!formData.businessStage) { setError('Please select your business stage'); return }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubscribed(true)
      setFormData({ name: '', email: '', language: 'en', businessStage: '' })
      setTimeout(() => setSubscribed(false), 6000)
    }, 1500)
  }

  return (
    <section id="newsletter" className="relative py-24 overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Join the Community</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Join the <span className="text-blue-500">LIMBIZ™ Community</span></h2>
          <p className="mt-3 text-white/50 text-sm max-w-2xl mx-auto">Get business tips, funding updates, credit strategies, tax reminders, and startup resources.</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
          {subscribed ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><FiCheckCircle className="text-green-400" size={32} /></div>
              <h3 className="text-2xl font-bold text-white">Welcome to the LIMBIZ™ Community! 🎉</h3>
              <p className="text-white/50 mt-2">Check your inbox for your welcome email with exclusive resources.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">{error}</div>}
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Full Name <span className="text-red-400">*</span></label><div className="relative"><FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} /><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition" required /></div></div>
                <div><label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Email <span className="text-red-400">*</span></label><div className="relative"><FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} /><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition" required /></div></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div><label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Preferred Language</label><div className="relative"><FiGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} /><select name="language" value={formData.language} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500/50 focus:outline-none transition appearance-none">{languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}</select></div></div>
                <div><label className="block text-white/50 text-xs uppercase tracking-wider mb-1.5">Business Stage <span className="text-red-400">*</span></label><div className="relative"><FiBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={18} /><select name="businessStage" value={formData.businessStage} onChange={handleChange} className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-500/50 focus:outline-none transition appearance-none" required><option value="">Select your stage...</option>{businessStages.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select></div></div>
              </div>
              <button type="submit" disabled={isLoading} className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/25 transition flex items-center justify-center gap-2 disabled:opacity-50">{isLoading ? 'Subscribing...' : <>Join the Community <FiSend size={18} /></>}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
