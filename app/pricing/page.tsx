'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  FiCheckCircle, FiArrowRight, FiMessageSquare, FiHelpCircle, 
  FiStar, FiBriefcase, FiShoppingCart, FiTrendingUp, FiUsers, FiCalendar
} from 'react-icons/fi'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: ,
    priceYearly: ,
    desc: 'Id√al pour d√marrer votre activit√',
    features: [
      'Formation LLC compl√®te',
      'Obtenez un EIN',
      'Conseils juridiques de base',
      'Support email j/',
      'Acc√®s aux documents l√gaux',
      'Template d\'accord d\'exploitation'
    ],
    cta: 'Commencer',
    popular: false,
    icon: <FiBriefcase size={} />,
    color: 'from-blue- to-blue-'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: ,
    priceYearly: ,
    desc: 'Pour les entrepreneurs s√rieux',
    features: [
      'Tout ce qui est dans Starter',
      'Cr√dit professionnel',
      'E-commerce setup complet',
      'Support prioritaire j/',
      'Conseils personnalis√s mensuels',
      'Template de business plan',
      'D√p√¥t de marque inclus'
    ],
    cta: 'Choisir Pro',
    popular: true,
    icon: <FiStar size={} />,
    color: 'from-purple- to-blue-'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    priceYearly: null,
    desc: 'Solution sur mesure',
    features: [
      'Tout ce qui est dans Professional',
      'D√di√ account manager',
      'Support / t√l√phonique',
      'Strat√gie personnalis√e',
      'Audit fiscal complet',
      'Formation √quipe',
      'API & int√grations sur mesure'
    ],
    cta: 'Nous contacter',
    popular: false,
    icon: <FiUsers size={} />,
    color: 'from-blue- to-purple-'
  }
]

const consultations = [
  { 
    name: 'Consultation D√couverte', 
    duration: ' min', 
    price: 'Gratuit', 
    desc: 'Premier √change pour cerner vos besoins',
    icon: <FiCalendar size={} />,
    popular: true
  },
  { 
    name: 'Consultation Strat√gique', 
    duration: ' min', 
    price: '$', 
    desc: 'Analyse approfondie et plan d\'action',
    icon: <FiTrendingUp size={} />,
    popular: false
  },
  { 
    name: 'Pack Mentor', 
    duration: ' x  min', 
    price: '$', 
    desc: 'Accompagnement personnalis√ sur  mois',
    icon: <FiUsers size={} />,
    popular: false
  }
]

const faqs = [
  { q: "Quelle est la diff√rence entre les formules ?", a: "La formule Starter est id√ale pour d√marrer, Professional inclut le cr√dit pro et l'e-commerce, Enterprise est une solution sur mesure avec accompagnement d√di√." },
  { q: "Puis-je passer √† la formule sup√rieure ?", a: "Oui, vous pouvez √voluer vers une formule sup√rieure √† tout moment, sans frais suppl√mentaires." },
  { q: "Y a-t-il des frais cach√s ?", a: "Non, tous nos tarifs sont transparents. Ce que vous voyez est ce que vous payez." },
  { q: "Quels sont les d√lais de cr√ation ?", a: "La cr√ation d'une LLC prend g√n√ralement  √†  semaines selon l'√tat." },
  { q: "Proposez-vous des paiements √chelonn√s ?", a: "Oui, nous proposons des plans de paiement en  ou  fois sans frais." },
  { q: "Que se passe-t-il apr√®s mon achat ?", a: "Un expert vous contacte sous h pour lancer les d√marches." }
]

