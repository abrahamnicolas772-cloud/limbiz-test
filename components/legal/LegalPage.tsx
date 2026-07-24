'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
interface LegalPageProps { title: string; icon: ReactNode; children: ReactNode }
export function LegalPage({ title, icon, children }: LegalPageProps) {
  return (<><Navbar/><main className="min-h-screen bg-black pt-24 pb-16 relative overflow-hidden"><div className="absolute inset-0 z-0 pointer-events-none"><div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"/></div><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12"><div className="flex justify-center mb-4"><div className="p-3 bg-blue-500/10 rounded-2xl">{icon}</div></div><h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1><p className="text-white/40 mt-3 text-sm">Effective Date: January 1, 2025</p></motion.div><div className="space-y-6">{children}</div></div></main><Footer/></>)
}
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (<motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"><h2 className="text-xl font-bold text-white mb-3">{title}</h2><div className="text-white/60 text-sm leading-relaxed">{children}</div></motion.div>)
}
export function ContactInfo() {
  return (<div className="space-y-2 text-white/70"><p><strong className="text-white">LIMBIZ™</strong></p><p>Limitless Biz Hub LLC</p><p className="flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:hello@golimbiz.com" className="hover:text-blue-400">hello@golimbiz.com</a></p><p><a href="tel:+18885462497" className="hover:text-blue-400">(888) 546-2497</a></p></div>)
}
