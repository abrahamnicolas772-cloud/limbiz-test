'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Activity, TrendingUp, Users, BarChart3 } from '@/lib/icons'

const services = [
  { title: 'Credit Readiness Score', desc: 'Get your business credit readiness assessment.', price: 'Free', Icon: Activity, href: '/checkout?plan=basic&state=florida' },
  { title: 'Business Credit Builder', desc: 'Step-by-step plan to build your business credit.', price: '$299', Icon: TrendingUp, href: '/checkout?plan=basic&state=florida' },
  { title: 'Vendor Starter Plan', desc: 'Establish trade lines with approved vendors.', price: '$499', Icon: Users, href: '/checkout?plan=basic&state=florida' },
  { title: 'Credit Monitoring', desc: 'Track your business credit score and get alerts.', price: '$29/mo', Icon: BarChart3, href: '/checkout?plan=basic&state=florida' },
]

export default function CreditHubPage() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              LIMBIZ <span className="text-blue-400">Credit Hub</span>
            </h1>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">Build, monitor, and improve your business credit to unlock better financing opportunities.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.Icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 hover:bg-blue-900/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 shrink-0">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 opacity-40 blur-lg group-hover:opacity-70 transition-opacity" />
                      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1.5px]">
                        <div className="w-full h-full rounded-[10px] bg-blue-950/80 backdrop-blur-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition">{s.title}</h3>
                      <p className="text-white/40 text-sm">{s.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-blue-400 font-bold">{s.price}</span>
                    <Link href={s.href} className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Get Started
                      <span>→</span>
                    </Link>
                  </div>
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
