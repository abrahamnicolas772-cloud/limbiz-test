'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  { q: 'What is your typical turnaround time?', a: 'Most projects launch within 4-6 weeks, depending on complexity and requirements.' },
  { q: 'Do you offer post-launch support?', a: 'Yes, we offer retainer plans and 24/7 support for all our clients.' },
  { q: 'Can you integrate with my existing tools?', a: 'Absolutely, we integrate with CRMs, analytics platforms, and custom APIs.' },
  { q: 'What makes your design process unique?', a: 'We combine data-driven UX research with futuristic aesthetics to maximize conversion.' },
  { q: 'Do you provide SEO optimization?', a: 'Yes, all our sites are built with SEO best practices and performance optimization.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[110px] animate-pulse-slow animation-delay-1500" />
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow animation-delay-3000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Questions? <span className="text-blue-500">Answers.</span></h2>
          <p className="mt-3 text-white/50 text-sm uppercase tracking-wider">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center p-5 md:p-6 text-left">
                <span className="font-semibold text-white text-base md:text-lg">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-blue-400"><FiChevronDown size={20} /></motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="px-5 pb-5 md:px-6 md:pb-6 border-t border-white/10"><p className="text-white/60 text-sm leading-relaxed">{faq.a}</p></motion.div>)}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}