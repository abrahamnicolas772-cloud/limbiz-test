'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const tools = [
  { title: 'LLC Name Checker', desc: 'Check if your business name is available.', icon: '🔍' },
  { title: 'Filing Fee Lookup', desc: 'See exact filing fees for your state.', icon: '💰' },
  { title: 'Startup Cost Calculator', desc: 'Estimate your total startup costs.', icon: '🧮' },
  { title: 'Funding Eligibility Quiz', desc: 'Check your funding readiness in 2 min.', icon: '📊' },
  { title: 'Credit Readiness Score', desc: 'Get your business credit assessment.', icon: '📈' },
  { title: 'Startup Checklist', desc: 'Complete checklist to launch your business.', icon: '✅' },
]

export default function ToolsPage() {
  return (<><Navbar/><main className="min-h-screen pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]"/><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]"/></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-white">Business <span className="text-blue-300">Tools</span></h1><p className="text-white/40 mt-3">Free tools to help you start, validate, and grow your business.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{tools.map((t,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition text-center"><span className="text-4xl block mb-3">{t.icon}</span><h3 className="text-white font-semibold mb-2">{t.title}</h3><p className="text-white/40 text-sm">{t.desc}</p><button className="mt-4 text-blue-400 text-sm font-medium">Try Now →</button></motion.div>))}</div></div></main><Footer/></>)}