export default function PricingPage() {
  const router = useRouter()
  const [isYearly, setIsYearly] = useState(false)
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)
  const [processingPlan, setProcessingPlan] = useState<string | null>(null)

  const handlePayment = async (plan: typeof plans[]) => {
    if (plan.id === 'enterprise') {
      router.push('/contact')
      return
    }

    setProcessingPlan(plan.id)
    try {
      const amount = isYearly ? plan.priceYearly : plan.price
      const interval = isYearly ? 'year' : 'month'

      const response = await fetch('/api/payments/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          name: plan.name,
          amount,
          interval,
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Erreur paiement')

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error('URL de paiement manquante')
      }
    } catch (error: any) {
      console.error('Paiement √chou√', error)
      alert(`‚ùå ${error.message || 'Erreur lors du paiement. V√rifiez que la cl√ secr√®te Stripe est configur√e.'}`)
    } finally {
      setProcessingPlan(null)
    }
  }

  const scrollToContact = () => router.push('/contact')

  return (
    <>
      <Navbar />
      <main className="pt- min-h-screen bg-black relative overflow-hidden">
        {/ Background premium /}
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute inset- -z-">
          <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
          <div className="absolute top-/ left-/ w- h- bg-cyan-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
          <div className="absolute inset- bg-gradient-to-b from-transparent via-blue-/ to-transparent" />
        </div>

        {/ Hero section /}
        <section className="relative py- overflow-hidden">
          <div className="max-w-xl mx-auto px- sm:px- lg:px- text-center">
            <motion.div initial={{ opacity: , y:  }} animate={{ opacity: , y:  }}>
              <span className="text-blue- text-sm font-semibold uppercase tracking-wider">Tarifs transparents</span>
              <h className="text-xl md:text-xl lg:text-xl font-bold mt-">
                Des formules pour <span className="text-blue-">tous les projets</span>
              </h>
              <p className="mt- text-white/ text-lg max-w-xl mx-auto">
                Choisissez l‚Äôaccompagnement qui correspond √† vos besoins. Pas de surprise, juste de la valeur.
              </p>
            </motion.div>
          </div>
        </section>

        {/ Bascule mensuel / annuel /}
        <div className="flex justify-center items-center gap- mb-">
          <span className={`text-sm font-medium transition ${!isYearly ? 'text-white' : 'text-white/'}`}>Paiement mensuel</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative w- h- rounded-full bg-white/ border border-white/ transition-all duration- focus:outline-none">
            <div className={`absolute top- w- h- rounded-full bg-gradient-to-r from-blue- to-purple- transition-all duration- ${isYearly ? 'translate-x-' : 'translate-x-'}`} />
          </button>
          <span className={`text-sm font-medium transition ${isYearly ? 'text-white' : 'text-white/'}`}>
            Paiement annuel <span className="text-green- text-xs">(-%)</span>
          </span>
        </div>

        {/ Grille des prix /}
        <section className="py-">
          <div className="max-w-xl mx-auto px- sm:px- lg:px-">
            <div className="grid md:grid-cols- gap-">
              {plans.map((plan, idx) => {
                const displayPrice = plan.price ? (isYearly ? plan.priceYearly : plan.price) : null
                const savings = plan.price ? Math.round((plan.price - (plan.priceYearly || )) / plan.price  ) : 
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: , y:  }}
                    whileInView={{ opacity: , y:  }}
                    viewport={{ once: true }}
                    transition={{ delay: idx  . }}
                    className={`relative rounded-xl transition-all duration- hover:-translate-y- ${
                      plan.popular 
                        ? 'bg-gradient-to-b from-blue-/ to-purple-/ border- border-blue-/ shadow-neon' 
                        : 'glass-card border border-white/'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top- left-/ -translate-x-/ bg-gradient-to-r from-blue- to-purple- text-white text-xs font-bold px- py- rounded-full shadow-lg z-">
                        üåü Le plus populaire
                      </div>
                    )}
                    <div className="p-">
                      <div className={`w- h- rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb- shadow-lg`}>
                        {plan.icon}
                      </div>
                      <h className="text-xl font-bold text-white">{plan.name}</h>
                      <p className="text-white/ text-sm mt-">{plan.desc}</p>
                      <div className="mt-">
                        {displayPrice ? (
                          <>
                            <span className="text-xl font-bold text-white">{displayPrice}</span>
                            <span className="text-white/ text-sm"> / {isYearly ? 'an' : 'mois'}</span>
                            {isYearly && savings >  && <span className="block text-green- text-xs mt-">√âconomisez {savings}%</span>}
                          </>
                        ) : (
                          <span className="text-xl font-bold text-white">Sur mesure</span>
                        )}
                      </div>
                      <ul className="mt- space-y-">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap- text-white/ text-sm">
                            <FiCheckCircle className="text-blue- mt-. flex-shrink-" size={} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handlePayment(plan)}
                        disabled={processingPlan === plan.id}
                        className={`mt- w-full py- rounded-xl font-semibold transition-all duration- ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue- to-purple- text-white hover:scale- shadow-lg shadow-blue-/'
                            : 'border border-white/ text-white hover:bg-white/'
                        } ${processingPlan === plan.id ? 'opacity- cursor-wait' : ''}`}
                      >
                        {processingPlan === plan.id ? 'Chargement...' : plan.cta}
                        {!processingPlan && plan.cta !== 'Nous contacter' && <FiArrowRight className="inline ml-" size={} />}
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/ Consultations individuelles /}
<section className="py-">
  <div className="max-w-xl mx-auto px- sm:px- lg:px-">
    <div className="text-center mb-">
      <h className="text-xl md:text-xl font-bold">Consultations <span className="text-blue-">individuelles</span></h>
      <p className="text-white/ text-sm mt-">Une approche personnalis√e pour r√pondre √† vos besoins sp√cifiques</p>
    </div>
    <div className="grid md:grid-cols- gap-">
      {consultations.map((consult, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: , y:  }}
          whileInView={{ opacity: , y:  }}
          viewport={{ once: true }}
          transition={{ delay: idx  . }}
          className={`glass-card p- rounded-xl transition-all duration- hover:shadow-neon ${
            consult.popular ? 'border border-blue-/' : 'border border-white/'
          }`}
        >
          <div className="flex items-center gap- mb-">
            <div className="w- h- rounded-xl bg-blue-/ flex items-center justify-center">{consult.icon}</div>
            {consult.popular && <span className="text-xs bg-blue- text-white px- py-. rounded-full">Recommand√</span>}
          </div>
          <h className="text-xl font-bold text-white">{consult.name}</h>
          <p className="text-white/ text-sm mt-">{consult.duration}</p>
          <p className="text-xl font-bold text-blue- mt-">{consult.price}</p>
          <p className="text-white/ text-sm mt-">{consult.desc}</p>
          <button 
            onClick={() => router.push('/contact')} 
            className="mt- w-full py- border border-white/ rounded-xl text-white text-sm font-medium hover:bg-white/ transition"
          >
            R√server <FiCalendar className="inline ml-" size={} />
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/ Bundle sur mesure /}
        <section className="py-">
          <div className="max-w-xl mx-auto px- sm:px- lg:px-">
            <motion.div initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} className="glass-premium p- md:p- rounded-xl text-center">
              <div className="w- h- mx-auto mb- bg-gradient-to-r from-blue- to-purple- rounded-xl flex items-center justify-center shadow-lg">
                <FiShoppingCart size={} className="text-white" />
              </div>
              <h className="text-xl md:text-xl font-bold">Besoin d‚Äôun pack sur mesure ?</h>
              <p className="mt- text-white/ text-sm max-w-md mx-auto">Combinez plusieurs services et b√n√ficiez d‚Äôune r√duction allant jusqu‚Äô√† %.</p>
              <button onClick={scrollToContact} className="mt- px- py- bg-gradient-to-r from-blue- to-purple- rounded-full text-white font-semibold inline-flex items-center gap- hover:scale- transition">
                Demander un devis personnalis√ <FiArrowRight size={} />
              </button>
            </motion.div>
          </div>
        </section>

        {/ FAQ /}
        <section className="py-">
          <div className="max-w-xl mx-auto px- sm:px- lg:px-">
            <div className="flex items-center justify-center gap- mb-">
              <FiHelpCircle className="text-blue-" size={} />
              <h className="text-xl md:text-xl font-bold">Questions fr√quentes</h>
            </div>
            <div className="space-y-">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: idx  . }} className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)} className="w-full p- text-left flex justify-between items-center">
                    <span className="font-semibold text-white">{faq.q}</span>
                    <FiArrowRight className={`text-blue- transition-transform duration- ${selectedFaq === idx ? 'rotate-' : ''}`} size={} />
                  </button>
                  {selectedFaq === idx && (
                    <div className="px- pb-">
                      <p className="text-white/ text-sm">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/ Final CTA /}
        <section className="py- mb-">
          <div className="max-w-xl mx-auto px- sm:px- lg:px- text-center">
            <motion.div initial={{ opacity: , scale: . }} whileInView={{ opacity: , scale:  }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-/ to-purple-/ rounded-xl p- border border-white/">
              <h className="text-xl font-bold">Vous avez un projet complexe ?</h>
              <p className="mt- text-white/ text-sm">Discutons de vos objectifs et trouvons la solution id√ale ensemble.</p>
              <button onClick={scrollToContact} className="mt- px- py- bg-gradient-to-r from-blue- to-purple- rounded-full text-white font-semibold inline-flex items-center gap- hover:scale- transition">
                <FiMessageSquare size={} /> Contacter un expert
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}