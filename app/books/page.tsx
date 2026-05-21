'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiBookOpen, FiShoppingCart, FiDownload, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

// ID des produits sur Gumroad (à remplacer)
const PRODUCTS = {
  startup: 'https://limbiz.gumroad.com/l/startup-blueprint',
  credit: 'https://limbiz.gumroad.com/l/business-credit',
  ecommerce: 'https://limbiz.gumroad.com/l/ecommerce-empire',
  trademark: 'https://limbiz.gumroad.com/l/trademark-guide',
}

const ebooks = [
  {
    id: 1,
    titleKey: 'startup',
    title: 'The Startup Blueprint',
    subtitle: 'From Idea to First $10K',
    author: 'Marcus Chen',
    price: '$19.99',
    originalPrice: '$39.99',
    rating: 4.9,
    reviews: 247,
    description: 'Le guide complet pour lancer votre startup, obtenir vos premiers clients et générer vos premiers revenus.',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: 248,
    isNew: true,
    featured: true,
    category: 'Entrepreneuriat',
    tags: ['Startup', 'Business', 'Stratégie'],
    gumroadUrl: PRODUCTS.startup,
  },
  {
    id: 2,
    titleKey: 'credit',
    title: 'Business Credit Mastery',
    subtitle: 'Build Business Credit Fast',
    author: 'Sarah Johnson',
    price: '$24.99',
    originalPrice: '$49.99',
    rating: 4.8,
    reviews: 189,
    description: 'Apprenez à construire un crédit professionnel solide et à accéder au financement dont vous avez besoin.',
    cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=500&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: 312,
    isNew: false,
    featured: false,
    category: 'Finance',
    tags: ['Crédit', 'Financement', 'Business'],
    gumroadUrl: PRODUCTS.credit,
  },
  {
    id: 3,
    titleKey: 'ecommerce',
    title: 'E-Commerce Empire',
    subtitle: 'Build a Profitable Online Store',
    author: 'David Kim',
    price: '$22.99',
    originalPrice: '$44.99',
    rating: 4.7,
    reviews: 156,
    description: 'Les stratégies pour créer, lancer et développer une boutique en ligne rentable.',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: 276,
    isNew: false,
    featured: false,
    category: 'E-commerce',
    tags: ['E-commerce', 'Marketing', 'Vente'],
    gumroadUrl: PRODUCTS.ecommerce,
  },
  {
    id: 4,
    titleKey: 'trademark',
    title: 'Trademark Your Brand',
    subtitle: 'Protect Your Intellectual Property',
    author: 'Emily Zhang',
    price: '$21.99',
    originalPrice: '$42.99',
    rating: 4.9,
    reviews: 112,
    description: 'Protégez votre marque et vos actifs intellectuels avec des stratégies éprouvées.',
    cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=500&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: 198,
    isNew: true,
    featured: false,
    category: 'Légal',
    tags: ['Trademark', 'Droit', 'Protection'],
    gumroadUrl: PRODUCTS.trademark,
  },
]

const bundles = [
  {
    id: 1,
    title: 'Entrepreneur Starter Pack',
    ebooks: [1, 2, 3],
    price: '$49.99',
    originalPrice: '$89.97',
    savings: '44%',
    description: '3 eBooks pour démarrer votre entreprise sur de bonnes bases.',
  },
  {
    id: 2,
    title: 'Complete Business Library',
    ebooks: [1, 2, 3, 4],
    price: '$69.99',
    originalPrice: '$129.96',
    savings: '46%',
    description: 'La collection complète pour maîtriser tous les aspects.',
  },
]

