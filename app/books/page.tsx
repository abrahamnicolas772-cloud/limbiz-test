'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const editions = [
  {
    id: 'english',
    language: 'English',
    flag: '🇺🇸',
    formats: [
      { type: 'eBook', price: '$9.99', freeShipping: false },
      { type: 'Paperback', price: '$29.99', freeShipping: true },
      { type: 'Hardcover', price: '$34.99', freeShipping: true },
    ],
    buyText: 'Buy Now',
    links: {
      'eBook': 'https://www.amazon.com/dp/YOUR_ASIN_EN_EBOOK',
      'Paperback': 'https://www.amazon.com/dp/YOUR_ASIN_EN_PAPERBACK',
      'Hardcover': 'https://www.amazon.com/dp/YOUR_ASIN_EN_HARDCOVER',
    }
  },
  {
    id: 'haitian-creole',
    language: 'Haitian Creole',
    flag: '🇭🇹',
    formats: [
      { type: 'eBook', price: '$9.99', freeShipping: false },
      { type: 'Paperback', price: '$29.99', freeShipping: true },
      { type: 'Hardcover', price: '$34.99', freeShipping: true },
    ],
    buyText: 'Achte Kounye a',
    links: {
      'eBook': 'https://www.amazon.com/dp/YOUR_ASIN_HT_EBOOK',
      'Paperback': 'https://www.amazon.com/dp/YOUR_ASIN_HT_PAPERBACK',
      'Hardcover': 'https://www.amazon.com/dp/YOUR_ASIN_HT_HARDCOVER',
    }
  },
  {
    id: 'french',
    language: 'French',
    flag: '🇫🇷',
    formats: [
      { type: 'eBook', price: '$9.99', freeShipping: false },
      { type: 'Paperback', price: '$29.99', freeShipping: true },
      { type: 'Hardcover', price: '$34.99', freeShipping: true },
    ],
    buyText: 'Acheter maintenant',
    links: {
      'eBook': 'https://www.amazon.com/dp/YOUR_ASIN_FR_EBOOK',
      'Paperback': 'https://www.amazon.com/dp/YOUR_ASIN_FR_PAPERBACK',
      'Hardcover': 'https://www.amazon.com/dp/YOUR_ASIN_FR_HARDCOVER',
    }
  },
  {
    id: 'spanish',
    language: 'Spanish',
    flag: '🇪🇸',
    formats: [
      { type: 'eBook', price: '$9.99', freeShipping: false },
      { type: 'Paperback', price: '$29.99', freeShipping: true },
      { type: 'Hardcover', price: '$34.99', freeShipping: true },
    ],
    buyText: 'Comprar ahora',
    links: {
      'eBook': 'https://www.amazon.com/dp/YOUR_ASIN_ES_EBOOK',
      'Paperback': 'https://www.amazon.com/dp/YOUR_ASIN_ES_PAPERBACK',
      'Hardcover': 'https://www.amazon.com/dp/YOUR_ASIN_ES_HARDCOVER',
    }
  },
]

