'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FiBriefcase, FiCreditCard, FiShoppingCart, FiShield, FiTrendingUp, FiUsers, FiArrowRight, FiChevronUp } from 'react-icons/fi'

const servicesList = [
  {
    icon: <FiBriefcase size={28} />,
    title: 'Création d\'entreprise',
    desc: 'Formation LLC, EIN, conformité légale.',
    details: [
      '✅ Dépôt des statuts auprès de l\'État',
      '✅ Obtenez votre numéro EIN (IRS)',
      '✅ Rédaction de l\'accord d\'exploitation',
      '✅ Agent enregistré inclus pour 1 an',
      '✅ Kit d\'accueil entrepreneur',
    ],
  },
  {
    icon: <FiCreditCard size={28} />,
    title: 'Crédit professionnel',
    desc: 'Construisez votre crédit et obtenez du financement.',
    details: [
      '✅ Création de votre profil crédit entreprise',
      '✅ Recommandation de cartes et lignes de crédit',
      '✅ Accompagnement DUNS et Paydex',
      '✅ Stratégie net-30',
      '✅ Préparation au financement (prêts, marges)',
    ],
  },
  {
    icon: <FiShoppingCart size={28} />,
    title: 'Création e-commerce',
    desc: 'Lancez votre boutique en ligne.',
    details: [
      '✅ Choix de la plateforme (Shopify, WooCommerce)',
      '✅ Configuration des paiements (Stripe/PayPal)',
      '✅ Design de la boutique responsive',
      '✅ Import des premiers produits',
      '✅ SEO et optimisation de conversion',
    ],
  },
  {
    icon: <FiShield size={28} />,
    title: 'Dépôt de marque',
    desc: 'Protégez votre marque.',
    details: [
      '✅ Recherche d\'antériorité USPTO',
      '✅ Préparation du dossier de marque',
      '✅ Dépôt électronique (TEAS)',
      '✅ Suivi de l’examen par l’examinateur',
      '✅ Certificat d’enregistrement',
    ],
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Structure d\'entreprise',
    desc: 'Optimisez votre structure fiscale.',
    details: [
      '✅ Analyse de votre situation (C-Corp, S-Corp, LLC)',
      '✅ Recommandation fiscale personnalisée',
      '✅ Mise à jour des statuts',
      '✅ Planification successorale',
      '✅ Optimisation des impôts',
    ],
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Édition & produits digitaux',
    desc: 'Publiez livres et contenus.',
    details: [
      '✅ Création de contenu (eBook, formation)',
      '✅ Mise en page professionnelle',
      '✅ Distribution Amazon KDP / Apple Books',
      '✅ Création de produits numériques (templates, guides)',
      '✅ Stratégie de lancement',
    ],
  },
]

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleDetails = (index: number) => {
    setExpandedId(expandedId === index ? null : index)
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow" />
        </div>

        {/* Hero */}
        <section className="relative py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Nos <span className="text-blue-500">Services</span></h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">Des solutions complètes pour lancer et développer votre entreprise.</p>
        </section>

        {/* Services Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => {
              const isExpanded = expandedId === idx
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg"
                >
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/50 text-sm mt-2">{service.desc}</p>
                  
                  {/* Bouton En savoir plus */}
                  <button
                    onClick={() => toggleDetails(idx)}
                    className="mt-4 text-blue-400 text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    {isExpanded ? 'Voir moins' : 'En savoir plus'}
                    <FiArrowRight size={14} className={isExpanded ? 'rotate-90' : ''} />
                  </button>

                  {/* Détails supplémentaires (affichés si ouvert) */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold">Besoin d'un conseil personnalisé ?</h2>
            <p className="mt-2 text-white/60 text-sm">Nos experts sont là pour vous guider.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button
                onClick={() => window.location.href = '/pricing'}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold transition hover:scale-105 cursor-pointer"
              >
                Voir les tarifs
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-2.5 border border-white/30 rounded-full text-white font-semibold transition hover:bg-white/10 cursor-pointer"
              >
                Contacter un expert
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}