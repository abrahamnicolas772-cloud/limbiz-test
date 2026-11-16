'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Search, DollarSign, Calculator, CheckCircle2, BarChart3, ListChecks } from '@/lib/icons'

const tools = [
  { title: 'LLC Name Checker', desc: 'Check if your business name is available.', Icon: Search, color: 'from-blue-500 to-cyan-400' },
  { title: 'Filing Fee Lookup', desc: 'See exact filing fees for your state.', Icon: DollarSign, color: 'from-emerald-500 to-green-400' },
  { title: 'Startup Cost Calculator', desc: 'Estimate your total startup costs.', Icon: Calculator, color: 'from-purple-500 to-pink-400' },
  { title: 'Funding Eligibility Quiz', desc: 'Check your funding readiness in 2 min.', Icon: CheckCircle2, color: 'from-amber-500 to-orange-400' },
  { title: 'Credit Readiness Score', desc: 'Get your business credit assessment.', Icon: BarChart3, color: 'from-rose-500 to-red-400' },
  { title: 'Startup Checklist', desc: 'Complete checklist to launch your business.', Icon: ListChecks, color: 'from-indigo-500 to-blue-400' },
]

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.08] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(59,130,246,0.5) 0px, rgba(59,130,246,0.5) 1px, transparent 1px, transparent 20px)` }} />
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Business <span className="text-blue-400">Tools</span></h1>
            <p className="text-white/50 max-w-2xl mx-auto">Free tools to help you start, validate, and grow your business.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t, i) => {
              const Icon = t.Icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 hover:bg-blue-900/40 transition-all duration-300 text-center overflow-hidden"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${t.color} opacity-0 group-hover:opacity-[0.05] rounded-2xl transition-opacity duration-500`} />

                  <div className="relative w-16 h-16 mx-auto mb-5">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.color} opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${t.color} p-[1.5px] shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-[14px] bg-blue-950/80 backdrop-blur-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>

                  <h3 className="relative text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition">{t.title}</h3>
                  <p className="relative text-white/40 text-sm mb-5">{t.desc}</p>
                  <button className="relative text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 hover:text-blue-300">
                    Try Now →
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
