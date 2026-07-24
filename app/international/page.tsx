'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const countries = [
  { name: 'United States', flag: '🇺🇸', domain: 'golimbiz.com', status: 'available', desc: 'All 50 states covered. Full business formation, credit, funding, and growth services.', features: ['LLC Formation', 'EIN Registration', 'Business Credit', 'Funding Center', 'Tax Filings'] },
  { name: 'Canada', flag: '🇨🇦', domain: 'limbiz.ca', status: 'coming-soon', desc: 'Expanding to serve Canadian entrepreneurs with tailored business solutions.', features: ['Incorporation', 'Business Number', 'GST/HST Registration', 'Trademark'] },
  { name: 'Haiti', flag: '🇭🇹', domain: 'limbiz.ht', status: 'available', desc: 'Full support in Kreyòl. Business formation and consulting for Haitian entrepreneurs.', features: ['Registre de Commerce', 'NIF Registration', 'Business Consulting', 'Kreyòl Support'] },
  { name: 'France', flag: '🇫🇷', domain: 'limbiz.fr', status: 'coming-soon', desc: 'Supporting French entrepreneurs with business creation and compliance.', features: ['Création d\'entreprise', 'SIRET Registration', 'TVA Setup', 'Legal Support'] },
  { name: 'United Kingdom', flag: '🇬🇧', domain: 'limbiz.co.uk', status: 'coming-soon', desc: 'Helping UK entrepreneurs start and grow their businesses.', features: ['Company Formation', 'VAT Registration', 'Tax Filing', 'Business Banking'] },
  { name: 'Brazil', flag: '🇧🇷', domain: 'limbiz.com.br', status: 'coming-soon', desc: 'Supporting Brazilian entrepreneurs with CNPJ and business setup.', features: ['CNPJ Registration', 'MEI Setup', 'Tax Planning', 'Business Credit'] },
  { name: 'Mexico', flag: '🇲🇽', domain: 'limbiz.mx', status: 'coming-soon', desc: 'Business formation and compliance for Mexican entrepreneurs.', features: ['RFC Registration', 'Business Formation', 'Tax Advisory', 'Legal Support'] },
  { name: 'Nigeria', flag: '🇳🇬', domain: 'limbiz.ng', status: 'coming-soon', desc: 'Empowering Nigerian entrepreneurs with CAC registration and more.', features: ['CAC Registration', 'TIN Registration', 'Business Consulting', 'Funding Access'] },
  { name: 'India', flag: '🇮🇳', domain: 'limbiz.in', status: 'coming-soon', desc: 'Supporting Indian entrepreneurs with GST, company registration, and growth.', features: ['Company Registration', 'GST Registration', 'MSME Registration', 'Funding'] },
  { name: 'Australia', flag: '🇦🇺', domain: 'limbiz.com.au', status: 'coming-soon', desc: 'Business formation and compliance for Australian entrepreneurs.', features: ['ABN Registration', 'Company Formation', 'GST Setup', 'Business Banking'] },
  { name: 'United Arab Emirates', flag: '🇦🇪', domain: 'limbiz.ae', status: 'coming-soon', desc: 'Supporting UAE entrepreneurs with mainland and freezone business setup.', features: ['Trade License', 'Visa Processing', 'Bank Account', 'VAT Registration'] },
]

export default function InternationalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">International</span></h1>
            <p className="text-white/40 mt-3">Serving entrepreneurs across the globe.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((country, idx) => (
              <motion.div key={country.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className={`relative group bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 ${country.status === 'available' ? 'border-blue-400/30 hover:border-blue-400/60' : 'border-white/[0.06] hover:border-white/[0.12]'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div><h3 className="text-white font-bold text-sm">{country.name}</h3><p className="text-blue-400/80 text-xs font-mono">{country.domain}</p></div>
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold uppercase ${country.status === 'available' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/10 text-amber-400/60'}`}>{country.status === 'available' ? '● Live' : 'Coming Soon'}</span>
                </div>
                <p className="text-white/40 text-xs mb-4">{country.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">{country.features.map((f, i) => (<span key={i} className="px-2 py-1 bg-white/[0.03] border border-white/[0.04] rounded-lg text-white/35 text-[10px]">{f}</span>))}</div>
                {country.status === 'available' ? (
                  <Link href={country.name === 'United States' ? '/' : country.name === 'Haiti' ? '/contact' : '#'} className="w-full py-2.5 bg-blue-600/80 hover:bg-blue-500 rounded-xl text-white text-xs font-semibold flex items-center justify-center gap-2 transition">{country.domain} →</Link>
                ) : (
                  <button className="w-full py-2.5 bg-white/[0.02] border border-white/[0.06] rounded-xl text-white/25 text-xs font-medium cursor-not-allowed" disabled>Coming Soon</button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
