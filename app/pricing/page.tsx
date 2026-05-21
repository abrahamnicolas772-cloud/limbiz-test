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
    price: 499,
    priceYearly: 449,
    desc: 'Idéal pour démarrer votre activité',
    features: [
      'Formation LLC complète',
      'Obtenez un EIN',
      'Conseils juridiques de base',
      'Support email 5j/7',
      'Accès aux documents légaux',
      'Template d\'accord d\'exploitation'
    ],
    cta: 'Commencer',
    popular: false,
    icon: <FiBriefcase size={24} />,
    color: 'from-blue-600 to-blue-400'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 999,
    priceYearly: 899,
    desc: 'Pour les entrepreneurs sérieux',
    features: [
      'Tout ce qui est dans Starter',
      'Crédit professionnel',
      'E-commerce setup complet',
      'Support prioritaire 7j/7',
      'Conseils personnalisés mensuels',
      'Template de business plan',
      'Dépôt de marque inclus'
    ],
    cta: 'Choisir Pro',
    popular: true,
    icon: <FiStar size={24} />,
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: null,
    priceYearly: null,
    desc: 'Solution sur mesure',
    features: [
      'Tout ce qui est dans Professional',
      'Dédié account manager',
      'Support 24/7 téléphonique',
      'Stratégie personnalisée',
      'Audit fiscal complet',
      'Formation équipe',
      'API & intégrations sur mesure'
    ],
    cta: 'Nous contacter',
    popular: false,
    icon: <FiUsers size={24} />,
    color: 'from-blue-700 to-purple-700'
  }
]

const consultations = [
  { 
    name: 'Consultation Découverte', 
    duration: '30 min', 
    price: 'Gratuit', 
    desc: 'Premier échange pour cerner vos besoins',
    icon: <FiCalendar size={20} />,
    popular: true
  },
  { 
    name: 'Consultation Stratégique', 
    duration: '60 min', 
    price: '$199', 
    desc: 'Analyse approfondie et plan d\'action',
    icon: <FiTrendingUp size={20} />,
    popular: false
  },
  { 
    name: 'Pack Mentor', 
    duration: '3 x 60 min', 
    price: '$499', 
    desc: 'Accompagnement personnalisé sur 3 mois',
    icon: <FiUsers size={20} />,
    popular: false
  }
]

const faqs = [
  { q: "Quelle est la différence entre les formules ?", a: "La formule Starter est idéale pour démarrer, Professional inclut le crédit pro et l'e-commerce, Enterprise est une solution sur mesure avec accompagnement dédié." },
  { q: "Puis-je passer à la formule supérieure ?", a: "Oui, vous pouvez évoluer vers une formule supérieure à tout moment, sans frais supplémentaires." },
  { q: "Y a-t-il des frais cachés ?", a: "Non, tous nos tarifs sont transparents. Ce que vous voyez est ce que vous payez." },
  { q: "Quels sont les délais de création ?", a: "La création d'une LLC prend généralement 4 à 6 semaines selon l'état." },
  { q: "Proposez-vous des paiements échelonnés ?", a: "Oui, nous proposons des plans de paiement en 3 ou 6 fois sans frais." },
  { q: "Que se passe-t-il après mon achat ?", a: "Un expert vous contacte sous 24h pour lancer les démarches." }
]

