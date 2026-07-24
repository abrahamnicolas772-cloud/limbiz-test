'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    q: 'What does LIMBIZ™ do?',
    a: 'LIMBIZ™ is a complete entrepreneur platform that helps you start, structure, fund, grow, and protect your business. We go beyond LLC filing to provide guidance on business credit, funding, tax setup, digital presence, and ongoing compliance — everything you need to build a strong business foundation.'
  },
  {
    q: 'Can LIMBIZ™ help me form a business in any state?',
    a: 'Yes! LIMBIZ™ serves entrepreneurs in all 50 U.S. states. We provide state-specific pricing and filing guidance so you get exactly what you need for your state\'s requirements.'
  },
  {
    q: 'What is included in Basic, Standard and Premium packages?',
    a: 'Our Basic package includes LLC filing, EIN registration, Operating Agreement, and a 60-minute business consultation. Standard adds Registered Agent service, Business Address, DBA filing, BOIR guidance, and Business Credit Starter Plan. Premium includes everything in Standard plus Funding Center access, Tax consultation, Credit Readiness Score, Trademark search, and Website consultation.'
  },
  {
    q: 'How long does the process take?',
    a: 'The process typically takes 2-3 business days after you\'ve provided all required documents and information. Government processing times vary by state and can take additional time.'
  },
  {
    q: 'What happens after my LLC is approved?',
    a: 'Once your LLC is approved, LIMBIZ™ continues to support you! We provide compliance reminders, access to your digital document vault, ongoing consultation options, and guidance on next steps like business credit, funding, tax setup, and growth strategies.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5" />
      </div>

      <section className="relative py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Frequently Asked Questions</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Questions? <span className="text-blue-500">Answers.</span>
            </h2>
            <p className="mt-3 text-white/40 text-sm uppercase tracking-wider font-light">
              Everything you need to know before getting started
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                  openIndex === idx
                    ? 'border-blue-500/30 bg-white/8'
                    : 'border-white/5 bg-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left gap-4"
                >
                  <span className="font-semibold text-white text-sm md:text-base leading-relaxed">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 flex-shrink-0"
                  >
                    <FiChevronDown size={22} />
                  </motion.div>
                </button>
                <AnimatePresence mode="wait">
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 pb-5 md:px-5 md:pb-6 border-t border-white/5 pt-4">
                        <p className="text-white/60 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-white/40 text-sm mb-4">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 transition"
              >
                Contact Us
              </a>
              <a
                href="#consultation"
                className="px-6 py-3 border border-white/20 hover:border-white/40 rounded-full text-white/70 hover:text-white transition"
              >
                Book a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5" />
      </div>
    </>
  )
}
