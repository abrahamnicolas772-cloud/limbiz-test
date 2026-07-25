'use client'

import { motion } from 'framer-motion'

const steps = [
  { id: 1, label: 'Idea', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>) },
  { id: 2, label: 'Business Formation', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>) },
  { id: 3, label: 'EIN', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>) },
  { id: 4, label: 'Business Address', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>) },
  { id: 5, label: 'Compliance', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>) },
  { id: 6, label: 'Business Credit', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>) },
  { id: 7, label: 'Funding', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>) },
  { id: 8, label: 'Tax Setup', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>) },
  { id: 9, label: 'Growth', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>) },
  { id: 10, label: 'Expansion', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>) },
]

export default function Roadmap() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>

      <section className="relative py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="text-blue-400/60 text-xs uppercase tracking-[0.3em] font-light mb-3"
            >
              Your Business Journey
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight"
            >
              From <span className="font-bold text-blue-400">Idea</span> to <span className="font-bold text-blue-400">Expansion</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="mt-3 text-white/30 text-sm font-light tracking-wide"
            >
              Your complete business journey in one seamless platform
            </motion.p>
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: 40 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="h-px bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full mx-auto mt-4" 
            />
          </div>

          {/* Timeline design premium */}
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-blue-500/30 -translate-x-1/2" />

            <div className="space-y-0">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Point central */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-500/30 border-2 border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>

                  {/* Carte étape */}
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="inline-block bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-4 hover:border-blue-400/30 hover:bg-white/[0.06] transition-all duration-300 group"
                    >
                      <div className={`flex items-center gap-3 ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-white/20 text-[10px] font-mono block">0{step.id}</span>
                          <h4 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{step.label}</h4>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Point final */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-4 z-10">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      </div>
    </>
  )
}
