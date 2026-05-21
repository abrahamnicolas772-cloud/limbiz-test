'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const plans = {
  monthly: {
    starter: { price: '$49', desc: 'Perfect for startups', features: ['1 Project', 'Basic Analytics', 'Email Support'] },
    pro: { price: '$99', desc: 'For growing companies', features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Integrations'] },
    enterprise: { price: 'Custom', desc: 'Tailored solutions', features: ['SLA Guarantee', 'Dedicated Team', 'On‑premise Option', '24/7 VIP Support'] },
  },
  yearly: {
    starter: { price: '$490', desc: 'Save 16%', features: ['1 Project', 'Basic Analytics', 'Email Support'] },
    pro: { price: '$990', desc: 'Save 16%', features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Integrations'] },
    enterprise: { price: 'Custom', desc: 'Priority support', features: ['SLA Guarantee', 'Dedicated Team', 'On‑premise Option', '24/7 VIP Support'] },
  },
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Flexible <span className="text-blue-500">Pricing</span></h2>
          <p className="mt-3 text-white/50 text-sm uppercase tracking-wider">Choose the plan that fits your business</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/50'}`}>Monthly</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative w-14 h-7 rounded-full bg-white/10 border border-white/20 transition-all"><div className={`absolute top-0.5 w-6 h-6 rounded-full bg-blue-500 transition-all ${isYearly ? 'translate-x-7' : 'translate-x-0.5'}`} /></button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/50'}`}>Yearly <span className="text-blue-400 text-xs">(Save 16%)</span></span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {['starter', 'pro', 'enterprise'].map((planKey, idx) => {
            const plan = isYearly ? plans.yearly[planKey as keyof typeof plans.yearly] : plans.monthly[planKey as keyof typeof plans.monthly]
            const isPro = planKey === 'pro'
            return (
              <motion.div key={planKey} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-neon ${isPro ? 'border-2 border-blue-500/50 relative' : 'border border-white/10'}`}>
                {isPro && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">Most Popular</div>}
                <h3 className="text-2xl font-bold text-white capitalize">{planKey}</h3>
                <div className="mt-4"><span className="text-4xl font-bold text-white">{plan.price}</span>{planKey !== 'enterprise' && <span className="text-white/50 ml-1">/{isYearly ? 'year' : 'month'}</span>}</div>
                <p className="text-white/40 text-sm mt-1">{plan.desc}</p>
                <ul className="mt-6 space-y-3">{plan.features.map((feature, i) => (<li key={i} className="flex items-center gap-2 text-white/70 text-sm"><FiCheckCircle className="text-blue-500 w-4 h-4" /> {feature}</li>))}</ul>
                <button className={`mt-8 w-full py-2.5 rounded-full font-semibold transition-all ${isPro ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-glow' : 'border border-white/20 text-white hover:bg-white/10'}`}>{planKey === 'enterprise' ? 'Contact Sales' : 'Get Started'} <FiArrowRight className="inline ml-1 w-4 h-4" /></button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}