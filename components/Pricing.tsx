'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  states, 
  packages, 
  statusLabels, 
  getStateBySlug, 
  calculatePrice, 
  getStateFeeForMethod,
  calculateTennesseeFee,
  serviceDropdowns 
} from '@/lib/pricing-config'
import StateMap from '@/components/StateMap'

interface PricingProps {
  initialState?: string
  onStateSelect?: (stateId: string) => void
}

export default function Pricing({ initialState = 'florida', onStateSelect }: PricingProps) {
  const [selectedState, setSelectedState] = useState(initialState)
  const [showStateDropdown, setShowStateDropdown] = useState(false)
  const [filingMethod, setFilingMethod] = useState<string>('')
  const [memberCount, setMemberCount] = useState<number>(1)
  const [showNotice, setShowNotice] = useState(true)

  useEffect(() => { setSelectedState(initialState) }, [initialState])

  const currentState = getStateBySlug(selectedState)
  const stateFee = currentState 
    ? (currentState.code === 'TN' 
        ? calculateTennesseeFee(memberCount)
        : getStateFeeForMethod(currentState, filingMethod || undefined))
    : 125

  const handleStateSelect = (stateId: string) => {
    setSelectedState(stateId)
    setFilingMethod('')
    setMemberCount(1)
    if (onStateSelect) onStateSelect(stateId)
    setTimeout(() => document.getElementById('pricing-packages')?.scrollIntoView({ behavior: 'smooth' }), 300)
  }

  const packageList = [
    { id: 'basic', name: 'Basic', desc: 'Essential formation for startups and solo entrepreneurs.' },
    { id: 'standard', name: 'Standard', desc: 'Complete setup with compliance support.', popular: true },
    { id: 'premium', name: 'Premium', desc: 'Full business launch with growth strategy.' },
  ]

  return (
    <>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" /></div>
      <section id="pricing" className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">Pricing</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Select Your State to View <span className="font-bold text-blue-300">Business Formation Pricing</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-3 text-white/30 text-sm max-w-2xl mx-auto">
              Package prices are calculated as package component + your state filing fee.
            </motion.p>
          </div>

          <div className="mb-10"><StateMap onStateSelect={handleStateSelect} selectedState={selectedState} /></div>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <button onClick={() => setShowStateDropdown(!showStateDropdown)} className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-blue-400/30 transition text-white/90">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-light tracking-wide">{currentState?.name} ({currentState?.code})</span>
                </div>
                <span className="text-white/30 text-sm">▼</span>
              </button>
              {showStateDropdown && (
                <div className="absolute left-0 right-0 mt-2 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto z-50">
                  {states.map((s) => (
                    <button key={s.code} onClick={() => { setSelectedState(s.name.toLowerCase().replace(/\s+/g, '-')); setShowStateDropdown(false); setFilingMethod('') }} className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-white/5 transition ${currentState?.code === s.code ? 'text-blue-300 bg-blue-500/10' : 'text-white/60'}`}>
                      <span className="font-light">{s.name}</span><span className="text-white/20 text-xs">${s.baseline_initial_state_fee_usd} filing fee</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* State Notice */}
          {currentState?.show_notice_on_state_selection && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto mb-6">
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <div>
                    <p className="text-amber-300 text-xs font-semibold mb-1">State Notice — {currentState.name}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{currentState.notice_en}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Required Inputs */}
          {currentState?.required_inputs_before_final_quote && currentState.required_inputs_before_final_quote.length > 0 && (
            <div className="max-w-3xl mx-auto mb-6 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Required for accurate quote</p>
              {currentState.required_inputs_before_final_quote.includes('filing_method') && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {Object.keys(currentState.method_state_fee_usd || {}).map((m) => (
                    <button key={m} onClick={() => setFilingMethod(m)} className={`px-4 py-2 rounded-lg text-xs font-medium transition ${filingMethod === m ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300' : 'bg-white/[0.02] border border-white/[0.06] text-white/50'}`}>
                      {m.replace(/_/g, ' ').toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
              {currentState.required_inputs_before_final_quote.includes('member_count') && (
                <div className="flex items-center gap-3">
                  <label className="text-white/50 text-xs">Number of members:</label>
                  <input type="number" min="1" value={memberCount} onChange={(e) => setMemberCount(parseInt(e.target.value) || 1)} className="w-20 px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm focus:border-blue-400/50 focus:outline-none" />
                </div>
              )}
            </div>
          )}

          <div className="max-w-3xl mx-auto mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/40 text-xs">
              <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              State filing fees are separate from LIMBIZ service fees
            </div>
          </div>

          <div id="pricing-packages" className="grid md:grid-cols-3 gap-6">
            {packageList.map((pkg, idx) => {
              const total = calculatePrice(pkg.id, stateFee)
              const component = packages[pkg.id].package_component_usd
              const isPopular = pkg.popular || false
              return (
                <motion.div key={pkg.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className={`relative rounded-2xl p-6 flex flex-col transition-all duration-500 ${isPopular ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30' : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/20'}`}>
                  {isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-300 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</div>}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-light text-white/90">{pkg.name}</h3>
                    <p className="text-white/30 text-sm mt-1">{pkg.desc}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg"><span className="text-white/40 text-xs">Package Component</span><span className="text-white/80">${component}</span></div>
                    <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg"><span className="text-white/40 text-xs">State Fee ({currentState?.code})</span><span className="text-white/80">${stateFee}</span></div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg border border-blue-400/20"><span className="text-blue-300/60 text-xs">Total</span><span className="text-blue-300 font-bold text-xl">${total}</span></div>
                  </div>

                  {/* Services List */}
                  <div className="flex-1 mb-6">
                    <ul className="space-y-1.5">
                      {packages[pkg.id].additional_services.slice(0, 6).map((s) => (
                        <li key={s.id} className="flex items-start gap-2 text-white/50 text-xs">
                          <svg className="w-3.5 h-3.5 text-blue-300 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                          <span>{s.label_en}</span>
                        </li>
                      ))}
                      {packages[pkg.id].additional_services.length > 6 && (
                        <li className="text-white/20 text-xs pl-5">+{packages[pkg.id].additional_services.length - 6} more services</li>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <Link href={`/checkout?plan=${pkg.id}&state=${currentState?.name.toLowerCase().replace(/\s+/g, '-')}`} className="w-full py-3 bg-blue-600/80 hover:bg-blue-500 rounded-full text-white font-medium transition flex items-center justify-center gap-2 text-sm">
                      Start My Business Now
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </Link>
                    <Link href="/contact" className="w-full py-2.5 border border-blue-400/20 text-blue-300/60 hover:text-blue-300 hover:bg-blue-500/10 rounded-full text-sm transition text-center block">
                      Book a Consultation
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {currentState && !currentState.baseline_is_final_checkout_amount && (
            <div className="max-w-3xl mx-auto mt-8 text-center">
              <p className="text-amber-400/60 text-xs">
                ⚠️ Baseline estimate. Final price may vary based on required inputs. Confirm before payment.
              </p>
            </div>
          )}
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" /></div>
    </>
  )
}
