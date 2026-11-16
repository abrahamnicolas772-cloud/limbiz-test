'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    q: 'What does LIMBIZ do?',
    a: 'LIMBIZ is a complete entrepreneur platform that helps you start, structure, fund, grow, and protect your business. We go beyond LLC filing to provide guidance on business credit, funding, tax setup, digital presence, and ongoing compliance - everything you need to build a strong business foundation.'
  },
  {
    q: 'Can LIMBIZ help me form a business in any state?',
    a: 'Yes! LIMBIZ serves entrepreneurs in all 50 U.S. states. We provide state-specific pricing and filing guidance so you get exactly what you need for your state\'s requirements.'
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
    a: 'Once your LLC is approved, LIMBIZ continues to support you! We provide compliance reminders, access to your digital document vault, ongoing consultation options, and guidance on next steps like business credit, funding, tax setup, and growth strategies.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <section className="relative py-24 overflow-hidden bg-black">
        {/* 1. FOTO BACKGROUND (menm ak Roadmap) */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Business skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* 2. OVERLAY FONSE */}
        <div className="absolute inset-0 bg-black/60" />

        {/* 3. 8 KOUCH BACKGROUND (menm ak Roadmap) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.08] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, rgba(59,130,246,0.5) 0px, rgba(59,130,246,0.5) 1px, transparent 1px, transparent 20px)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '180px 180px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Frequently Asked Questions</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
              Questions? <span className="text-blue-400">Answers.</span>
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
                className={`rounded-xl overflow-hidden border transition-all duration-300 backdrop-blur-xl ${
                  openIndex === idx
                    ? 'border-blue-400/40 bg-blue-950/50'
                    : 'border-blue-400/20 bg-blue-950/40 hover:border-blue-400/30'
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
                      <div className="px-4 pb-5 md:px-5 md:pb-6 border-t border-white/10 pt-4">
                        <p className="text-white/70 text-sm leading-relaxed">
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
                className="px-6 py-3 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 rounded-full text-white font-semibold transition"
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
      </div>
    </>
  )
}
