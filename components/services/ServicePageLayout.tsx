'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  whoNeedsIt: string[]
  whatLimbiDoes: string[]
  pricing: string
  timeline: string
  faqs: { question: string; answer: string }[]
}

export function ServicePageLayout({ title, subtitle, description, whoNeedsIt, whatLimbiDoes, pricing, timeline, faqs }: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse animation-delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">{title}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{subtitle}</h1>
            <p className="text-white/40 mt-4 max-w-3xl mx-auto text-sm leading-relaxed">{description}</p>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-300">{pricing}</span>
                <p className="text-white/30 text-xs mt-1">Starting at</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-300">{timeline}</span>
                <p className="text-white/30 text-xs mt-1">Timeline</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                Who Needs This?
              </h2>
              <ul className="space-y-2.5">
                {whoNeedsIt.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                    <svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                What LIMBIZ Does
              </h2>
              <ul className="space-y-2.5">
                {whatLimbiDoes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/50 text-sm">
                    <svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {faqs.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
                    <h3 className="text-white font-medium text-sm mb-1.5">{faq.question}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="text-center">
            <Link href="/checkout?plan=basic&state=florida" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
              Get Started Now
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <p className="text-white/20 text-xs mt-4">Not sure? <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline transition">Book a free consultation</Link></p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
