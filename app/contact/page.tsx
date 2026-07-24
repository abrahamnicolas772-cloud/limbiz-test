'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactItems = [
    { 
      icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>), 
      title: 'Call Us', 
      value: '(888) 546-2497', 
      subvalue: 'For general inquiries',
      link: 'tel:+18885462497' 
    },
    { 
      icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>), 
      title: 'WhatsApp', 
      value: '(321) 297-7988', 
      subvalue: 'Quick chat support',
      link: 'https://wa.me/13212977988' 
    },
    { 
      icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>), 
      title: 'Email', 
      value: 'hello@golimbiz.com', 
      subvalue: 'We reply within 24h',
      link: 'mailto:hello@golimbiz.com' 
    },
    { 
      icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>), 
      title: 'Location', 
      value: 'Serving All 50 U.S. States', 
      subvalue: 'Remote — Nationwide',
    },
    { 
      icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>), 
      title: 'Hours', 
      value: 'Mon-Fri: 9 AM - 6 PM EST', 
      subvalue: 'Weekend: Limited support',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact <span className="text-blue-300">Us</span></h1>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">Have questions? We're here to help.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
              <div className="space-y-3">
                {contactItems.map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + idx * 0.05 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition group">
                    <div className="flex items-center gap-3">
                      <div className="text-blue-300 group-hover:scale-110 transition">{item.icon}</div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} target={item.title === 'WhatsApp' ? '_blank' : undefined} rel={item.title === 'WhatsApp' ? 'noopener noreferrer' : undefined} className="text-white hover:text-blue-300 transition text-sm font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/80 text-sm">{item.value}</p>
                        )}
                        <p className="text-white/25 text-[10px]">{item.subvalue}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-white mb-4">Send us a Message</h2>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-white/50 mt-2">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><label className="block text-white/40 text-xs uppercase tracking-wider mb-1.5">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-400/50 focus:outline-none transition" required /></div>
                      <div><label className="block text-white/40 text-xs uppercase tracking-wider mb-1.5">Email *</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-400/50 focus:outline-none transition" required /></div>
                    </div>
                    <div><label className="block text-white/40 text-xs uppercase tracking-wider mb-1.5">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-400/50 focus:outline-none transition" /></div>
                    <div><label className="block text-white/40 text-xs uppercase tracking-wider mb-1.5">Service Interested In</label><select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-blue-400/50 focus:outline-none transition"><option value="">Select a service...</option><option value="formation">Business Formation</option><option value="credit">Credit Hub</option><option value="funding">Funding Center</option><option value="tax">Tax Filings</option><option value="trademark">Trademark</option><option value="website">Website Development</option><option value="consultation">Consultation</option><option value="other">Other</option></select></div>
                    <div><label className="block text-white/40 text-xs uppercase tracking-wider mb-1.5">Message *</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us how we can help..." className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-blue-400/50 focus:outline-none transition" required /></div>
                    <button type="submit" className="w-full py-3 bg-blue-600/80 hover:bg-blue-500 rounded-xl text-white font-semibold transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                      Send Message 
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
