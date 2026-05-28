'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  { q: 'What is your typical turnaround time?', a: 'Most projects launch within - weeks, depending on complexity and requirements.' },
  { q: 'Do you offer post-launch support?', a: 'Yes, we offer retainer plans and / support for all our clients.' },
  { q: 'Can you integrate with my existing tools?', a: 'Absolutely, we integrate with CRMs, analytics platforms, and custom APIs.' },
  { q: 'What makes your design process unique?', a: 'We combine data-driven UX research with futuristic aesthetics to maximize conversion.' },
  { q: 'Do you provide SEO optimization?', a: 'Yes, all our sites are built with SEO best practices and performance optimization.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none z-" />
      <div className="absolute inset- -z-">
        <div className="absolute top-/ left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
        <div className="absolute bottom-/ right-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
        <div className="absolute top-/ left-/ w- h- bg-cyan-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="text-center mb-">
          <h className="text-xl md:text-xl font-bold tracking-tight">Questions? <span className="text-blue-">Answers.</span></h>
          <p className="mt- text-white/ text-sm uppercase tracking-wider">Everything you need to know</p>
        </div>

        <div className="space-y-">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: idx  . }} className="glass-card rounded-xl overflow-hidden border border-white/ hover:border-blue-/ transition">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center p- md:p- text-left">
                <span className="font-semibold text-white text-base md:text-lg">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === idx ?  :  }} transition={{ duration: . }} className="text-blue-"><FiChevronDown size={} /></motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (<motion.div initial={{ height: , opacity:  }} animate={{ height: 'auto', opacity:  }} exit={{ height: , opacity:  }} transition={{ duration: . }} className="px- pb- md:px- md:pb- border-t border-white/"><p className="text-white/ text-sm leading-relaxed">{faq.a}</p></motion.div>)}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}