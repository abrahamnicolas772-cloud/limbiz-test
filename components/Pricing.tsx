'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { stateMap, STATES } from '@/lib/states'
import StateMap from '@/components/StateMap'

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential formation for startups and solo entrepreneurs.',
    limbiZFee: 499,
    features: [
      'LLC Filing (State-Specific)',
      'EIN Registration',
      'Operating Agreement',
      '60-minute Business Consultation',
      'Digital Document Vault',
    ],
    cta: 'Start My Business Now',
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Complete setup for growing businesses with compliance support.',
    limbiZFee: 999,
    features: [
      'Everything in Basic',
      'Registered Agent Service (1 Year)',
      'Business Address',
      'DBA / Fictitious Name Filing',
      'BOIR Guidance',
      'Business Credit Starter Plan',
      'Compliance Reminders (1 Year)',
    ],
    cta: 'Start My Business Now',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Full business launch with growth strategy, funding prep, and tax setup.',
    limbiZFee: 1999,
    features: [
      'Everything in Standard',
      'Funding Center Access',
      'Tax Filings Setup Consultation',
      'Business Credit Readiness Score',
      'Trademark Search Guidance',
      'Website Development Consultation',
      'Google Business Profile Setup',
      'Business Email Setup',
      'Annual Report Filing (1 Year)',
    ],
    cta: 'Start My Business Now',
  },
]

interface PricingProps {
  initialState?: string
  onStateSelect?: (stateId: string) => void
}

export default function Pricing({ initialState = 'florida', onStateSelect }: PricingProps) {
  const [selectedState, setSelectedState] = useState(initialState)
  const [showStateDropdown, setShowStateDropdown] = useState(false)

  useEffect(() => { setSelectedState(initialState) }, [initialState])
  const currentStateData = stateMap[selectedState]

  const handleStateSelect = (stateId: string) => {
    setSelectedState(stateId)
    if (onStateSelect) onStateSelect(stateId)
    setTimeout(() => document.getElementById('pricing-packages')?.scrollIntoView({ behavior: 'smooth' }), 300)
  }

  return (
    <>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" /></div>
      <section id="pricing" className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse animation-delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">Pricing</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Select Your State to View <span className="font-bold text-blue-300">Business Formation Pricing</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-white/30 text-sm font-light tracking-wide max-w-2xl mx-auto">
              Click on a state below or use the dropdown to see specific pricing.
            </motion.p>
          </div>

          <div className="mb-10"><StateMap onStateSelect={handleStateSelect} selectedState={selectedState} /></div>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <button onClick={() => setShowStateDropdown(!showStateDropdown)} className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400/30 transition text-white/90">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-light tracking-wide">{currentStateData?.name} ({currentStateData?.abbreviation})</span>
                </div>
                <span className="text-white/30 text-sm">▼</span>
              </button>
              {showStateDropdown && (
                <div className="absolute left-0 right-0 mt-2 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50">
                  {STATES.map((s) => (
                    <button key={s.id} onClick={() => { setSelectedState(s.slug); setShowStateDropdown(false) }} className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-white/5 transition ${selectedState === s.slug ? 'text-blue-300 bg-blue-500/10' : 'text-white/60'}`}>
                      <span className="font-light">{s.name}</span><span className="text-white/20 text-xs">${s.filingFee} filing fee</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div id="pricing-packages" className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => {
              const total = currentStateData ? currentStateData.filingFee + pkg.limbiZFee : pkg.limbiZFee
              const isPopular = pkg.popular || false
              return (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${isPopular ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30 shadow-lg' : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/20'}`}>
                  {isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-300 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</div>}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-light text-white/90">{pkg.name}</h3>
                    <p className="text-white/30 text-sm mt-1">{pkg.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg"><span className="text-white/40 text-xs">State Filing Fee</span><span className="text-white/80">${currentStateData?.filingFee || '—'}</span></div>
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg"><span className="text-white/40 text-xs">LIMBIZ Service Fee</span><span className="text-white/80">${pkg.limbiZFee}</span></div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-400/20"><span className="text-blue-300/60 text-xs">Estimated Total</span><span className="text-blue-300 font-bold text-xl">${total}</span></div>
                  </div>

                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/50 text-sm"><svg className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>{f}</span></li>
                    ))}
                  </ul>

                  <div className="space-y-2.5 mt-6">
                    <Link href={`/checkout?plan=${pkg.id}&state=${selectedState}`} className="w-full py-3 bg-blue-600/80 hover:bg-blue-500 rounded-full text-white font-medium shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition flex items-center justify-center gap-2 text-sm">
                      {pkg.cta} <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </Link>
                    <Link href="/contact" className="w-full py-2.5 border border-blue-400/20 text-blue-300/60 hover:text-blue-300 hover:bg-blue-500/10 rounded-full text-sm font-light transition text-center block">
                      Book a Consultation
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" /></div>
    </>
  )
}
