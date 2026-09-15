'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const rewards = [
  { 
    title: 'Refer a Friend', 
    desc: 'Earn $50 for every friend who forms their LLC with LIMBIZ.', 
    reward: '$50',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    title: 'Leave a Review', 
    desc: 'Share your experience and earn rewards points.', 
    reward: '100 pts',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    color: 'from-amber-500 to-orange-400'
  },
  { 
    title: 'Complete Courses', 
    desc: 'Finish Academy courses and unlock exclusive benefits.', 
    reward: '200 pts',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>),
    color: 'from-purple-500 to-pink-400'
  },
  { 
    title: 'Social Share', 
    desc: 'Share LIMBIZ on social media and earn points.', 
    reward: '50 pts',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>),
    color: 'from-emerald-500 to-green-400'
  },
]

export default function RewardsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060b14] via-[#0b1a2e] to-[#0f2847]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Loyalty Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">LIMBIZ <span className="text-blue-400">Rewards</span></h1>
            <p className="text-white/50 max-w-2xl mx-auto">Earn rewards by engaging with LIMBIZ. Redeem points for discounts and services.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rewards.map((reward, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${reward.color} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500`} />
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${reward.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {reward.icon}
                  </div>
                  <span className="bg-emerald-500/15 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">{reward.reward}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition">{reward.title}</h3>
                <p className="text-white/40 text-sm">{reward.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
