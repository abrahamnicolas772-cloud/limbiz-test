'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceCategories } from '@/lib/services-data'

export default function Services() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <section id="services" className="relative py-16 md:py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-400/60 text-xs uppercase tracking-[0.3em] font-light mb-3">
              Our Services
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Everything You Need to <span className="font-bold text-blue-400">Succeed</span>
            </motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-white/90 group-hover:text-blue-400 transition mb-4">
                  {category.title}
                </h3>
                <p className="text-white/30 text-sm mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.services.map((service, sIdx) => (
                    <span key={sIdx} className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs border border-white/5">
                      {service.name}
                    </span>
                  ))}
                </div>
                <Link href="/services" className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>
    </>
  )
}
