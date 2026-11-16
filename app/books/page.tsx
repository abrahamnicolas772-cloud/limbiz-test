'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { ArrowRight } from '@/lib/icons'

const editions = [
  { id: 'english', language: 'English', flag: '🇺🇸', formats: [{ type: 'eBook', price: '$9.99', freeShipping: false }, { type: 'Paperback', price: '$29.99', freeShipping: true }, { type: 'Hardcover', price: '$34.99', freeShipping: true }], buyText: 'Buy Now' },
  { id: 'haitian-creole', language: 'Haitian Creole', flag: '🇭🇹', formats: [{ type: 'eBook', price: '$9.99', freeShipping: false }, { type: 'Paperback', price: '$29.99', freeShipping: true }, { type: 'Hardcover', price: '$34.99', freeShipping: true }], buyText: 'Achte Kounye a' },
  { id: 'french', language: 'French', flag: '🇫🇷', formats: [{ type: 'eBook', price: '$9.99', freeShipping: false }, { type: 'Paperback', price: '$29.99', freeShipping: true }, { type: 'Hardcover', price: '$34.99', freeShipping: true }], buyText: 'Acheter maintenant' },
  { id: 'spanish', language: 'Spanish', flag: '🇪🇸', formats: [{ type: 'eBook', price: '$9.99', freeShipping: false }, { type: 'Paperback', price: '$29.99', freeShipping: true }, { type: 'Hardcover', price: '$34.99', freeShipping: true }], buyText: 'Comprar ahora' },
]

export default function BooksPage() {
  const { addItem } = useCart()
  const router = useRouter()
  const [selectedFormats, setSelectedFormats] = useState<Record<string, string>>({})

  const handleBuy = (editionId: string) => {
    const edition = editions.find(e => e.id === editionId)
    const format = selectedFormats[editionId]
    if (!format) { alert('Please select a format first'); return }
    if (edition && format) {
      const formatData = edition.formats.find(f => f.type === format)
      const price = formatData?.price.replace('$', '') || '9.99'
      addItem({ id: editionId + '-' + format, name: edition.language + ' Edition - ' + format, price: parseFloat(price), note: 'Book purchase' })
      router.push('/cart')
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

  const getCoverImage = (id: string) => {
    switch(id) {
      case 'english': return '/books/28-steps-english.jpg'
      case 'haitian-creole': return '/books/28-steps-creole.jpg'
      case 'french': return '/books/28-steps-french.jpg'
      case 'spanish': return '/books/28-steps-spanish.jpg'
      default: return '/books/28-steps-english.jpg'
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              LIMBIZ™ Books & Guides
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Build Smarter with<br />
              <span className="text-blue-400">LIMBIZ™ Books & Guides</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Practical business education designed to help entrepreneurs start, structure, fund, grow, and protect their businesses in the United States.
            </p>
            <a href="#editions" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 rounded-full text-white font-semibold transition">
              Explore Books & Guides
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-6 md:p-10 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img src="/books/28-steps-english.jpg" alt="28 Essential Steps - English Edition" className="w-full max-w-sm h-auto rounded-2xl shadow-2xl mx-auto" />
              </div>
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Featured Book</span>
                <h2 className="text-xl md:text-2xl font-bold text-white mt-2 mb-4">
                  28 Essential Steps to Build a Strong and<br />
                  Successful Business in the United States
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

          <div id="editions" className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Available Languages & Formats</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {editions.map((edition) => (
                <motion.div key={edition.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-blue-950/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-5 flex flex-col hover:border-blue-400/40 transition">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-500/15 to-blue-900/25 rounded-xl mb-4 overflow-hidden">
                    <img src={getCoverImage(edition.id)} alt={edition.language} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="text-white font-bold text-sm mb-1">{getEditionTitle(edition.id)}</h3>
                  <p className="text-white/40 text-xs mb-4">Language: {edition.language}</p>

                  <div className="space-y-2 mb-4">
                    {edition.formats.map((format) => (
                      <button
                        key={format.type}
                        onClick={() => setSelectedFormats({ [edition.id]: format.type })}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition ${
                          selectedFormats[edition.id] === format.type
                            ? 'bg-blue-500/20 border border-blue-400/50 text-white'
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

                  <button onClick={() => handleBuy(edition.id)} className="mt-auto w-full py-2.5 bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 rounded-xl text-white text-sm font-semibold transition">
                    {edition.buyText}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/30 text-sm mb-4">Questions about the book?</p>
            <a href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">Contact us →</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
