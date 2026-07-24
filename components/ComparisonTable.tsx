'use client'

import { motion } from 'framer-motion'

const rows = [
  { feature: 'Personal consultation', limbi: true, diy: false, other: 'maybe' },
  { feature: 'State-specific pricing', limbi: true, diy: 'maybe', other: 'maybe' },
  { feature: 'Business credit guidance', limbi: true, diy: false, other: false },
  { feature: 'Funding readiness', limbi: true, diy: false, other: 'maybe' },
  { feature: 'Tax setup support', limbi: true, diy: false, other: 'maybe' },
  { feature: 'Multilingual support', limbi: true, diy: false, other: 'maybe' },
  { feature: 'Long-term business ecosystem', limbi: true, diy: false, other: false },
]

const StatusIcon = ({ status }: { status: boolean | string }) => {
  if (status === true) return (
    <span className="inline-flex items-center gap-1.5 text-emerald-400">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span className="font-semibold text-sm">Yes</span>
    </span>
  )
  if (status === false) return (
    <span className="inline-flex items-center gap-1.5 text-red-400/60">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      <span className="text-sm">No</span>
    </span>
  )
  return (
    <span className="inline-flex items-center gap-1.5 text-amber-400/80">
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
      <span className="text-sm">Limited</span>
    </span>
  )
}

export default function ComparisonTable() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section className="relative py-20 md:py-24 overflow-hidden bg-[#0a0f1a]">
        {/* Fond subtil */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-white/30 text-xs uppercase tracking-[0.3em] font-light mb-3">Why LIMBIZ</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              See How <span className="font-bold text-blue-400">LIMBIZ</span> Compares
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-white/25 text-sm font-light tracking-wide max-w-xl mx-auto">
              More than just filing — we're your growth partner
            </motion.p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-4" />
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-[#0d1220]/80 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/[0.02]">
                    <th className="text-left py-5 px-6 text-white/30 font-medium uppercase tracking-wider text-[11px] w-[35%]">Feature</th>
                    <th className="text-center py-5 px-4 w-[25%]">
                      <div className="flex flex-col items-center gap-1">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 mb-1">
                          <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </span>
                        <span className="text-blue-400 font-bold text-sm tracking-wide">LIMBIZ™</span>
                      </div>
                    </th>
                    <th className="text-center py-5 px-4 w-[20%]">
                      <span className="text-white/25 font-medium uppercase tracking-wider text-[11px]">DIY</span>
                    </th>
                    <th className="text-center py-5 px-4 w-[20%]">
                      <span className="text-white/25 font-medium uppercase tracking-wider text-[11px]">Others</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      className="group border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors duration-300"
                    >
                      <td className="py-4 px-6 text-white/70 font-medium text-sm">{row.feature}</td>
                      <td className="py-4 px-4 text-center"><StatusIcon status={row.limbi} /></td>
                      <td className="py-4 px-4 text-center"><StatusIcon status={row.diy} /></td>
                      <td className="py-4 px-4 text-center"><StatusIcon status={row.other} /></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap justify-center gap-5 py-4 border-t border-white/[0.03] bg-white/[0.01]">
              <span className="inline-flex items-center gap-2 text-white/20 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400/60 shadow-[0_0_8px_rgba(52,211,153,0.3)]" /> Available
              </span>
              <span className="inline-flex items-center gap-2 text-white/20 text-xs">
                <span className="w-2 h-2 rounded-full bg-red-400/30" /> Not available
              </span>
              <span className="inline-flex items-center gap-2 text-white/20 text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400/30" /> Limited
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </>
  )
}
