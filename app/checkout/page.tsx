'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 'review' | 'payment' | 'processing' | 'success'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'basic'
  const state = searchParams.get('state') || 'florida'
  
  const [step, setStep] = useState<Step>('review')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvc, setCardCvc] = useState('')
  const [cardName, setCardName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('llc')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const plans: Record<string, { name: string; price: number; originalPrice: number; stateFee: number; features: string[] }> = {
    basic: { name: 'Basic', price: 499, originalPrice: 599, stateFee: 125, features: ['LLC Filing', 'EIN Registration', 'Operating Agreement', 'Business Consultation', 'Document Vault', 'Name Check'] },
    standard: { name: 'Standard', price: 999, originalPrice: 1199, stateFee: 125, features: ['Everything in Basic', 'Registered Agent (1Y)', 'Business Address', 'DBA Filing', 'BOIR Guidance', 'Credit Starter', 'Compliance'] },
    premium: { name: 'Premium', price: 1999, originalPrice: 2499, stateFee: 125, features: ['Everything in Standard', 'Funding Center', 'Tax Consultation', 'Credit Score', 'Trademark Search', 'Website Consultation', 'Google Profile', 'Priority Support'] },
  }

  const selectedPlan = plans[plan] || plans.basic
  const total = selectedPlan.price

  const handlePay = () => { setStep('processing'); setTimeout(() => setStep('success'), 2500) }

  // Cartes de crédit acceptées
  const acceptedCards = [
    { name: 'Visa', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#1a1f71"/><path d="M10 11.5l-2-5h-.5l-2 3.5-2-3.5h-1l3 7h.5l2-5 1.5 5h.5z" fill="white"/></svg>) },
    { name: 'Mastercard', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#252525"/><circle cx="9" cy="8" r="4" fill="#eb001b"/><circle cx="15" cy="8" r="4" fill="#f79e1b" opacity="0.8"/></svg>) },
    { name: 'Amex', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#006fcf"/><text x="2" y="12" fill="white" fontSize="10" fontWeight="bold">AMEX</text></svg>) },
    { name: 'Discover', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#ff6000"/><text x="2" y="12" fill="white" fontSize="10" fontWeight="bold">DISCOVER</text></svg>) },
  ]

  return (
    <div className="min-h-screen bg-[#060b14] relative overflow-hidden flex items-center justify-center py-8 px-4">
      {/* Fond animé */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a30] to-[#0b1830]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/4 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Link href="/pricing" className="text-white/30 hover:text-white/60 text-xs flex items-center gap-1.5 transition group">
            <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </Link>
          <div className="flex items-center gap-2">
            <img src="/LOGO1.png" alt="LIMBIZ" className="h-28 w-auto" />
            <span className="text-white/20 text-[10px] uppercase tracking-wider">Secure Checkout</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Gauche - Glass morphism form */}
          <div className="lg:col-span-3">
            <motion.div 
              layout
              className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-6 shadow-2xl shadow-black/30 overflow-hidden"
            >
              {/* Effet glass brillant */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
              
              <AnimatePresence mode="wait">
                {step === 'review' && (
                  <motion.div key="review" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative z-10">
                    <h2 className="text-lg font-bold text-white mb-1">Your Information</h2>
                    <p className="text-white/30 text-xs mb-5">Fill in your details</p>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                        </div>
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                        </div>
                      </div>
                      <div className="relative group">
                        <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                      </div>
                      <div className="relative group">
                        <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg>
                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/></svg>
                          <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business Name" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                        </div>
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                          <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white text-sm focus:border-blue-400/50 focus:outline-none transition-all duration-300 appearance-none">
                            <option value="llc">LLC</option><option value="corporation">Corporation</option><option value="nonprofit">Non-Profit</option>
                          </select>
                        </div>
                      </div>
                      <div className="relative group">
                        <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <input type="text" value={state.toUpperCase()} disabled className="w-full pl-10 pr-3 py-2.5 bg-white/[0.01] border border-white/[0.04] rounded-xl text-white/30 text-sm cursor-not-allowed" />
                      </div>
                      <label className="flex items-start gap-2 cursor-pointer group">
                        <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/[0.05] accent-blue-500" />
                        <span className="text-white/30 text-xs group-hover:text-white/50 transition">I agree to the <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">Terms</Link> and <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link></span>
                      </label>
                      <div className="flex items-center gap-2 text-white/15 text-[10px] pt-1"><span>We accept:</span> <span className="text-white/25">PayPal</span> • <span className="text-white/25">Stripe</span> • <span className="text-white/25">Visa</span> • <span className="text-white/25">Mastercard</span> • <span className="text-white/25">Bank</span></div>
                      <button onClick={() => setStep('payment')} disabled={!agreeTerms} className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-white font-semibold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2 group">
                        Continue to Payment
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </button>
                    </div>
                    {/* Cartes acceptées */}
                    <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/[0.04]">
                      
                      {acceptedCards.map(card => (
                        <div key={card.name} className="opacity-40 hover:opacity-70 transition" title={card.name}>{card.icon}</div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div key="payment" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative z-10">
                    <h2 className="text-lg font-bold text-white mb-1">Payment Details</h2>
                    <p className="text-white/30 text-xs mb-5">Secure payment via encrypted connection</p>
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      {[
                        { id: 'card', label: 'Card', icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>) },
                        { id: 'paypal', label: 'PayPal', icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.526l-1.793 9.358a.628.628 0 0 1-.618.494h-.04v.154z"/></svg>) },
                        { id: 'apple', label: 'Apple', icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>) },
                      ].map(m => (
                        <button key={m.id} onClick={() => setPaymentMethod(m.id)} className={`py-2.5 px-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all duration-300 ${
                          paymentMethod === m.id ? 'bg-blue-500/20 border-blue-400/50 text-blue-300 shadow-lg shadow-blue-500/10 scale-[1.02]' : 'bg-white/[0.01] border-white/[0.04] text-white/30 hover:text-white/60 hover:bg-white/[0.03]'
                        }`}>
                          {m.icon} {m.label}
                        </button>
                      ))}
                    </div>
                    {paymentMethod === 'card' && (
                      <div className="space-y-3">
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/></svg>
                          <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Cardholder Name" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                        </div>
                        <div className="relative group">
                          <svg className="absolute left-3.5 top-3 w-4 h-4 text-white/15 group-focus-within:text-blue-400 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/></svg>
                          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="4242 4242 4242 4242" className="w-full pl-10 pr-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} placeholder="MM / YY" className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                          <div className="relative group">
                            <input type="text" value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} placeholder="CVC" className="w-full px-3 py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:bg-white/[0.04] focus:outline-none transition-all duration-300" />
                            <svg className="absolute right-3 top-3 w-4 h-4 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                          </div>
                        </div>
                      </div>
                    )}
                    <button onClick={handlePay} className="w-full mt-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl text-white font-semibold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      Pay ${total}
                    </button>
                    <div className="flex items-center justify-center gap-2 mt-4 text-white/15 text-[10px]">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Secured by 256-bit SSL encryption
                    </div>
                  </motion.div>
                )}

                {step === 'processing' && (
                  <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 flex flex-col items-center justify-center py-16">
                    <div className="relative">
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-14 h-14 rounded-full border-2 border-blue-400 border-t-transparent" />
                      <svg className="absolute inset-0 w-14 h-14 p-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-4 mb-1">Processing Payment</h3>
                    <p className="text-white/25 text-xs">Please wait a moment...</p>
                    <div className="mt-4 w-48 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2.3, ease: 'easeInOut' }} className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                    </div>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/10">
                      <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-1">Payment Successful!</h3>
                    <p className="text-emerald-400/60 text-xs font-mono mb-3">TXN: LIM-{Date.now().toString(36).toUpperCase()}</p>
                    <p className="text-white/30 text-xs mb-6 max-w-xs">{selectedPlan.name} Plan is now active. Confirmation sent to your email.</p>
                    <div className="flex gap-3">
                      <Link href="/dashboard" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-xs shadow-lg shadow-blue-500/20 transition">Go to Dashboard</Link>
                      <Link href="/" className="px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-xl text-white/50 hover:text-white text-xs transition">Back to Home</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Droite - Order Summary Glass */}
          <div className="lg:col-span-2">
            <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-5 shadow-2xl shadow-black/30 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Order Summary
              </h3>
              
              <div className="bg-white/[0.03] rounded-2xl p-3 mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white text-sm font-medium">{selectedPlan.name} Plan</span>
                  <span className="bg-blue-500/15 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full">SAVE ${selectedPlan.originalPrice - selectedPlan.price}</span>
                </div>
                <p className="text-white/25 text-xs">{state.toUpperCase()} • {businessType?.toUpperCase() || 'LLC'} Formation</p>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between"><span className="text-white/30">Subtotal</span><span className="text-white/50">${selectedPlan.price}</span></div>
                <div className="flex justify-between"><span className="text-white/30">State Filing Fee</span><span className="text-white/50">${selectedPlan.stateFee}</span></div>
                <div className="flex justify-between text-emerald-400/80"><span>Launch Discount</span><span>-${selectedPlan.originalPrice - selectedPlan.price}</span></div>
              </div>

              <div className="border-t border-white/[0.05] pt-3 mb-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-white text-sm font-semibold">Total Today</span>
                  <div className="text-right">
                    <span className="text-blue-400 font-bold text-xl">${total}</span>
                    <p className="text-white/20 text-[10px] line-through">${selectedPlan.originalPrice + selectedPlan.stateFee}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/[0.03] border border-blue-500/[0.08] rounded-2xl p-3 mb-3">
                <p className="text-blue-300/60 text-[10px] font-medium uppercase tracking-wider mb-2">✨ What's Included</p>
                <ul className="space-y-1">
                  {selectedPlan.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/40 text-xs">
                      <svg className="w-3 h-3 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                  {selectedPlan.features.length > 5 && (
                    <li className="text-white/20 text-xs pl-5">+{selectedPlan.features.length - 5} more features</li>
                  )}
                </ul>
              </div>

              <div className="space-y-1.5 text-white/15 text-[10px]">
                <div className="flex items-center gap-1.5"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>256-bit SSL Encrypted</div>
                <div className="flex items-center gap-1.5"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4"/></svg>30-Day Money Back Guarantee</div>
                <div className="flex items-center gap-1.5"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>24-48 Hour Processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
