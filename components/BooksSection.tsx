'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BooksSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-[#060b14]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,99,245,0.08),transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="mb-6">
          <span className="inline-block px-3 py-1 bg-[#1b63f5]/10 border border-[#1b63f5]/20 rounded-full text-[#1b63f5] text-[10px] font-bold uppercase tracking-wider">
            Books & Guides
          </span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Build Smarter with LIMBIZ® Books & Guides
        </h2>
        <p className="text-white/40 text-sm max-w-xl mx-auto mb-8">
          Practical business education in 4 languages to help you start, structure, fund, grow, and protect your business.
        </p>
        <Link href="/books" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1b63f5] hover:bg-[#1557d6] rounded-full text-white font-semibold shadow-lg shadow-[#1b63f5]/20 transition">
          Explore Books & Guides
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </section>
  )
}
