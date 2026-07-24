'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const courses = [
  { title: 'LLC Formation 101', desc: 'Learn how to form your LLC step by step.', level: 'Beginner', duration: '30 min' },
  { title: 'Business Credit Mastery', desc: 'Build and improve your business credit score.', level: 'Intermediate', duration: '45 min' },
  { title: 'Funding Your Startup', desc: 'Discover funding options for your business.', level: 'Intermediate', duration: '40 min' },
  { title: 'Tax Essentials', desc: 'Understand business tax basics and deadlines.', level: 'Beginner', duration: '35 min' },
  { title: 'Trademark Protection', desc: 'Protect your brand with federal trademark registration.', level: 'Advanced', duration: '50 min' },
  { title: 'Digital Marketing 101', desc: 'Grow your online presence and attract customers.', level: 'Beginner', duration: '30 min' },
]

export default function AcademyPage() {
  return (<><Navbar/><main className="min-h-screen pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]"/><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]"/></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">Academy</span></h1><p className="text-white/40 mt-3">Free courses and guides to help you build and grow your business.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{courses.map((c,i)=>(<motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.05}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition"><div className="flex items-center justify-between mb-3"><span className="text-xs px-2 py-1 bg-blue-500/15 text-blue-300 rounded-full">{c.level}</span><span className="text-white/20 text-xs">{c.duration}</span></div><h3 className="text-white font-semibold mb-2">{c.title}</h3><p className="text-white/40 text-sm">{c.desc}</p><button className="mt-4 text-blue-400 text-sm font-medium">Start Learning →</button></motion.div>))}</div></div></main><Footer/></>)}
