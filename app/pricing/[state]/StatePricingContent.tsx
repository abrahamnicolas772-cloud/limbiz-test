'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

interface StateData {
  name: string
  abbreviation: string
  filingFee: number
  description?: string
}

const packages = [
  {
    name: 'Basic',
    price: 499,
    features: ['LLC Filing (State-Specific)', 'EIN Registration', 'Operating Agreement', '60-minute Business Consultation', 'Digital Document Vault']
  },
  {
    name: 'Standard',
    price: 999,
    features: ['Everything in Basic', 'Registered Agent Service (1 Year)', 'Business Address', 'DBA / Fictitious Name Filing', 'BOIR Guidance', 'Business Credit Starter Plan', 'Compliance Reminders (1 Year)'],
    popular: true
  },
  {
    name: 'Premium',
    price: 1999,
    features: ['Everything in Standard', 'Funding Center Access', 'Tax Filings Setup Consultation', 'Business Credit Readiness Score', 'Trademark Search Guidance', 'Website Development Consultation', 'Google Business Profile Setup', 'Business Email Setup', 'Annual Report Filing (1 Year)']
  }
]

export default function StatePricingContent({ state }: { state: StateData }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <h1 className="text-4xl md:text-5xl font-bold text-white">Start Your Business in <span className="text-blue-500">{state.name}</span></h1>
            </div>
            <p className="text-white/50 max-w-2xl mx-auto text-sm md:text-base">{state.description || `Form your LLC in ${state.name} with LIMBIZ™. We handle all state-specific requirements.`}</p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              State Filing Fee: ${state.filingFee}
            </div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {packages.map((pkg, idx) => {
              const total = state.filingFee + pkg.price
              const isPopular = pkg.popular || false
              return (
                <motion.div key={pkg.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className={`relative rounded-2xl p-6 ${isPopular ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-500/40 shadow-lg shadow-blue-500/10' : 'bg-white/5 border border-white/10 hover:border-white/20'}`}>
                  {isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-blue-500/30">Most Popular</div>}
                  <div className="text-center mb-6"><h3 className="text-2xl font-bold text-white">{pkg.name}</h3></div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/5"><span className="text-white/50 text-xs">State Filing Fee</span><span className="text-white font-semibold">${state.filingFee}</span></div>
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/5"><span className="text-white/50 text-xs">LIMBIZ Service Fee</span><span className="text-white font-semibold">${pkg.price}</span></div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"><span className="text-blue-300 text-xs font-semibold">Estimated Total</span><span className="text-blue-400 font-bold text-xl">${total}</span></div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2.5">
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold flex items-center justify-center gap-2">Start My Business Now <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></button>
                    <button className="w-full py-2.5 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 rounded-full text-sm">Book a Consultation</button>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-xs">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Est. process: 2-3 days
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
