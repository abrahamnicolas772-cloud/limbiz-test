'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { SiGoogle } from 'react-icons/si'

const testimonials = [
  { id: 1, name: 'Sarah Chen', role: 'CEO, Lumina AI', text: 'Limbiz delivered a breathtaking digital experience. Our conversion rates increased by 47% within three months. The futuristic design perfectly captures our brand essence.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop', verified: true },
  { id: 2, name: 'Marcus Rodriguez', role: 'Founder, Finova', text: 'Absolutely premium craftsmanship. Every detail, from the glassmorphism to the micro-interactions, screams luxury. Our investors were blown away by the new platform.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop', verified: true },
  { id: 3, name: 'Elena Weiss', role: 'CMO, Stratosphere', text: 'Working with Limbiz elevated our brand to a whole new level. The testimonial carousel itself is a work of art. Highly recommended for any high-end SaaS.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop', verified: true }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev + 1) % testimonials.length); setTimeout(() => setIsAutoPlaying(true), 3000) }
  const prev = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length); setTimeout(() => setIsAutoPlaying(true), 3000) }

  return (
    <section className="relative py-28 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[90px] -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Client <span className="text-blue-400">Love</span></h2>
          <p className="mt-3 text-white/40 text-sm uppercase tracking-wider font-light">What our partners say</p>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-0 md:-left-16 z-20 p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white transition"><FiChevronLeft size={22} /></button>
          <div className="w-full max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.95 }} transition={{ duration: 0.5 }} className="glass-premium p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="flex justify-center gap-1 mb-6">{[...Array(testimonials[current].rating)].map((_, i) => <FiStar key={i} className="fill-yellow-400 text-yellow-400 w-5 h-5" />)}</div>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto italic font-light">“{testimonials[current].text}”</p>
                <div className="flex flex-col items-center mt-8">
                  <div className="relative"><img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 shadow-lg" /><div className="absolute -inset-1 rounded-full bg-blue-400/20 blur-md -z-10" /></div>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-4"><h4 className="text-white font-semibold text-lg">{testimonials[current].name}</h4>{testimonials[current].verified && (<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] text-white/80 font-medium"><SiGoogle className="w-3 h-3 text-blue-400" /><span>Verified by Google</span></div>)}</div>
                  <p className="text-white/40 text-sm font-light">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={next} className="absolute right-0 md:-right-16 z-20 p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 hover:text-white transition"><FiChevronRight size={22} /></button>
        </div>

        <div className="flex justify-center gap-3 mt-10">{testimonials.map((_, idx) => (<button key={idx} onClick={() => { setIsAutoPlaying(false); setCurrent(idx); setTimeout(() => setIsAutoPlaying(true), 3000) }} className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400 shadow-neon' : 'w-1.5 bg-white/30'}`} />))}</div>
        <div className="text-center mt-10"><a href="https://fr.trustpilot.com/review/limbiz.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition group"><span className="text-yellow-400 text-base">★★★★★</span><span>Rated 4.9/5 on</span><span className="text-blue-400 font-semibold">Trustpilot</span><span className="group-hover:translate-x-0.5 transition">→</span></a></div>
      </div>
    </section>
  )
}