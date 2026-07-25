'use client'

import { motion } from 'framer-motion'

const reasons = [
  { 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Nationwide Service', 
    desc: 'Serving entrepreneurs across all 50 U.S. states with consistent quality.' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Transparent Pricing', 
    desc: 'State-specific package structure with no hidden fees.' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Growth Strategy Beyond Formation', 
    desc: 'Credit, funding, tax, and digital setup to scale your business.' 
  },
  { 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Full Protection & Support', 
    desc: 'Trademark, copyright, compliance, and ongoing expert guidance.' 
  },
]

export default function WhyChooseUs() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <section id="about" className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060b14] via-[#0a1525] to-[#060b14]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">Why LIMBIZ</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Why Choose <span className="font-bold text-blue-300">LIMBIZ</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-white/30 text-sm max-w-2xl mx-auto">
              We go beyond LLC filing to provide a complete platform for entrepreneurs.
            </motion.p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-gradient-to-r from-blue-300/50 to-white/30 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
              <div className="space-y-4">
                {reasons.map((reason, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} whileHover={{ x: 4 }} className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base group-hover:text-blue-300 transition">{reason.title}</h3>
                      <p className="text-white/30 text-sm mt-1">{reason.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Vidéo pleine hauteur */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex items-stretch">
              <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-500">
                <iframe
                  className="w-full h-full min-h-[350px]"
                  src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1&mute=1&loop=1&playlist=jNQXAC9IVRw&controls=0&modestbranding=1&rel=0"
                  title="LIMBIZ Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </>
  )
}