export default function PricingPage() {
  const router = useRouter()
  const [isYearly, setIsYearly] = useState(false)
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)
  const [processingPlan, setProcessingPlan] = useState<string | null>(null)

  const handlePayment = async (plan: typeof plans[0]) => {
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
      console.error('Paiement échoué', error)
      alert(`❌ ${error.message || 'Erreur lors du paiement. Vérifiez que la clé secrète Stripe est configurée.'}`)
    } finally {
      setProcessingPlan(null)
    }
  }

  const scrollToContact = () => router.push('/#contact')

  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-black relative overflow-hidden">
        {/* Background premium */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow animation-delay-1500" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow animation-delay-3000" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        </div>

        {/* Hero section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Tarifs transparents</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                Des formules pour <span className="text-blue-500">tous les projets</span>
              </h1>
              <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
                Choisissez l’accompagnement qui correspond à vos besoins. Pas de surprise, juste de la valeur.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bascule mensuel / annuel */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <span className={`text-sm font-medium transition ${!isYearly ? 'text-white' : 'text-white/40'}`}>Paiement mensuel</span>
          <button onClick={() => setIsYearly(!isYearly)} className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 transition-all duration-300 focus:outline-none">
            <div className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-1'}`} />
          </button>
          <span className={`text-sm font-medium transition ${isYearly ? 'text-white' : 'text-white/40'}`}>
            Paiement annuel <span className="text-green-400 text-xs">(-10%)</span>
          </span>
        </div>

        {/* Grille des prix */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, idx) => {
                const displayPrice = plan.price ? (isYearly ? plan.priceYearly : plan.price) : null
                const savings = plan.price ? Math.round((plan.price - (plan.priceYearly || 0)) / plan.price * 100) : 0
                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                      plan.popular 
                        ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 shadow-neon' 
                        : 'glass-card border border-white/10'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-10">
                        🌟 Le plus populaire
                      </div>
                    )}
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4 shadow-lg`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-white/40 text-sm mt-1">{plan.desc}</p>
                      <div className="mt-4">
                        {displayPrice ? (
                          <>
                            <span className="text-4xl font-bold text-white">{displayPrice}</span>
                            <span className="text-white/50 text-sm"> / {isYearly ? 'an' : 'mois'}</span>
                            {isYearly && savings > 0 && <span className="block text-green-400 text-xs mt-1">Économisez {savings}%</span>}
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-white">Sur mesure</span>
                        )}
                      </div>
                      <ul className="mt-6 space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                            <FiCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={14} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handlePayment(plan)}
                        disabled={processingPlan === plan.id}
                        className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-lg shadow-blue-500/30'
                            : 'border border-white/20 text-white hover:bg-white/10'
                        } ${processingPlan === plan.id ? 'opacity-50 cursor-wait' : ''}`}
                      >
                        {processingPlan === plan.id ? 'Chargement...' : plan.cta}
                        {!processingPlan && plan.cta !== 'Nous contacter' && <FiArrowRight className="inline ml-1" size={16} />}
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Consultations individuelles */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">Consultations <span className="text-blue-500">individuelles</span></h2>
      <p className="text-white/50 text-sm mt-2">Une approche personnalisée pour répondre à vos besoins spécifiques</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {consultations.map((consult, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-neon ${
            consult.popular ? 'border border-blue-500/40' : 'border border-white/10'
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">{consult.icon}</div>
            {consult.popular && <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Recommandé</span>}
          </div>
          <h3 className="text-xl font-bold text-white">{consult.name}</h3>
          <p className="text-white/40 text-sm mt-1">{consult.duration}</p>
          <p className="text-2xl font-bold text-blue-400 mt-2">{consult.price}</p>
          <p className="text-white/50 text-sm mt-2">{consult.desc}</p>
          <button 
            onClick={() => router.push('/contact')} 
            className="mt-4 w-full py-2 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/10 transition"
          >
            Réserver <FiCalendar className="inline ml-1" size={14} />
          </button>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Bundle sur mesure */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-premium p-8 md:p-10 rounded-3xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FiShoppingCart size={28} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Besoin d’un pack sur mesure ?</h3>
              <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">Combinez plusieurs services et bénéficiez d’une réduction allant jusqu’à 20%.</p>
              <button onClick={scrollToContact} className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
                Demander un devis personnalisé <FiArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <FiHelpCircle className="text-blue-400" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">Questions fréquentes</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)} className="w-full p-5 text-left flex justify-between items-center">
                    <span className="font-semibold text-white">{faq.q}</span>
                    <FiArrowRight className={`text-blue-400 transition-transform duration-300 ${selectedFaq === idx ? 'rotate-90' : ''}`} size={18} />
                  </button>
                  {selectedFaq === idx && (
                    <div className="px-5 pb-5">
                      <p className="text-white/50 text-sm">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold">Vous avez un projet complexe ?</h3>
              <p className="mt-2 text-white/50 text-sm">Discutons de vos objectifs et trouvons la solution idéale ensemble.</p>
              <button onClick={scrollToContact} className="mt-5 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition">
                <FiMessageSquare size={18} /> Contacter un expert
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}