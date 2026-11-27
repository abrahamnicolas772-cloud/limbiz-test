'use client'

import { useState, useMemo } from 'react'
import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  DBA_STATES,
  ENTITY_TYPES,
  BUSINESS_ACTIVITIES,
  getDBAState,
  requiresPublication,
  isLocalFee,
} from '@/lib/dba-data'

export default function DBAPage() {
  const { addItem } = useCart()
  const [selectedState, setSelectedState] = useState('FL')
  const [entityType, setEntityType] = useState('llc')
  const [activity, setActivity] = useState('professional')
  const [needsPublication, setNeedsPublication] = useState(false)
  const [needsCertified, setNeedsCertified] = useState(false)
  const [limbizFee] = useState(99)

  const state = getDBAState(selectedState)
  const baseFee = state?.baseFee ?? 0
  const localFee = isLocalFee(selectedState)
  const pubRequired = requiresPublication(selectedState)

  // Kalkil pri total
  const total = useMemo(() => {
    let t = baseFee
    if (needsPublication && pubRequired) t += 0 // Publication = quote
    if (needsCertified) t += 25
    t += limbizFee
    return t
  }, [baseFee, needsPublication, pubRequired, needsCertified, limbizFee])

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 pb-16 relative overflow-hidden bg-black">
        {/* BACKGROUND 8 KOUCH */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.08] rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(59,130,246,0.5) 0px, rgba(59,130,246,0.5) 1px, transparent 1px, transparent 20px)` }} />
          <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* HERO */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              DBA / Fictitious Name
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Operate Under a <span className="text-blue-400">Different Name</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Register a DBA (Doing Business As) or fictitious name to operate your business under a brand name different from your legal entity name.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-blue-400 font-bold text-2xl">50</span>
                <span>States + DC</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-blue-400 font-bold text-2xl">$5-$150</span>
                <span>State filing fees</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-blue-400 font-bold text-2xl">3-5</span>
                <span>Business days</span>
              </div>
            </div>
          </motion.div>

          {/* CALCULATOR */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">

            {/* FORM */}
            <div className="lg:col-span-2 bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
              <h2 className="text-white font-bold text-xl mb-6">Get Your DBA Cost Estimate</h2>

              <div className="space-y-5">
                {/* State */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">State of Operation</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:border-blue-400/50 focus:outline-none transition"
                  >
                    {DBA_STATES.map(s => (
                      <option key={s.code} value={s.code} className="bg-blue-950">{s.name}</option>
                    ))}
                  </select>
                </div>

                {/* Entity type */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Legal Entity Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {ENTITY_TYPES.map(e => (
                      <button
                        key={e.value}
                        onClick={() => setEntityType(e.value)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition border ${
                          entityType === e.value
                            ? 'bg-blue-500/20 border-blue-400/40 text-blue-300'
                            : 'bg-white/[0.02] border-white/10 text-white/50 hover:text-white'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">Business Activity</label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:border-blue-400/50 focus:outline-none transition"
                  >
                    {BUSINESS_ACTIVITIES.map(a => (
                      <option key={a.value} value={a.value} className="bg-blue-950">{a.label}</option>
                    ))}
                  </select>
                </div>

                {/* Options */}
                <div className="space-y-2 pt-2">
                  {pubRequired && (
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={needsPublication} onChange={(e) => setNeedsPublication(e.target.checked)} className="mt-0.5 accent-blue-500" />
                      <span className="text-white/60 text-xs">I need newspaper publication assistance <span className="text-amber-400/70">(publisher quote required)</span></span>
                    </label>
                  )}
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={needsCertified} onChange={(e) => setNeedsCertified(e.target.checked)} className="mt-0.5 accent-blue-500" />
                    <span className="text-white/60 text-xs">I need certified copies (+$25)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-blue-950/60 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-4">Cost Breakdown</h3>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/50">State DBA Fee ({state?.code})</span>
                    <span className="text-white font-medium">{baseFee > 0 ? `$${baseFee}` : 'Varies'}</span>
                  </div>
                  {localFee && (
                    <p className="text-amber-400/70 text-[10px]">County/city fee applies — confirm with local office</p>
                  )}
                  {pubRequired && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Publication</span>
                      <span className="text-amber-400 text-xs">{needsPublication ? 'Quote required' : '—'}</span>
                    </div>
                  )}
                  {needsCertified && (
                    <div className="flex justify-between">
                      <span className="text-white/50">Certified copies</span>
                      <span className="text-white font-medium">$25</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-white/50">LIMBIZ Service Fee</span>
                    <span className="text-white font-medium">${limbizFee}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 mb-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white font-semibold">Estimated Total</span>
                    <span className="text-blue-400 font-bold text-2xl">${total}</span>
                  </div>
                  <p className="text-white/30 text-[10px] mt-1">Government fees and third-party charges may apply separately.</p>
                </div>

                <button
                onClick={() => {
                  addItem({
                    id: 'dba',
                    name: 'DBA / Fictitious Name',
                    price: total,
                    unit: 'USD',
                    note: (state?.name || 'DBA') + ' - DBA Filing'
                  })
                  alert('DBA added to cart!')
                }}
                className='w-full py-3 bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] rounded-xl text-white font-semibold text-sm transition inline-flex items-center justify-center gap-2 mb-2'
              >
                <ShoppingCart className='w-4 h-4' strokeWidth={2} />
                Add to Cart — ${total}
              </button>
              <Link href={`/checkout?service=DBA&price=${total}&state=${state?.code}`} className="w-full py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 hover:bg-blue-500/30 rounded-xl text-white font-semibold text-sm transition text-center block mb-2">
                  Get Started — ${total}
                </Link>
                <Link href="/contact" className="w-full py-2.5 bg-white/[0.04] border border-white/10 hover:border-white/20 rounded-xl text-white/70 hover:text-white text-xs font-medium transition text-center block">
                  Contact for Custom Quote
                </Link>
              </div>
            </div>
          </motion.div>

          {/* STATE DETAILS */}
          {state && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto mb-12">
              <div className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
                <h2 className="text-white font-bold text-xl mb-4">{state.name} — DBA Details</h2>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Filing Office</p>
                    <p className="text-white/80">{state.filingOffice}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Term</p>
                    <p className="text-white/80">{state.term}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Publication</p>
                    <p className="text-white/80">{state.publication}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Business License</p>
                    <p className="text-white/80">{state.businessLicense}</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                  <p className="text-amber-300/90 text-xs"><strong>Key rule:</strong> {state.keyRule}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* NOTICES */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-12">
            <div className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Important Notices</h3>
              <ul className="space-y-3 text-xs text-white/50">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-white/80">DBA name:</strong> Registering an assumed name does not establish a separate legal entity or automatically protect the name as a trademark.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-white/80">Separate costs:</strong> Newspaper publication, business licenses, county/city permits, regulated-activity licenses and certified copies may cost extra.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-white/80">Location-dependent fee:</strong> Government charges and local requirements depend on your business structure, filing office and operating location.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span><strong className="text-white/80">License screen:</strong> Your DBA filing does not replace any state, county, city or professional license you need to operate.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* SPECIAL CASES */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-12">
            <div className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Special Case States</h3>
              <div className="grid md:grid-cols-2 gap-3 text-xs">
                {[
                  { state: 'Florida', detail: 'State filing $50; newspaper notice must appear BEFORE filing; $50 renewal; 5-year cycle.' },
                  { state: 'Alaska', detail: 'Name registration $25; current Alaska business license ($50/year) required for business-name registration.' },
                  { state: 'Delaware', detail: 'Statewide trade-name registration started Feb 2, 2026 at $25/name; standard business license often ~$75/year.' },
                  { state: 'Illinois', detail: 'For LLCs in 2026, assumed-name fee is $120 (plus processing). State uses 5-year prorated cycle.' },
                  { state: 'New York', detail: 'LLC assumed-name certificate $25; corporations may pay county fees; sole proprietors file at county clerk.' },
                  { state: 'California', detail: 'File at county clerk; publish once a week for 4 weeks AFTER filing; county fee and publisher fee separate.' },
                  { state: 'Georgia', detail: 'Register with Superior Court Clerk of proper county; publish once/week for 2 consecutive weeks.' },
                  { state: 'Pennsylvania', detail: 'Publication triggered when individual owner listed in registration field; notice charge extra.' },
                  { state: 'North Carolina', detail: 'Statewide database, but $26 fee submitted to county Register of Deeds; one form can list multiple counties.' },
                  { state: 'Washington', detail: '$5 per trade name; Business License Application processing charge and local endorsements separate.' },
                  { state: 'Kansas / New Mexico / South Carolina', detail: 'No general state DBA registry. Still check local permits, tax accounts, licensing and naming obligations.' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white/[0.03] border border-white/[0.06] rounded-lg">
                    <p className="text-blue-300 font-semibold mb-1">{item.state}</p>
                    <p className="text-white/50 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* OFFICIAL LINKS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-12">
            <div className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Official Filing References</h3>
              <div className="grid md:grid-cols-2 gap-2 text-xs">
                {[
                  { label: 'Florida Sunbiz — Fictitious Name', url: 'https://efile.sunbiz.org/ficinfo.html' },
                  { label: 'Florida Sunbiz — Online Filing', url: 'https://efile.sunbiz.org/ficregintro.html' },
                  { label: 'Alaska Business Licensing', url: 'https://www.commerce.alaska.gov/web/cbpl/BusinessLicensing/BusinessLicensingFAQs' },
                  { label: 'Delaware Trade Names (2026)', url: 'https://revenue.delaware.gov/trade-names-faqs/' },
                  { label: 'Illinois LLC Assumed Name', url: 'https://www.ilsos.gov/departments/business-services/assumed-name-adoptions/llcinstructions.html' },
                  { label: 'New York Assumed Name', url: 'https://dos.ny.gov/node/35606' },
                  { label: 'California Business Setup', url: 'https://cdn.calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/' },
                  { label: 'Georgia File DBA', url: 'https://gmcc.georgia.gov/file-dba-doing-business' },
                  { label: 'North Carolina Assumed Names', url: 'https://www.sosnc.gov/manual/assumed_business_names/Page14' },
                  { label: 'Pennsylvania Fictitious Names', url: 'https://www.pa.gov/agencies/dos/programs/business/types-of-filings-and-registrations/fictitious-names' },
                  { label: 'Washington Register Trade Names', url: 'https://dor.wa.gov/manage-business/grow-business/register-trade-names' },
                  { label: 'SBA — Permits & Licenses', url: 'https://www.sba.gov/counseling/launch-your-business/' },
                ].map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1.5">
                    <span>→</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 rounded-full text-white font-semibold transition">
              Book a Free Consultation
            </Link>
            <p className="text-white/30 text-xs mt-4">Not sure what you need? We'll help you figure it out.</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