export default function BooksPage() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-24">
        {/* Background premium (identique) */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow animation-delay-1500" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow animation-delay-3000" />
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2563EB" strokeWidth="0.5" /></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero Section */}
        <div className="relative text-center px-4 py-16 md:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Bibliothèque numérique
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            eBooks <span className="text-blue-500 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Premium</span>
          </h1>
          <p className="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
            Des connaissances d'experts pour accélérer votre succès entrepreneurial.
          </p>
        </div>

        {/* Featured eBook Banner (si besoin) */}
        {ebooks.filter(b => b.featured).map(book => (
          <div key={book.id} className="max-w-7xl mx-auto px-4 py-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
              <div className="relative flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-52 rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs mb-3">
                    ⭐ Best-seller
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{book.title}</h2>
                  <p className="text-white/60 text-sm mt-2">{book.subtitle}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-3">
                    <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <span key={i}>★</span>)}</div>
                    <span className="text-white/50 text-xs">({book.reviews} avis)</span>
                    <span className="text-white/50 text-xs">📄 {book.pages} pages</span>
                    <span className="text-white/50 text-xs">📱 {book.format}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-5">
                    <a
                      href={`${book.gumroadUrl}?wanted=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-semibold transition shadow-lg shadow-blue-500/30 inline-flex items-center gap-2"
                    >
                      📖 Acheter maintenant - {book.price}
                    </a>
                    <button className="px-5 py-2 border border-white/30 rounded-full text-white text-sm font-semibold hover:bg-white/10 transition">
                      Lire un extrait
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* eBooks Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nos <span className="text-blue-500">eBooks</span></h2>
            <p className="text-white/50 text-sm mt-2">Disponibles en PDF, EPUB et MOBI - Lecture immédiate</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ebooks.map((book) => (
              <div
                key={book.id}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {book.isNew && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      Nouveau
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <button className="bg-white/20 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/30 transition">
                      Aperçu rapide
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-400 text-xs font-semibold">{book.category}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-white/60 text-xs">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition line-clamp-1">{book.title}</h3>
                  <p className="text-white/40 text-xs mt-1">par {book.author}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {book.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-white/30 text-xs">#{tag}</span>
                    ))}
                  </div>
                  <p className="text-white/50 text-xs mt-2 line-clamp-2">{book.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-white/40 text-xs">📄 {book.pages} p.</span>
                    <span className="text-white/40 text-xs">📱 {book.format.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">{book.price}</span>
                      <span className="text-white/30 text-xs line-through ml-2">{book.originalPrice}</span>
                    </div>
                    <a
                      href={`${book.gumroadUrl}?wanted=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition shadow-lg"
                    >
                      📥 Acheter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bundles Section */}
        <div className="bg-gradient-to-b from-transparent via-blue-500/5 to-transparent py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Packs <span className="text-blue-500">Économiques</span></h2>
              <p className="text-white/50 text-sm mt-2">Économisez jusqu'à 46% avec nos bundles</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {bundles.map((bundle) => (
                <div key={bundle.id} className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{bundle.title}</h3>
                      <p className="text-white/50 text-sm mt-1">{bundle.description}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-2xl font-bold text-blue-400">{bundle.price}</span>
                        <span className="text-white/30 text-sm line-through">{bundle.originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                          Économisez {bundle.savings}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex -space-x-2">
                        {bundle.ebooks.map((id) => {
                          const book = ebooks.find(b => b.id === id)
                          return book ? (
                            <img key={id} src={book.cover} alt="" className="w-12 h-16 rounded-lg object-cover border-2 border-white/20" />
                          ) : null
                        })}
                      </div>
                      {/* Bundle – lien composite (ex: page dédiée ou lien vers le bundle Gumroad) */}
                      <button className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold hover:scale-105 transition">
                        Acheter le pack
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all hover:border-blue-500/30">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-white font-semibold">Multi-format</h3>
              <p className="text-white/40 text-sm mt-1">PDF, EPUB, MOBI - Lisez sur tous vos appareils</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all hover:border-blue-500/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-semibold">Livraison immédiate</h3>
              <p className="text-white/40 text-sm mt-1">Téléchargement instantané après achat</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all hover:border-blue-500/30">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-white font-semibold">Mises à jour gratuites</h3>
              <p className="text-white/40 text-sm mt-1">Recevez les nouvelles versions à vie</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ce que nos <span className="text-blue-500">lecteurs disent</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sophie Martin", role: "Fondatrice", text: "Un contenu incroyablement riche et bien structuré !", rating: 5, book: "The Startup Blueprint" },
              { name: "Thomas Bernard", role: "CEO", text: "Ces eBooks m'ont sauvé des mois de recherche.", rating: 5, book: "Business Credit Mastery" },
              { name: "Élodie Rousseau", role: "E-commerçante", text: "Des conseils pratiques et directement applicables.", rating: 5, book: "E-Commerce Empire" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl transition-all duration-300 hover:border-blue-500/30">
                <div className="flex text-yellow-400 mb-3">{[...Array(testimonial.rating)].map((_, i) => <span key={i}>★</span>)}</div>
                <p className="text-white/70 text-sm italic">"{testimonial.text}"</p>
                <div className="mt-4">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">{testimonial.role}</p>
                  <p className="text-blue-400 text-xs mt-1">📖 {testimonial.book}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}