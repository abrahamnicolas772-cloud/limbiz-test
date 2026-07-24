'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const rewards = [
  { title: 'Refer a Friend', desc: 'Earn $50 for every friend who forms their LLC with LIMBIZ.', icon: '👥', reward: '$50' },
  { title: 'Leave a Review', desc: 'Share your experience and earn rewards points.', icon: '⭐', reward: '100 pts' },
  { title: 'Complete Courses', desc: 'Finish Academy courses and unlock exclusive benefits.', icon: '📚', reward: '200 pts' },
  { title: 'Social Share', desc: 'Share LIMBIZ on social media and earn points.', icon: '📱', reward: '50 pts' },
]

export default function RewardsPage() {
  return (<><Navbar/><main className="min-h-screen pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]"/><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]"/></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">Rewards</span></h1><p className="text-white/40 mt-3">Earn rewards by engaging with LIMBIZ. Redeem points for discounts and services.</p></motion.div><div className="grid md:grid-cols-2 gap-6">{rewards.map((r,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition"><div className="flex items-center justify-between mb-3"><span className="text-3xl">{r.icon}</span><span className="bg-emerald-500/15 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">{r.reward}</span></div><h3 className="text-white font-semibold mb-2">{r.title}</h3><p className="text-white/40 text-sm">{r.desc}</p></motion.div>))}</div></div></main><Footer/></>)}
