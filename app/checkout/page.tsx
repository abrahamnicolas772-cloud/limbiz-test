'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 'review' | 'payment' | 'processing' | 'success'

function CheckoutContent() {
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

  const acceptedCards = [
    { name: 'Visa', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#1a1f71"/></svg>) },
    { name: 'Mastercard', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#252525"/><circle cx="9" cy="8" r="4" fill="#eb001b"/><circle cx="15" cy="8" r="4" fill="#f79e1b" opacity="0.8"/></svg>) },
    { name: 'Amex', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#006fcf"/></svg>) },
    { name: 'Discover', icon: (<svg className="w-8 h-5" viewBox="0 0 24 16"><rect width="24" height="16" rx="2" fill="#ff6000"/></svg>) },
  ]

  return (
    <div className="min-h-screen bg-[#060b14] relative overflow-hidden flex items-center justify-center py-8 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a30] to-[#0b1830]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <Link href="/pricing" className="text-white/30 hover:text-white/60 text-xs flex items-center gap-1.5 transition">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Back
          </Link>
          <div className="flex items-center gap-2">
            <img src="/LOGO1.png" alt="LIMBIZ" className="h-10 w-auto" />
            <span className="text-white/20 text-[10px] uppercase tracking-wider">Secure Checkout</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <motion.div layout className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <AnimatePresence mode="wait">
                {step === 'review' && (
                  <motion.div key="review" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
                    <h2 className="text-base font-bold text-white mb-0.5">Your Information</h2>
                    <p className="text-white/30 text-xs mb-3">Fill in your details</p>
                    <div className="space-y-2.5">
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                      </div>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Business Name" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                        <input type="text" value={state.toUpperCase()} disabled className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white/60 text-sm" />
                      </div>
                      <div className="flex items-center gap-2 text-white/15 text-[10px] pt-1"><span>We accept:</span> PayPal • Stripe • Visa • Mastercard • Bank</div>
                      <label className="flex items-start gap-2 cursor-pointer"><input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="mt-0.5 accent-blue-500" /><span className="text-white/30 text-xs">I agree to the <Link href="/terms" className="text-blue-400 underline">Terms</Link></span></label>
                      <button onClick={() => setStep('payment')} disabled={!agreeTerms} className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 rounded-xl text-white font-semibold text-sm transition">Continue to Payment →</button>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/[0.04]">
                      {acceptedCards.map(card => (<div key={card.name} className="opacity-40 hover:opacity-70 transition" title={card.name}>{card.icon}</div>))}
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div key="payment" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
                    <h2 className="text-base font-bold text-white mb-0.5">Payment</h2>
                    <p className="text-white/30 text-xs mb-3">Secure payment</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['card','paypal','apple'].map(m => (
                        <button key={m} onClick={() => setPaymentMethod(m)} className={`py-2 rounded-xl border text-xs font-medium transition ${paymentMethod === m ? 'bg-blue-500/20 border-blue-400/50 text-blue-300' : 'bg-white/[0.01] border-white/[0.04] text-white/30'}`}>{m==='card'?'💳 Card':m==='paypal'?'🅿️ PayPal':'🍎 Apple'}</button>
                      ))}
                    </div>
                    {paymentMethod === 'card' && (
                      <div className="space-y-3">
                        <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Cardholder Name" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="4242 4242 4242 4242" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} placeholder="MM/YY" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                          <input type="text" value={cardCvc} onChange={(e) => setCardCvc(e.target.value)} placeholder="CVC" className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white placeholder-white/15 text-sm focus:border-blue-400/50 focus:outline-none transition" />
                        </div>
                      </div>
                    )}
                    <button onClick={handlePay} className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm transition">Pay ${total}</button>
                  </motion.div>
                )}

                {step === 'processing' && (
                  <motion.div key="processing" initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col items-center justify-center py-16">
                    <motion.div animate={{rotate:360}} transition={{duration:1,repeat:Infinity,ease:'linear'}} className="w-12 h-12 rounded-full border-2 border-blue-400 border-t-transparent mb-4" />
                    <h3 className="text-lg font-bold text-white">Processing...</h3>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div key="success" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">Payment Successful!</h3>
                    <p className="text-white/40 text-sm mb-6">{selectedPlan.name} Plan is now active.</p>
                    <div className="flex gap-3">
                      <Link href="/dashboard" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-xs transition">Dashboard</Link>
                      <Link href="/" className="px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-xl text-white/50 text-xs transition">Home</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl p-5">
              <h3 className="text-white font-semibold text-sm mb-3">Order Summary</h3>
              <div className="flex items-center justify-between mb-1"><span className="text-white text-sm">{selectedPlan.name} Plan</span><span className="bg-blue-500/15 text-blue-300 text-[10px] px-2 py-0.5 rounded-full">SAVE ${selectedPlan.originalPrice - selectedPlan.price}</span></div>
              <p className="text-white/25 text-xs mb-3">{state.toUpperCase()}</p>
              <div className="space-y-1.5 mb-3 text-sm">
                <div className="flex justify-between"><span className="text-white/30">Subtotal</span><span className="text-white/50">${selectedPlan.price}</span></div>
                <div className="flex justify-between"><span className="text-white/30">State Fee</span><span className="text-white/50">${selectedPlan.stateFee}</span></div>
                <div className="flex justify-between text-emerald-400"><span>Discount</span><span>-${selectedPlan.originalPrice - selectedPlan.price}</span></div>
              </div>
              <div className="border-t border-white/[0.05] pt-2 mb-3"><div className="flex justify-between"><span className="text-white font-semibold">Total</span><span className="text-blue-400 font-bold text-lg">${total}</span></div></div>
              <ul className="space-y-1 mb-3">
                {selectedPlan.features.slice(0,5).map((f,i)=>(<li key={i} className="flex items-center gap-1.5 text-white/40 text-xs"><span className="text-blue-400">✓</span>{f}</li>))}
              </ul>
              <div className="flex gap-3 text-white/15 text-[10px]"><span>🔒 SSL</span><span>↩️ Guarantee</span><span>⚡ 24-48h</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060b14] flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /></div>}>
      <CheckoutContent />
    </Suspense>
  )
}
