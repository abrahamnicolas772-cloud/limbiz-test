'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const options = [
  { title: 'Funding Readiness Quiz', desc: 'Find out if your business is ready for funding.', icon: '📝' },
  { title: 'Document Checklist', desc: 'Get a personalized checklist of documents you need.', icon: '📋' },
  { title: 'Funding Consultation', desc: 'Speak with an expert about your funding options.', icon: '💬' },
  { title: 'Grant Search', desc: 'Discover grants available for your business type.', icon: '🔍' },
  { title: 'Investor Pitch Prep', desc: 'Prepare your pitch deck and financial projections.', icon: '📊' },
  { title: 'Loan Application Support', desc: 'Get help completing loan applications.', icon: '🏦' },
]

export default function FundingCenterPage() {
  return (<><Navbar/><main className="min-h-screen pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]"/><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]"/></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">Funding Center</span></h1><p className="text-white/40 mt-3">Access funding opportunities and prepare your business for financial success.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{options.map((o,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition text-center"><span className="text-4xl block mb-3">{o.icon}</span><h3 className="text-white font-semibold mb-2">{o.title}</h3><p className="text-white/40 text-sm">{o.desc}</p><button className="mt-4 text-blue-400 text-sm font-medium">Learn More →</button></motion.div>))}</div></div></main><Footer/></>)}
