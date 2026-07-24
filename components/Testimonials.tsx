'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { 
    id: 0, 
    name: 'Sarah Chen', 
    role: 'CEO, Lumina AI',
    problem: 'Legal paperwork was overwhelming. I didn\'t know where to start.',
    solution: 'LIMBIZ handled my LLC formation, EIN, and business address.',
    result: 'My business was fully structured in 3 weeks. Now I focus on growth.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    verified: true
  },
  { 
    id: 1, 
    name: 'Marcus Rodriguez', 
    role: 'Founder, Finova',
    problem: 'I had a great idea but no funding or business credit.',
    solution: 'LIMBIZ connected me with funding resources and built my credit profile.',
    result: 'I secured a $50,000 line of credit in 60 days.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    verified: true
  },
  { 
    id: 2, 
    name: 'Elena Weiss', 
    role: 'Owner, Stratosphere Consulting',
    problem: 'My business had no online presence. I was losing clients.',
    solution: 'LIMBIZ built my website and set up my Google Business Profile.',
    result: 'Website traffic up 200%. I\'m booking 3x more consultations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    verified: true
  },
  { 
    id: 3, 
    name: 'David Thompson', 
    role: 'Owner, Thompson Logistics',
    problem: 'I was operating as a sole proprietor with no liability protection.',
    solution: 'LIMBIZ formed my LLC and registered my EIN and business address.',
    result: 'Full liability protection, tax benefits, and a professional image.',
    rating: 4.9,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    verified: true
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => { 
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }
  
  const prev = () => { 
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* ===== FOND BLEU INTENSE (comme TrustedStats) ===== */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.05)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full shadow-[0_0_35px_rgba(59,130,246,0.15)] animate-pulse animation-delay-1000" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300/25 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-pulse animation-delay-2000" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">
              Client Success Stories
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              What Our Clients <span className="font-bold text-blue-300">Achieve</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-white/30 text-sm font-light tracking-wide max-w-2xl mx-auto">
              Real results from real entrepreneurs
            </motion.p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-gradient-to-r from-blue-300/50 to-white/30 rounded-full mx-auto mt-4" />
          </div>

          <div className="relative flex items-center justify-center">
            <button onClick={prev} className="absolute left-0 md:-left-4 z-20 p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div className="w-full max-w-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.96 }} transition={{ duration: 0.5 }} className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-500">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(Math.floor(testimonials[current].rating))].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <div className="space-y-4 text-center max-w-2xl mx-auto">
                    <p className="text-white/50 text-sm md:text-base font-light italic leading-relaxed">"{testimonials[current].problem}"</p>
                    <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">{testimonials[current].solution}</p>
                    <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed">"{testimonials[current].result}"</p>
                  </div>
                  <div className="flex flex-col items-center mt-6">
                    <div className="relative">
                      <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-400/30 shadow-lg" />
                      <div className="absolute -inset-1 rounded-full bg-blue-500/10 blur-md -z-10" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                      <h4 className="text-white font-medium text-base md:text-lg">{testimonials[current].name}</h4>
                      {testimonials[current].verified && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/40 font-light">
                          <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/></svg>
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-white/30 text-xs md:text-sm font-light">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button onClick={next} className="absolute right-0 md:-right-4 z-20 p-2 md:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300">
              <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => { setIsAutoPlaying(false); setCurrent(idx); setTimeout(() => setIsAutoPlaying(true), 3000) }} className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-gradient-to-r from-blue-400 to-blue-300' : 'w-1.5 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
          
          <div className="text-center mt-4">
            <a href="https://www.trustpilot.com/review/limbiz.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/20 hover:text-white/40 text-xs transition group">
              <span className="text-yellow-400/60 text-sm">★★★★★</span>
              <span className="font-light tracking-wide">Rated 4.9/5 on</span>
              <span className="text-blue-300 font-light">Trustpilot</span>
              <span className="group-hover:translate-x-0.5 transition">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </>
  )
}
