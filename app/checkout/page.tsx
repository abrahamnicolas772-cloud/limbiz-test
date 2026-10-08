'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { getStateBySlug, calculatePrice, getStateFeeForMethod, calculateTennesseeFee, getDBAFee, packages } from '@/lib/pricing-config'
import { motion, AnimatePresence } from 'framer-motion'

type Step = 'review' | 'payment' | 'processing' | 'success'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan') || 'basic'
  const state = searchParams.get('state') || 'florida'
  const service = searchParams.get('service') || ''
  const bookPrice = parseFloat(searchParams.get('price') || '9.99')
  const bookFormat = searchParams.get('format') || 'eBook'
  const needsDBA = searchParams.get('dba') === 'yes'
  
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
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')
  const [filingMethod, setFilingMethod] = useState<string>('')
  const [memberCount, setMemberCount] = useState<number>(1)

  const stateSlug = searchParams.get('state') || 'florida'
  const stateConfig = getStateBySlug(stateSlug)
  const stateFee = (() => {
    if (!stateConfig) return 125
    if (stateConfig.code === 'TN') return calculateTennesseeFee(memberCount)
    if (filingMethod && stateConfig.method_state_fee_usd && stateConfig.method_state_fee_usd[filingMethod]) {
      return stateConfig.method_state_fee_usd[filingMethod]
    }
    return stateConfig.baseline_initial_state_fee_usd
  })()

  const isBook = service.includes('Edition')
  const bookFeatures = bookFormat === 'eBook'
    ? ['Instant Access', 'Digital Download', 'Read on Any Device', 'Lifetime Access']
    : bookFormat === 'Paperback'
    ? ['Free Shipping', 'Physical Book', 'Ships in 3-5 Days', 'Printed Edition']
    : ['Free Shipping', 'Premium Hardcover', 'Ships in 3-5 Days', 'Collector Edition']
  
  // Pou liv
  const bookPlan = { 
    name: service, 
    price: bookPrice, 
    component: bookPrice, 
    stateFee: 0, 
    features: bookFeatures 
  }
  
  // Pou plan biznis - itilize pricing config
  const packageConfig = packages[plan] || packages.basic
  const componentPrice = packageConfig.package_component_usd
  const businessPlan = {
    name: packageConfig.name,
    component: componentPrice,
    stateFee: stateFee,
    price: componentPrice + stateFee,
    features: packageConfig.additional_services.map((s: any) => s.label_en)
  }
  
  const selectedPlan = isBook ? bookPlan : businessPlan
  const dbaFee = needsDBA && !isBook && stateConfig ? getDBAFee(stateConfig.code) : 0
  const total = isBook ? bookPrice : (businessPlan.price + dbaFee)
  
  // Detèmine si gen unresolved required inputs
  const hasUnresolvedInputs = !isBook && stateConfig && (
    stateConfig.required_inputs_before_final_quote.some(input => {
      if (input === 'filing_method') return !filingMethod
      if (input === 'member_count') return !memberCount || memberCount < 1
      return true // Lòt inputs pa rezoud
    }) ||
    (!stateConfig.baseline_is_final_checkout_amount && stateConfig.unresolved_outside_fee_may_apply)
  )
  const component = isBook ? bookPrice : businessPlan.component
  const displayStateFee = isBook ? 0 : businessPlan.stateFee


  
  const applyPromo = () => {
    const validCodes: Record<string, number> = {
      'LIMBIZ10': 10,
      'LIMBIZ20': 20,
      'WELCOME15': 15,
      'BOOK5': 5,
    }
    if (validCodes[promoCode.toUpperCase()]) {
      setPromoApplied(true)
      setPromoError('')
    } else {
      setPromoError('Invalid promo code')
      setPromoApplied(false)
    }
  }

  const handlePay = async () => {
    setStep('processing')

    if (paymentMethod === 'paypal') {
      try {
        const response = await fetch('/api/payments/paypal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: total, currency: 'USD' }),
        })

        const data = await response.json()

        if (data.approvalUrl) {
          window.location.href = data.approvalUrl
        } else {
          setStep('payment')
          alert('PayPal error: ' + (data.error || 'Unknown error'))
        }
      } catch (error) {
        setStep('payment')
        alert('PayPal connection failed')
      }
    } else {
      setTimeout(() => setStep('success'), 2500)
    }
  }

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
                    {service && (
                      <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <p className="text-blue-300 text-xs font-semibold">Selected Service</p>
                        <p className="text-white text-sm">{service}</p>
                      </div>
                    )}
                    {!isBook && stateConfig && stateConfig.required_inputs_before_final_quote && stateConfig.required_inputs_before_final_quote.length > 0 && (
                      <div className="mb-4 p-3 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                        <p className="text-amber-300 text-[10px] uppercase tracking-wider font-semibold mb-2">Required for accurate quote</p>
                        {stateConfig.required_inputs_before_final_quote.includes('filing_method') && stateConfig.method_state_fee_usd && (
                          <div className="mb-2">
                            <p className="text-white/50 text-xs mb-2">Filing method:</p>
                            <div className="flex flex-wrap gap-2">
                              {Object.keys(stateConfig.method_state_fee_usd).map((m) => (
                                <button
                                  key={m}
                                  type="button"
                                  onClick={() => setFilingMethod(m)}
                                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${filingMethod === m ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300' : 'bg-white/[0.02] border border-white/[0.06] text-white/50'}`}
                                >
                                  {m.replace(/_/g, ' ').toUpperCase()} — ${stateConfig.method_state_fee_usd?.[m]}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                        {stateConfig.required_inputs_before_final_quote.includes('member_count') && (
                          <div>
                            <p className="text-white/50 text-xs mb-2">Number of LLC members:</p>
                            <input
                              type="number"
                              min="1"
                              value={memberCount}
                              onChange={(e) => setMemberCount(parseInt(e.target.value) || 1)}
                              className="w-24 px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-sm focus:border-blue-400/50 focus:outline-none"
                            />
                          </div>
                        )}
                      </div>
                    )}
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
                        <input type="text" value={isBook ? "Book Purchase" : state.toUpperCase()} disabled className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white/60 text-sm" />
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
                    <button onClick={hasUnresolvedInputs ? () => window.location.href = '/contact?type=quote' : handlePay} className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm transition ${hasUnresolvedInputs ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}>
                      {hasUnresolvedInputs ? 'Request a Quote' : `Pay ${total}`}
                    </button>
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
                    <p className="text-white/40 text-sm mb-6">{service || (selectedPlan.name + " Plan")} is now active.</p>
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
              <div className="flex items-center justify-between mb-1"><span className="text-white text-sm">{service || (selectedPlan.name + " Plan")}</span>{!isBook && <span className="bg-blue-500/15 text-blue-300 text-[10px] px-2 py-0.5 rounded-full">Package + State Fee</span>}</div>
              <p className="text-white/25 text-xs mb-3">{isBook ? "Book Purchase" : state.toUpperCase()}</p>
              <div className="space-y-1.5 mb-3 text-sm">
                {isBook && (
                  <div className="mb-3 pb-3 border-b border-white/[0.05]">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo Code"
                        className="flex-1 px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white text-xs placeholder-white/30 focus:border-blue-400/50 focus:outline-none"
                      />
                      <button
                        onClick={applyPromo}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-xs font-semibold transition"
                      >
                        Apply
                      </button>
                    </div>
                    {promoError && <p className="text-red-400 text-[10px] mt-1">{promoError}</p>}
                    {promoApplied && <p className="text-emerald-400 text-[10px] mt-1">✓ Promo code applied!</p>}
                  </div>
                )}
                <div className="flex justify-between"><span className="text-white/30">{isBook ? "Book Price" : "Package Component"}</span><span className="text-white/50">${component}</span></div>
                {!isBook && <div className="flex justify-between"><span className="text-white/30">State Fee ({stateConfig?.code})</span><span className="text-white/50">${displayStateFee}</span></div>}
                {promoApplied && <div className="flex justify-between text-emerald-400"><span>Promo Discount</span><span>-10%</span></div>}
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
