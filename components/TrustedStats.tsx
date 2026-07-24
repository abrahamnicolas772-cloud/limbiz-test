'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: '4.9/5',
    label: 'Average Rating',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: 'text-yellow-300',
    sublabel: 'Based on 500+ reviews'
  },
  {
    value: '10,000+',
    label: 'Businesses Served',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: 'text-blue-200',
    sublabel: 'Across all 50 states'
  },
  {
    value: '50',
    label: 'States Covered',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: 'text-emerald-300',
    sublabel: 'Nationwide presence'
  },
  {
    value: '2-3 Days',
    label: 'Avg. Processing',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: 'text-purple-300',
    sublabel: 'Fast & reliable'
  },
]

export default function TrustedStats() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <section className="relative py-12 md:py-16 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="text-center md:text-left md:flex-1">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-1">
                Trusted by entrepreneurs
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 tracking-tight">
                LIMBIZ <span className="font-bold text-blue-300">by the numbers</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-1 text-white/30 text-xs md:text-sm font-light tracking-wide max-w-md">
                Helping entrepreneurs across America build and grow.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:flex-1">
              {stats.map((stat, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06, duration: 0.4 }} whileHover={{ y: -3 }} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-blue-400/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${stat.color} mb-2 flex justify-center transition-transform duration-300 group-hover:scale-110`}>
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="mt-0.5 text-white/60 text-[10px] md:text-xs font-medium tracking-wide">{stat.label}</div>
                  <div className="mt-0.5 text-white/20 text-[8px] font-light tracking-wider">{stat.sublabel}</div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 rounded-full transition-all duration-500 group-hover:w-10" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-6">
            <p className="text-white/10 text-[10px] font-light tracking-[0.3em] uppercase">⚡ Real data • Real impact • Real entrepreneurs</p>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </>
  )
}
