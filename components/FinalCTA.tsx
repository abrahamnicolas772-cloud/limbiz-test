'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = encodeURIComponent(`Hi LIMBIZ! 👋%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`)
    window.open(`https://wa.me/13212977988?text=${text}`, '_blank')
    setSubmitted(true)
    setName(''); setPhone(''); setMessage('')
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section className="relative py-24 md:py-32 overflow-hidden bg-[#060b14]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,64,175,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-[10px] font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Free Consultation
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-[1.1] mb-6">
                Ready to <span className="font-bold text-blue-400">Build</span> Your Business?
              </h2>
              <p className="text-white/35 text-base font-light leading-relaxed max-w-lg mb-8">
                Have questions? Our team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {['Fast response','Free consultation','Expert advice'].map(t => (
                  <div key={t} className="flex items-center gap-2 text-white/25 text-xs">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> {t}
                  </div>
                ))}
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group">
                Send us a Message
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-white/40 text-sm">We'll get back to you on WhatsApp shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleWhatsApp} className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">Quick WhatsApp</h4>
                        <p className="text-white/30 text-xs">We reply within minutes</p>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm" />
                    </div>
                    <div className="relative">
                      <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2"/></svg>
                      <input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm" />
                    </div>
                    <div className="relative">
                      <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8"/></svg>
                      <textarea placeholder="How can we help you?" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full pl-11 pr-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none transition text-sm resize-none" />
                    </div>
                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 active:scale-[0.98]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </>
  )
}
