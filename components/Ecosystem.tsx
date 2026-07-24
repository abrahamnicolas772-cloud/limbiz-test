'use client'

import { motion } from 'framer-motion'

const branches = [
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>), title: 'LIMBIZ™ Academy', desc: 'Learning hub for entrepreneurs: guides, courses, startup education.', cta: 'Start Learning' },
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>), title: 'LIMBIZ™ Rewards', desc: 'Referral and loyalty ecosystem with benefits for active clients.', cta: 'Join Rewards' },
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>), title: 'LIMBIZ™ Credit Hub', desc: 'Business credit education, readiness score, vendor starter plan.', cta: 'Check Credit Readiness' },
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>), title: 'LIMBIZ™ Funding Center', desc: 'Funding readiness support: quiz, document checklist, consultation.', cta: 'Check Funding Eligibility' },
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>), title: 'LIMBIZ™ Tax Filings', desc: 'Tax setup, filing reminders, tax consultation, compliance support.', cta: 'Get Tax Ready' },
  { icon: (<svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>), title: 'Marketplace', desc: 'Future business marketplace for services, tools, and products.', cta: 'Coming Soon' },
]

export default function Ecosystem() {
  return (
    <>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/><div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5"/></div>
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase">The LIMBIZ™ Ecosystem</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Your <span className="text-blue-500">Complete Business Platform</span></h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto">More than just filing — we're your partner for growth, funding, and long‑term success.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.1}} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition group">
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition">{branch.icon}</div>
                <h3 className="text-xl font-semibold text-white">{branch.title}</h3>
                <p className="text-white/50 text-sm mt-2">{branch.desc}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">{branch.cta} →</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/><div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5"/></div>
    </>
  )
}
