'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Check, MessageCircle, MapPin, FileText, Globe, ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'

// WhatsApp LIMBIZ — ranplase ak nimewo ofisyèl la
const WHATSAPP_NUMBER = '50912345678'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello LIMBIZ! I would like to book a consultation for International Business Packages.')

const packages = [
  {
    id: 'starter',
    name: 'International Starter',
    price: '$1,449',
    features: [
      { label: 'LLC filing assistance', value: 'One entity / one state' },
      { label: 'Business name research', value: 'One selected state' },
      { label: 'EIN application assistance', value: 'Included' },
      { label: 'Consultation & planning', value: 'Initial setup consultation' },
      { label: 'Website', value: 'Starter website: 1-4 pages' },
      { label: 'Website features', value: 'Responsive layout, contact form, social links, basic SEO' },
      { label: 'Brand identity', value: 'Simple logo; JPEG, PNG and editable files' },
      { label: 'Registered agent', value: 'Referral and setup coordination' },
      { label: 'Business address', value: 'Optional add-on' },
      { label: 'Business email & domain', value: 'Optional setup assistance' },
      { label: 'Essential business documents', value: 'Filing records delivery' },
      { label: 'Licenses, permits & sales tax', value: 'Startup next-steps checklist' },
      { label: 'Banking & business credit', value: 'Basic startup checklist' },
      { label: 'Delivery & next steps', value: 'Basic compliance checklist' },
    ],
  },
  {
    id: 'plus',
    name: 'International Plus',
    price: '$2,349',
    features: [
      { label: 'LLC filing assistance', value: 'One entity / one state' },
      { label: 'Business name research', value: 'Expanded name, domain and brand research' },
      { label: 'EIN application assistance', value: 'Included' },
      { label: 'Consultation & planning', value: 'Initial consultation + follow-up and expanded planning' },
      { label: 'Website', value: 'Professional website: 5-8 pages' },
      { label: 'Website features', value: 'Custom design, contact form, basic SEO, social / map integration, animations and mobile optimization' },
      { label: 'Brand identity', value: 'Full brand guidelines, including logo, colors, typography and usage' },
      { label: 'Registered agent', value: 'Onboarding coordination' },
      { label: 'Business address', value: 'Onboarding coordination' },
      { label: 'Business email & domain', value: 'Setup guidance' },
      { label: 'Essential business documents', value: 'Preparation / coordination within agreed scope' },
      { label: 'Licenses, permits & sales tax', value: 'Needs assessment; application assistance quoted separately' },
      { label: 'Banking & business credit', value: 'Banking readiness and application guidance; D-U-N-S and credit readiness guidance' },
      { label: 'Delivery & next steps', value: 'Comprehensive launch checklist' },
    ],
  },
]

const countries = [
  { name: 'France', flag: '🇫🇷', domain: 'limbiz.fr', message: 'Notre site est en préparation.', lang: 'fr' },
  { name: 'Canada', flag: '🇨🇦', domain: 'limbiz.ca', message: 'Notre site est en préparation. / Our site is coming soon.', lang: 'fr-en' },
  { name: 'Haiti', flag: '🇭🇹', domain: 'limbiz.ht', message: 'N ap prepare sit la pou ou.', lang: 'ht' },
]

export default function InternationalPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)
  const { addItem } = useCart()

  const handleAddToCart = (pkg: typeof packages[0]) => {
    addItem({
      id: `international-${pkg.id}`,
      name: pkg.name,
      price: parseInt(pkg.price.replace('$', '').replace(',', '')),
      unit: 'USD',
      note: 'International Business Package'
    })
    setSelectedPackage(pkg.id)
  }

  const handleLaunch = () => {
    const pkg = selectedPackage || 'starter'
    window.location.href = `/checkout?international=${pkg}`
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20 pb-16 relative overflow-hidden bg-black">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              International Packages
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              LIMBIZ <span className="text-blue-400">International</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Complete U.S. business formation packages for international entrepreneurs.
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-2xl p-[1px] transition-all duration-500 ${
                  selectedPackage === pkg.id
                    ? 'bg-gradient-to-br from-blue-400/60 via-blue-400/30 to-cyan-400/60'
                    : 'bg-gradient-to-br from-blue-400/30 via-blue-400/10 to-cyan-400/20 hover:from-blue-400/50 hover:to-cyan-400/40'
                }`}
              >
                <div className="relative bg-blue-950/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 flex flex-col h-full overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/15 rounded-full blur-3xl" />

                  <div className="relative mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold text-blue-400">{pkg.price}</span>
                      <span className="text-white/40 text-xs">USD</span>
                    </div>
                    <p className="text-white/30 text-xs mt-2 italic">
                      Plus state fees and applicable third-party charges.
                    </p>
                  </div>

                  <div className="relative flex-1 space-y-2 mb-6">
                    {pkg.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <div className="flex-1">
                          <span className="text-white/80 font-medium">{f.label}:</span>{' '}
                          <span className="text-white/50">{f.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bouton yo */}
                  <div className="relative space-y-2">
                    <button
                      onClick={() => handleAddToCart(pkg)}
                      className="w-full py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 hover:border-blue-300/60 hover:bg-blue-500/30 rounded-xl text-white text-sm font-semibold transition inline-flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" strokeWidth={2} />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full py-2.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                        selectedPackage === pkg.id
                          ? 'bg-blue-500/10 border border-blue-400/40 text-blue-300'
                          : 'bg-white/[0.02] border border-white/10 text-white/50 hover:text-white'
                      }`}
                    >
                      {selectedPackage === pkg.id ? '✓ Selected' : 'Select Package'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2 BOUTON PRENSIPAL */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleLaunch}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500/20 backdrop-blur-xl border border-blue-400/40 hover:border-blue-300/60 hover:bg-blue-500/30 rounded-full text-white font-semibold transition-all duration-300"
            >
              Launch My U.S. Business
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.08] rounded-full text-white/90 font-semibold transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Book a Consultation
            </a>
          </div>

          {/* TERMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16 p-6 rounded-2xl bg-blue-950/40 backdrop-blur-xl border border-blue-400/20"
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" strokeWidth={2} />
              Important Terms
            </h3>
            <div className="space-y-3 text-xs text-white/50 leading-relaxed">
              <p><strong className="text-white/70">Additional fees:</strong> State filing fees and government charges are additional. Registered agent and business address provider fees, domain, hosting, email subscriptions and renewals are billed separately.</p>
              <p><strong className="text-white/70">Optional services:</strong> DBA, ITIN, tax preparation, trademark filings, translations, notarization, apostille, expedited filing and other optional services are not included unless listed in the order.</p>
              <p><strong className="text-white/70">Eligibility and approvals:</strong> Bank accounts, payment processors, credit, licenses and government approvals depend on eligibility and provider review: approval and processing times are not guaranteed.</p>
              <p><strong className="text-white/70">Website scope:</strong> Website content, delivery milestones and revision limits are specified in the order before payment. Additional pages, e-commerce and ongoing maintenance require a separate quote.</p>
            </div>
          </motion.div>

          {/* 3 BOUTON PEYI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-6">
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" strokeWidth={2} />
                Access by Country
              </h3>
              <p className="text-white/40 text-sm">Choose your region to visit our local site.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {countries.map((c) => (
                <a
                  key={c.domain}
                  href={`https://${c.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 rounded-2xl bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-2">{c.flag}</div>
                  <div className="text-white font-semibold text-sm mb-1">{c.name}</div>
                  <div className="text-blue-400 text-xs font-mono mb-2">{c.domain}</div>
                  <p className="text-white/40 text-[10px] leading-relaxed">{c.message}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