export default function BooksPage() {
  const [selectedFormats, setSelectedFormats] = useState<Record<string, string>>({
    english: 'Paperback',
    'haitian-creole': 'Paperback',
    french: 'Paperback',
    spanish: 'Paperback',
  })

  const handleBuy = (editionId: string) => {
    const edition = editions.find(e => e.id === editionId)
    const format = selectedFormats[editionId]
    if (edition && format) {
      const checkoutUrl = '/checkout?plan=basic&state=florida&service=' + encodeURIComponent(edition.language + ' Edition - ' + format)
      window.location.href = checkoutUrl
    }
  }

  const getEditionTitle = (id: string) => {
    switch(id) {
      case 'english': return 'ENGLISH EDITION'
      case 'haitian-creole': return 'HAITIAN CREOLE EDITION'
      case 'french': return 'FRENCH EDITION'
      case 'spanish': return 'SPANISH EDITION'
      default: return ''
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(27,99,245,0.2),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(69,69,69,0.3),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* HERO */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1b63f5]/10 border border-[#1b63f5]/20 rounded-full text-[#1b63f5] text-xs font-semibold uppercase tracking-wider mb-6">
              LIMBIZ® Books & Guides
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Build Smarter with<br/>
              <span className="text-[#1b63f5]">LIMBIZ® Books & Guides</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Practical business education designed to help entrepreneurs start, structure, fund, grow, and protect their businesses in the United States.
            </p>
            <a href="#editions" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1b63f5] hover:bg-[#1557d6] rounded-full text-white font-semibold shadow-lg shadow-[#1b63f5]/20 transition">
              Explore Books & Guides
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </motion.div>

          {/* FEATURED BOOK */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 md:p-10 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img src="/books/28-steps-english.jpg" alt="28 Essential Steps - English Edition" className="w-full max-w-sm h-auto rounded-2xl shadow-2xl mx-auto" />
              </div>
              <div>
                <span className="text-[#1b63f5] text-xs font-bold uppercase tracking-wider">Featured Book</span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2 mb-4">
                  28 Essential Steps to Build a Strong and<br/>Successful Business in the United States
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  A practical 28 step guide created to help entrepreneurs transform a business idea into a properly structured and successful business, with or without grants and funding.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-white/40"><span className="text-white/20">Author:</span> J. G. ESTINVIL</p>
                  <p className="text-white/40"><span className="text-white/20">Publisher:</span> Limitless Biz Hub, LLC</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EDITIONS */}
          <div id="editions" className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Available Languages & Formats</h2>
            
            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {editions.map((edition) => (
                <motion.div key={edition.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:border-[#1b63f5]/40 transition">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#1b63f5]/15 to-[#454545]/25 rounded-xl mb-4 flex items-center justify-center">
                    <img src={`/books/${edition.id === "english" ? "28-steps-english.jpg" : edition.id === "haitian-creole" ? "28-steps-creole.jpg" : edition.id === "french" ? "28-steps-french.jpg" : "28-steps-spanish.jpg"}`} alt={edition.language} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  
                  <h3 className="text-white font-bold text-sm mb-1">{getEditionTitle(edition.id)}</h3>
                  <p className="text-white/40 text-xs mb-4">Language: {edition.language}</p>

                  <div className="space-y-2 mb-4">
                    {edition.formats.map((format) => (
                      <button
                        key={format.type}
                        onClick={() => setSelectedFormats(prev => ({ ...prev, [edition.id]: format.type }))}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition relative ${
                          selectedFormats[edition.id] === format.type
                            ? 'bg-[#1b63f5]/20 border border-[#1b63f5]/50 text-white'
                            : 'bg-white/[0.02] border border-white/[0.05] text-white/40 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {format.type}
                          {format.freeShipping && (
                            <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold uppercase">
                              FREE SHIPPING
                            </span>
                          )}
                        </span>
                        <span className="font-bold">{format.price}</span>
                      </button>
                    ))}
                  </div>

                  <button onClick={() => handleBuy(edition.id)} className="mt-auto w-full py-2.5 bg-[#1b63f5] hover:bg-[#1557d6] rounded-xl text-white text-sm font-semibold transition">
                    {edition.buyText}
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {editions.map((edition) => (
                <div key={edition.id} className="min-w-[280px] max-w-[280px] snap-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 flex flex-col">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#1b63f5]/15 to-[#454545]/25 rounded-xl mb-4 flex items-center justify-center">
                    <img src={`/books/${edition.id === "english" ? "28-steps-english.jpg" : edition.id === "haitian-creole" ? "28-steps-creole.jpg" : edition.id === "french" ? "28-steps-french.jpg" : "28-steps-spanish.jpg"}`} alt={edition.language} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{getEditionTitle(edition.id)}</h3>
                  <p className="text-white/40 text-xs mb-4">Language: {edition.language}</p>
                  <div className="space-y-2 mb-4">
                    {edition.formats.map((format) => (
                      <button
                        key={format.type}
                        onClick={() => setSelectedFormats(prev => ({ ...prev, [edition.id]: format.type }))}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition ${
                          selectedFormats[edition.id] === format.type
                            ? 'bg-[#1b63f5]/20 border border-[#1b63f5]/50 text-white'
                            : 'bg-white/[0.02] border border-white/[0.05] text-white/40'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          {format.type}
                          {format.freeShipping && (
                            <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold uppercase">
                              FREE SHIPPING
                            </span>
                          )}
                        </span>
                        <span className="font-bold">{format.price}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => handleBuy(edition.id)} className="w-full py-2.5 bg-[#1b63f5] hover:bg-[#1557d6] rounded-xl text-white text-sm font-semibold transition">
                    {edition.buyText}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/30 text-sm mb-4">Questions about the book?</p>
            <a href="/contact" className="text-[#1b63f5] hover:text-[#1557d6] font-semibold">Contact us →</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}