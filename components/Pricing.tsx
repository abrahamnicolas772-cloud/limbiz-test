'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'

const plans = {
  monthly: {
    starter: { price: '$', desc: 'Perfect for startups', features: [' Project', 'Basic Analytics', 'Email Support'] },
    pro: { price: '$', desc: 'For growing companies', features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Integrations'] },
    enterprise: { price: 'Custom', desc: 'Tailored solutions', features: ['SLA Guarantee', 'Dedicated Team', 'On‑premise Option', '/ VIP Support'] },
  },
  yearly: {
    starter: { price: '$', desc: 'Save %', features: [' Project', 'Basic Analytics', 'Email Support'] },
    pro: { price: '$', desc: 'Save %', features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Integrations'] },
    enterprise: { price: 'Custom', desc: 'Priority support', features: ['SLA Guarantee', 'Dedicated Team', 'On‑premise Option', '/ VIP Support'] },
  },
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-xl -z-" />
      <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-xl -z-" />

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="text-center mb-">
          <h className="text-xl md:text-xl font-bold tracking-tight">Flexible <span className="text-blue-">Pricing</span></h>
          <p className="mt- text-white/ text-sm uppercase tracking-wider">Choose the plan that fits your business</p>
        </div>

        <div className="flex justify-center items-center gap- mb-">
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-white/'}`}>Monthly</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative w- h- rounded-full bg-white/ border border-white/ transition-all"><div className={`absolute top-. w- h- rounded-full bg-blue- transition-all ${isYearly ? 'translate-x-' : 'translate-x-.'}`} /></button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-white/'}`}>Yearly <span className="text-blue- text-xs">(Save %)</span></span>
        </div>

        <div className="grid md:grid-cols- gap-">
          {['starter', 'pro', 'enterprise'].map((planKey, idx) => {
            const plan = isYearly ? plans.yearly[planKey as keyof typeof plans.yearly] : plans.monthly[planKey as keyof typeof plans.monthly]
            const isPro = planKey === 'pro'
            return (
              <motion.div key={planKey} initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: idx  . }} className={`glass-card p- rounded-xl transition-all duration- hover:shadow-neon ${isPro ? 'border- border-blue-/ relative' : 'border border-white/'}`}>
                {isPro && <div className="absolute -top- left-/ -translate-x-/ bg-blue- text-white text-xs font-semibold px- py- rounded-full shadow-lg">Most Popular</div>}
                <h className="text-xl font-bold text-white capitalize">{planKey}</h>
                <div className="mt-"><span className="text-xl font-bold text-white">{plan.price}</span>{planKey !== 'enterprise' && <span className="text-white/ ml-">/{isYearly ? 'year' : 'month'}</span>}</div>
                <p className="text-white/ text-sm mt-">{plan.desc}</p>
                <ul className="mt- space-y-">{plan.features.map((feature, i) => (<li key={i} className="flex items-center gap- text-white/ text-sm"><FiCheckCircle className="text-blue- w- h-" /> {feature}</li>))}</ul>
                <button className={`mt- w-full py-. rounded-full font-semibold transition-all ${isPro ? 'bg-blue- hover:bg-blue- text-white shadow-glow' : 'border border-white/ text-white hover:bg-white/'}`}>{planKey === 'enterprise' ? 'Contact Sales' : 'Get Started'} <FiArrowRight className="inline ml- w- h-" /></button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}