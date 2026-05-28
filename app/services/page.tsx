'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FiBriefcase, FiCreditCard, FiShoppingCart, FiShield, FiTrendingUp, FiUsers, FiArrowRight, FiChevronUp } from 'react-icons/fi'

const servicesList = [
  {
    icon: <FiBriefcase size={} />,
    title: 'Cr√ation d\'entreprise',
    desc: 'Formation LLC, EIN, conformit√ l√gale.',
    details: [
      ' D√p√¥t des statuts aupr√®s de l\'√âtat',
      ' Obtenez votre num√ro EIN (IRS)',
      ' R√daction de l\'accord d\'exploitation',
      ' Agent enregistr√ inclus pour  an',
      ' Kit d\'accueil entrepreneur',
    ],
  },
  {
    icon: <FiCreditCard size={} />,
    title: 'Cr√dit professionnel',
    desc: 'Construisez votre cr√dit et obtenez du financement.',
    details: [
      ' Cr√ation de votre profil cr√dit entreprise',
      ' Recommandation de cartes et lignes de cr√dit',
      ' Accompagnement DUNS et Paydex',
      ' Strat√gie net-',
      ' Pr√paration au financement (pr√™ts, marges)',
    ],
  },
  {
    icon: <FiShoppingCart size={} />,
    title: 'Cr√ation e-commerce',
    desc: 'Lancez votre boutique en ligne.',
    details: [
      ' Choix de la plateforme (Shopify, WooCommerce)',
      ' Configuration des paiements (Stripe/PayPal)',
      ' Design de la boutique responsive',
      ' Import des premiers produits',
      ' SEO et optimisation de conversion',
    ],
  },
  {
    icon: <FiShield size={} />,
    title: 'D√p√¥t de marque',
    desc: 'Prot√gez votre marque.',
    details: [
      ' Recherche d\'ant√riorit√ USPTO',
      ' Pr√paration du dossier de marque',
      ' D√p√¥t √lectronique (TEAS)',
      ' Suivi de l‚Äôexamen par l‚Äôexaminateur',
      ' Certificat d‚Äôenregistrement',
    ],
  },
  {
    icon: <FiTrendingUp size={} />,
    title: 'Structure d\'entreprise',
    desc: 'Optimisez votre structure fiscale.',
    details: [
      ' Analyse de votre situation (C-Corp, S-Corp, LLC)',
      ' Recommandation fiscale personnalis√e',
      ' Mise √† jour des statuts',
      ' Planification successorale',
      ' Optimisation des imp√¥ts',
    ],
  },
  {
    icon: <FiUsers size={} />,
    title: '√âdition & produits digitaux',
    desc: 'Publiez livres et contenus.',
    details: [
      ' Cr√ation de contenu (eBook, formation)',
      ' Mise en page professionnelle',
      ' Distribution Amazon KDP / Apple Books',
      ' Cr√ation de produits num√riques (templates, guides)',
      ' Strat√gie de lancement',
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
      <main className="pt- min-h-screen bg-black relative overflow-hidden">
        {/ Background /}
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute inset- -z-">
          <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow" />
        </div>

        {/ Hero /}
        <section className="relative py- text-center px-">
          <h className="text-xl md:text-xl lg:text-xl font-bold">Nos <span className="text-blue-">Services</span></h>
          <p className="mt- text-white/ max-w-xl mx-auto">Des solutions compl√®tes pour lancer et d√velopper votre entreprise.</p>
        </section>

        {/ Services Grid /}
        <section className="py- max-w-xl mx-auto px-">
          <div className="grid md:grid-cols- lg:grid-cols- gap-">
            {servicesList.map((service, idx) => {
              const isExpanded = expandedId === idx
              return (
                <div
                  key={idx}
                  className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p- transition-all duration- hover:border-blue-/ hover:shadow-lg"
                >
                  <div className="text-blue- mb-">{service.icon}</div>
                  <h className="text-xl font-bold text-white">{service.title}</h>
                  <p className="text-white/ text-sm mt-">{service.desc}</p>
                  
                  {/ Bouton En savoir plus /}
                  <button
                    onClick={() => toggleDetails(idx)}
                    className="mt- text-blue- text-sm flex items-center gap- hover:gap- transition-all cursor-pointer"
                  >
                    {isExpanded ? 'Voir moins' : 'En savoir plus'}
                    <FiArrowRight size={} className={isExpanded ? 'rotate-' : ''} />
                  </button>

                  {/ D√tails suppl√mentaires (affich√s si ouvert) /}
                  {isExpanded && (
                    <div className="mt- pt- border-t border-white/ animate-fadeIn">
                      <ul className="space-y-">
                        {service.details.map((detail, i) => (
                          <li key={i} className="text-white/ text-sm flex items-start gap-">
                            <span className="text-blue- mt-.">‚Ä¢</span>
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

        {/ CTA /}
        <section className="py- max-w-xl mx-auto px- text-center">
          <div className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p-">
            <h className="text-xl font-bold">Besoin d'un conseil personnalis√ ?</h>
            <p className="mt- text-white/ text-sm">Nos experts sont l√† pour vous guider.</p>
            <div className="flex flex-wrap justify-center gap- mt-">
              <button
                onClick={() => window.location.href = '/pricing'}
                className="px- py-. bg-gradient-to-r from-blue- to-purple- rounded-full text-white font-semibold transition hover:scale- cursor-pointer"
              >
                Voir les tarifs
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px- py-. border border-white/ rounded-full text-white font-semibold transition hover:bg-white/ cursor-pointer"
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