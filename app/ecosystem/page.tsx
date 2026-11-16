'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GraduationCap, Gift, CreditCard, Banknote, Receipt, Wrench, ArrowRight } from '@/lib/icons'

const branches = [
  { title: 'Academy', desc: 'Free courses, guides, and startup education for entrepreneurs at every stage.', Icon: GraduationCap, link: '/academy', color: 'from-blue-500 to-cyan-400', stats: '6 Courses' },
  { title: 'Rewards', desc: 'Earn points and rewards by referring friends and engaging with LIMBIZ™.', Icon: Gift, link: '/rewards', color: 'from-amber-500 to-orange-400', stats: 'Earn $50' },
  { title: 'Credit Hub', desc: 'Build, monitor, and improve your business credit to unlock better financing.', Icon: CreditCard, link: '/credit-hub', color: 'from-emerald-500 to-green-400', stats: 'Free Check' },
  { title: 'Funding Center', desc: 'Access funding opportunities and prepare your business for financial success.', Icon: Banknote, link: '/funding-center', color: 'from-purple-500 to-pink-400', stats: '6 Options' },
  { title: 'Tax Filings', desc: 'Professional tax filing assistance and compliance support for your business.', Icon: Receipt, link: '/tax-filings', color: 'from-rose-500 to-red-400', stats: 'From $199' },
  { title: 'Tools & Resources', desc: 'Free business tools, checklists, templates, and guides to launch and grow.', Icon: Wrench, link: '/tools', color: 'from-indigo-500 to-blue-400', stats: 'Free' },
]

const stats = [
  { value: '10,000+', label: 'Businesses Served' },
  { value: '50', label: 'States Covered' },
  { value: '4.9/5', label: 'Client Rating' },
  { value: '2-3 Days', label: 'Avg. Processing' },
]

export default function EcosystemPage() {
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
              Complete Platform
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">LIMBIZ™</span> Ecosystem
            </h1>
            <p className="text-white/40 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              More than just business formation - a complete platform to start, structure, fund, grow, and protect your business.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((s, i) => (
              <div key={i} className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold text-blue-400">{s.value}</p>
                <p className="text-white/30 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.map((branch, idx) => {
              const Icon = branch.Icon
              return (
                <motion.div
                  key={branch.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  className="group relative bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 hover:bg-blue-900/40 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${branch.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 rounded-2xl`} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="relative w-12 h-12">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${branch.color} opacity-40 blur-lg group-hover:opacity-70 transition-opacity`} />
                      <div className={`relative w-full h-full rounded-xl bg-gradient-to-br ${branch.color} p-[1.5px]`}>
                        <div className="w-full h-full rounded-[10px] bg-blue-950/80 backdrop-blur-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                        </div>
                      </div>
                    </div>
                    <span className="text-blue-300/50 text-xs font-mono">{branch.stats}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {branch.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">
                    {branch.desc}
                  </p>

                  <Link
                    href={branch.link}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition group/link"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" strokeWidth={2} />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mt-16">
            <p className="text-white/20 text-xs mb-4">Ready to explore the full ecosystem?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 rounded-full text-white font-semibold text-sm transition-all duration-300">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
