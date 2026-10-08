'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [needsDBA, setNeedsDBA] = useState<boolean | null>(null)

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

  const serviceWithDropdown: Record<string, string> = {
    'essential_documents': 'essential_documents',
    'licenses': 'licenses',
    'social': 'social',
    'compliance': 'compliance',
    'ecommerce': 'ecommerce',
  }

  const getFullServiceList = (packageId: string) => {
    const result: { number: number; service: any; isInheritedHeader?: boolean }[] = []

    if (packageId === 'basic') {
      // Basic: 1-10
      packages.basic.additional_services.forEach((s, i) => result.push({ number: i + 1, service: s }))
    } 
    else if (packageId === 'standard') {
      // Standard: 10-20 ak "Basic Package+" nan mitan
      result.push({ number: 10, service: { id: 'basic_header', label_en: 'Basic Package+', term: 'inherited' }, isInheritedHeader: true })
      packages.basic.additional_services.forEach((s, i) => result.push({ number: i + 1, service: s }))
      packages.standard.additional_services.forEach((s, i) => result.push({ number: 11 + i, service: s }))
    }
    else if (packageId === 'premium') {
      // Premium: 20-30 ak "Standard Package+" nan mitan
      result.push({ number: 20, service: { id: 'standard_header', label_en: 'Standard Package+', term: 'inherited' }, isInheritedHeader: true })
      packages.basic.additional_services.forEach((s, i) => result.push({ number: i + 1, service: s }))
      packages.standard.additional_services.forEach((s, i) => result.push({ number: 11 + i, service: s }))
      packages.premium.additional_services.forEach((s, i) => result.push({ number: 21 + i, service: s }))
    }

    return result
  }

  const getTermLabel = (term: string) => statusLabels[term] || term

  const renderServiceRow = (item: { number: number; service: any; isInheritedHeader?: boolean }, packageId: string) => {
    if (item.isInheritedHeader) {
      return (
        <li key={`${packageId}-header-${item.number}`} className="py-3 border-b border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-transparent -mx-3 px-3 my-1 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-blue-300 font-bold text-sm">{item.number}.</span>
            <span className="text-blue-200 font-bold text-sm">{item.service.label_en}</span>
          </div>
        </li>
      )
    }

    const hasDropdown = serviceWithDropdown[item.service.id]
    const dropdown = hasDropdown ? serviceDropdowns[hasDropdown as keyof typeof serviceDropdowns] : null
    const isExpanded = expandedService === `${packageId}-${item.service.id}`

    return (
      <li key={`${packageId}-${item.number}-${item.service.id}`} className="border-b border-white/[0.03] last:border-0">
        <div className="py-2.5">
          <div className="flex items-start gap-3">
            <span className="text-white/40 font-mono text-xs mt-0.5 w-6 flex-shrink-0">{item.number}.</span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <span className="text-white/75 text-xs leading-relaxed">{item.service.label_en}</span>
                {dropdown && (
                  <button onClick={() => setExpandedService(isExpanded ? null : `${packageId}-${item.service.id}`)} className="text-blue-400/60 hover:text-blue-400 transition flex-shrink-0">
                    <svg className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                )}
              </div>
              
            </div>
          </div>

          <AnimatePresence>
            {dropdown && isExpanded && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden ml-9 mt-2">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-3">
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">{dropdown.heading}</p>
                  <ul className="space-y-1 mb-2">
                    {dropdown.examples.map((ex: string, i: number) => (
                      <li key={i} className="text-white/50 text-[10px] flex items-start gap-1.5">
                        <span className="text-blue-400/50">•</span>{ex}
                      </li>
                    ))}
                  </ul>
                  <p className="text-white/30 text-[9px] italic leading-relaxed border-t border-white/[0.05] pt-2 mt-2">{dropdown.helper}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </li>
    )
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-200/60 text-xs uppercase tracking-[0.3em] font-light mb-3">Pricing</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Select Your State to View <span className="font-bold text-blue-300">Business Formation Pricing</span>
            </motion.h2>
          </div>

          <div className="mb-10"><StateMap onStateSelect={handleStateSelect} selectedState={selectedState} /></div>

          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <button onClick={() => setShowStateDropdown(!showStateDropdown)} className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-blue-400/30 transition text-white/90 shadow-lg shadow-black/20">
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

          {currentState?.show_notice_on_state_selection && currentState.notice_en && (
            <div className="max-w-3xl mx-auto mb-6">
              <div className="bg-amber-500/5 backdrop-blur-sm border border-amber-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <div>
                    <p className="text-amber-300 text-xs font-semibold mb-1">State Notice — {currentState.name}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{currentState.notice_en}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentState?.required_inputs_before_final_quote && currentState.required_inputs_before_final_quote.length > 0 && (
            <div className="max-w-3xl mx-auto mb-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl p-4">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Required for accurate quote</p>
              {currentState.required_inputs_before_final_quote.includes('filing_method') && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {Object.keys(currentState.method_state_fee_usd || {}).map((m) => (
                    <button key={m} onClick={() => setFilingMethod(m)} className={`px-4 py-2 rounded-lg text-xs font-medium transition ${filingMethod === m ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300' : 'bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white'}`}>
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

          {/* DBA Selection */}
          <div className="max-w-3xl mx-auto mb-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-medium text-sm">Do you need a DBA / Fictitious Name?</p>
                <p className="text-white/40 text-xs mt-1">A DBA lets you operate under a different business name. State filing fees apply.</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setNeedsDBA(true)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition ${needsDBA === true ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300' : 'bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white'}`}
                >
                  Yes
                </button>
                <button 
                  onClick={() => setNeedsDBA(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition ${needsDBA === false ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300' : 'bg-white/[0.02] border border-white/[0.06] text-white/50 hover:text-white'}`}
                >
                  No
                </button>
              </div>
            </div>
            {needsDBA === true && (
              <div className="mt-3 pt-3 border-t border-white/[0.05]">
                <p className="text-blue-300/80 text-xs">DBA fee will be added at checkout based on your state.</p>
              </div>
            )}
          </div>
          
          <div id="pricing-packages" className="grid md:grid-cols-3 gap-6 items-start">
            {packageList.map((pkg, idx) => {
              const total = calculatePrice(pkg.id, stateFee)
              const component = packages[pkg.id].package_component_usd
              const isPopular = pkg.popular || false
              const isExpanded = expandedPackage === pkg.id
              const fullList = getFullServiceList(pkg.id)

              return (
                <motion.div 
                  key={pkg.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: idx * 0.08 }} 
                  className={`relative rounded-3xl p-6 flex flex-col transition-all duration-500 overflow-hidden ${
                    isPopular 
                      ? 'bg-gradient-to-b from-white/[0.08] via-blue-500/[0.04] to-white/[0.02] backdrop-blur-2xl border-2 border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]' 
                      : 'bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-white/[0.01] backdrop-blur-2xl border border-white/[0.1] hover:border-blue-400/30 shadow-[0_8px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]'
                  }`}
                >
                  {/* Reflet anlè (iOS-like) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  {/* Glow anba */}
                  <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-3xl ${isPopular ? 'bg-blue-500/20' : 'bg-blue-500/10'}`} />

                  {isPopular && (
                    <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-b-lg shadow-lg shadow-blue-500/30">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6 pt-3">
                    <h3 className="text-xl font-light text-white/90 tracking-wide">{pkg.name}</h3>
                    <p className="text-white/40 text-xs mt-1.5">{pkg.desc}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center p-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
                      <span className="text-white/40 text-xs">Package Component</span>
                      <span className="text-white/90 text-sm">${component}</span>
                    </div>
                    <div className="flex justify-between items-center p-2.5 bg-white/[0.04] backdrop-blur-sm rounded-xl border border-white/[0.06]">
                      <span className="text-white/40 text-xs">State Fee ({currentState?.code})</span>
                      <span className="text-white/90 text-sm">${stateFee}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-500/15 to-blue-400/10 backdrop-blur-sm rounded-xl border border-blue-400/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <span className="text-blue-300/80 text-xs">Total</span>
                      <span className="text-blue-200 font-bold text-xl">${total}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <button 
                      onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl hover:border-blue-400/30 hover:bg-white/[0.06] transition text-left group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    >
                      <span className="text-white/70 text-xs font-medium">View all {pkg.id === 'premium' ? 30 : pkg.id === 'standard' ? 20 : 10} services</span>
                      <svg className={`w-4 h-4 text-blue-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>

                    {isExpanded && (
                      <div className="mt-3">
                        <ul className="space-y-0 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                          {fullList.map((item) => renderServiceRow(item, pkg.id))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <Link href={`/checkout?plan=${pkg.id}&state=${currentState?.name.toLowerCase().replace(/\s+/g, '-')}${needsDBA !== null ? `&dba=${needsDBA ? 'yes' : 'no'}` : ''}`} className="w-full py-3 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 rounded-full text-white font-medium transition flex items-center justify-center gap-2 text-sm shadow-[0_4px_14px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]">
                      Start My Business Now
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </Link>
                    <Link href="/contact" className="w-full py-2.5 border border-white/[0.1] text-white/60 hover:text-white hover:bg-white/[0.05] rounded-full text-sm transition text-center block backdrop-blur-sm">
                      Book a Consultation
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-4">
              <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Important Notices</p>
              <ul className="space-y-1.5 text-white/35 text-[10px]">
                <li>• <span className="text-white/50">External service costs:</span> LIMBIZ support is included. Any applicable third-party or government fees are confirmed separately before purchase.</li>
                <li>• <span className="text-white/50">Trademark / copyright:</span> Trademark research and guidance, plus copyright registration assistance, are included. Official filing fees are separate. Registration or approval is not guaranteed.</li>
                <li>• <span className="text-white/50">Google Business Profile:</span> Setup is available only if the business meets Google eligibility requirements.</li>
                <li>• <span className="text-white/50">Potential state extras:</span> Additional state-specific charges may apply. Review the state notice and final quote before checkout.</li>
              </ul>
            </div>
          </div>

          {currentState && !currentState.baseline_is_final_checkout_amount && (
            <div className="max-w-3xl mx-auto mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full">
                <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                <span className="text-amber-400/80 text-xs">Baseline estimate. Final price may vary based on required inputs. Confirm before payment.</span>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" /></div>
    </>
  )
}
