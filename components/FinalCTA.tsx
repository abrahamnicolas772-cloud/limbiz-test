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
    setTimeout(() => setSubmitted(false), )
  }

  return (
    <section className="py- relative overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute inset- bg-gradient-to-r from-blue-/ to-purple-/ blur-xl -z-" />

      <div className="max-w-xl mx-auto px- sm:px- lg:px-">
        <motion.div initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} transition={{ duration: . }} viewport={{ once: true }} className="text-center mb-">
          <h className="text-xl md:text-xl lg:text-xl font-bold">Ready To <span className="text-blue-">Scale</span> Your Business?</h>
          <p className="mt- text-white/ text-lg">Let's build the future together.</p>
        </motion.div>

        <motion.div initial={{ opacity: , scale: . }} whileInView={{ opacity: , scale:  }} transition={{ duration: ., delay: . }} viewport={{ once: true }} className="glass-premium p- md:p- rounded-xl border border-white/ shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-">
            <div className="grid md:grid-cols- gap-"><input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full name" className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required /><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email address" className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required /></div>
            <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={} placeholder="How can we help?" className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required />
            {error && <p className="text-red- text-sm text-center">{error}</p>}
            <div className="flex justify-center"><button type="submit" className="px- py-. bg-gradient-to-r from-blue- to-purple- rounded-full font-semibold text-white shadow-lg flex items-center gap- group">Submit <FiSend className="group-hover:translate-x- transition" /></button></div>
            {submitted && <p className="text-center text-green- text-sm mt-">✓ Thank you! We'll get back to you soon.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}