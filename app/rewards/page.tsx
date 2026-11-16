'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Gift, Trophy, Crown, Sparkles, Star, Award } from '@/lib/icons'

const rewards = [
  { title: 'Referral Bonus', desc: 'Earn $50 for every friend who signs up.', points: '500 pts', Icon: Gift },
  { title: 'Loyalty Program', desc: 'Get rewards for every service you complete.', points: '100 pts', Icon: Trophy },
  { title: 'VIP Membership', desc: 'Exclusive perks and priority support.', points: '2000 pts', Icon: Crown },
  { title: 'Review Rewards', desc: 'Leave a review and earn points instantly.', points: '50 pts', Icon: Star },
]

const tiers = [
  { name: 'Starter', points: '0-499', Icon: Sparkles, color: 'from-blue-500 to-cyan-400' },
  { name: 'Growth', points: '500-1999', Icon: Award, color: 'from-emerald-500 to-green-400' },
  { name: 'VIP', points: '2000+', Icon: Crown, color: 'from-amber-500 to-orange-400' },
]

export default function RewardsPage() {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Ecosystem
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              LIMBIZ <span className="text-blue-400">Rewards</span>
            </h1>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">Earn points, unlock perks, and get rewarded for growing your business with us.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {rewards.map((r, i) => {
              const Icon = r.Icon
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
                      <h3 className="text-white font-semibold mb-1 group-hover:text-blue-300 transition">{r.title}</h3>
                      <p className="text-white/40 text-sm">{r.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-blue-400 font-bold">{r.points}</span>
                    <button className="text-sm text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Tiers */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Membership <span className="text-blue-400">Tiers</span></h2>
            <p className="text-white/40 text-sm">Unlock more perks as you earn points.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => {
              const Icon = t.Icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className={`relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${t.color} p-[1.5px] group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-[14px] bg-blue-950/80 backdrop-blur-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                  <p className="text-blue-400 text-sm font-medium">{t.points} points</p>
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
