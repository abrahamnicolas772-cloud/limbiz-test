'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const services = [
  { title: 'Tax Setup Consultation', desc: 'Get your business tax structure set up correctly.', price: '$299' },
  { title: 'Annual Tax Filing', desc: 'Professional assistance with your annual tax filing.', price: '$399' },
  { title: 'Tax Calendar', desc: 'Never miss a deadline with automated reminders.', price: 'Free' },
  { title: 'Compliance Check', desc: 'Review your business for tax compliance issues.', price: '$199' },
]

export default function TaxFilingsPage() {
  return (<><Navbar/><main className="min-h-screen pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]"/><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]"/></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">Tax Filings</span></h1><p className="text-white/40 mt-3">Professional tax filing assistance and compliance support for your business.</p></motion.div><div className="grid md:grid-cols-2 gap-6">{services.map((s,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition"><h3 className="text-white font-semibold mb-2">{s.title}</h3><p className="text-white/40 text-sm mb-4">{s.desc}</p><div className="flex items-center justify-between"><span className="text-blue-400 font-bold">{s.price}</span><button className="text-sm text-blue-400 hover:text-blue-300">Get Started →</button></div></motion.div>))}</div></div></main><Footer/></>)}
