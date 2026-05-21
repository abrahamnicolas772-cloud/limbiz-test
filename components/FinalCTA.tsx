'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle } from 'react-icons/fi'

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) { setError('Please fill in all fields'); return }
    if (!formData.email.includes('@')) { setError('Invalid email'); return }
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Ready To <span className="text-blue-500">Scale</span> Your Business?</h2>
          <p className="mt-4 text-white/60 text-lg">Let's build the future together.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="glass-premium p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6"><input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" required /><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email address" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" required /></div>
            <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} placeholder="How can we help?" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" required />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <div className="flex justify-center"><button type="submit" className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg flex items-center gap-2 group">Submit <FiSend className="group-hover:translate-x-1 transition" /></button></div>
            {submitted && <p className="text-center text-green-400 text-sm mt-4">✓ Thank you! We'll get back to you soon.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}