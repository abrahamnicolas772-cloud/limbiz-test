'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { SiGoogle } from 'react-icons/si'

const testimonials = [
  { id: , name: 'Sarah Chen', role: 'CEO, Lumina AI', text: 'Limbiz delivered a breathtaking digital experience. Our conversion rates increased by % within three months. The futuristic design perfectly captures our brand essence.', rating: , avatar: 'https://images.unsplash.com/photo--becb?w=&h=&fit=crop', verified: true },
  { id: , name: 'Marcus Rodriguez', role: 'Founder, Finova', text: 'Absolutely premium craftsmanship. Every detail, from the glassmorphism to the micro-interactions, screams luxury. Our investors were blown away by the new platform.', rating: , avatar: 'https://images.unsplash.com/photo--addfd?w=&h=&fit=crop', verified: true },
  { id: , name: 'Elena Weiss', role: 'CMO, Stratosphere', text: 'Working with Limbiz elevated our brand to a whole new level. The testimonial carousel itself is a work of art. Highly recommended for any high-end SaaS.', rating: , avatar: 'https://images.unsplash.com/photo--bdaa?w=&h=&fit=crop', verified: true }
]

export default function Testimonials() {
  const [current, setCurrent] = useState()
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => setCurrent((prev) => (prev + ) % testimonials.length), )
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev + ) % testimonials.length); setTimeout(() => setIsAutoPlaying(true), ) }
  const prev = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev -  + testimonials.length) % testimonials.length); setTimeout(() => setIsAutoPlaying(true), ) }

  return (
    <section className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] -z-" />
      <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] -z-" />

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="text-center mb-">
          <h className="text-xl md:text-xl font-bold tracking-tight text-white">Client <span className="text-blue-">Love</span></h>
          <p className="mt- text-white/ text-sm uppercase tracking-wider font-light">What our partners say</p>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left- md:-left- z- p- rounded-full bg-white/ backdrop-blur-xl border border-white/ text-white/ hover:text-white transition"><FiChevronLeft size={} /></button>
          <div className="w-full max-w-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: , y: , scale: . }} animate={{ opacity: , y: , scale:  }} exit={{ opacity: , y: -, scale: . }} transition={{ duration: . }} className="glass-premium p- md:p- rounded-xl border border-white/ shadow-xl backdrop-blur-xl">
                <div className="flex justify-center gap- mb-">{[...Array(testimonials[current].rating)].map((_, i) => <FiStar key={i} className="fill-yellow- text-yellow- w- h-" />)}</div>
                <p className="text-white/ text-lg md:text-xl leading-relaxed text-center max-w-xl mx-auto italic font-light">“{testimonials[current].text}”</p>
                <div className="flex flex-col items-center mt-">
                  <div className="relative"><img src={testimonials[current].avatar} alt={testimonials[current].name} className="w- h- rounded-full object-cover border- border-blue-/ shadow-lg" /><div className="absolute -inset- rounded-full bg-blue-/ blur-md -z-" /></div>
                  <div className="flex flex-wrap items-center justify-center gap- mt-"><h className="text-white font-semibold text-lg">{testimonials[current].name}</h>{testimonials[current].verified && (<div className="flex items-center gap- px- py-. rounded-full bg-white/ border border-white/ text-[px] text-white/ font-medium"><SiGoogle className="w- h- text-blue-" /><span>Verified by Google</span></div>)}</div>
                  <p className="text-white/ text-sm font-light">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={next} className="absolute right- md:-right- z- p- rounded-full bg-white/ backdrop-blur-xl border border-white/ text-white/ hover:text-white transition"><FiChevronRight size={} /></button>
        </div>

        <div className="flex justify-center gap- mt-">{testimonials.map((_, idx) => (<button key={idx} onClick={() => { setIsAutoPlaying(false); setCurrent(idx); setTimeout(() => setIsAutoPlaying(true), ) }} className={`h-. rounded-full transition-all duration- ${idx === current ? 'w- bg-gradient-to-r from-blue- to-purple- shadow-neon' : 'w-. bg-white/'}`} />))}</div>
        <div className="text-center mt-"><a href="https://fr.trustpilot.com/review/limbiz.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap- text-white/ hover:text-white text-sm transition group"><span className="text-yellow- text-base"></span><span>Rated ./ on</span><span className="text-blue- font-semibold">Trustpilot</span><span className="group-hover:translate-x-. transition"></span></a></div>
      </div>
    </section>
  )
}