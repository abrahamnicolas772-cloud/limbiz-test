'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiBookOpen, FiShoppingCart, FiDownload, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

// ID des produits sur Gumroad (√† remplacer)
const PRODUCTS = {
  startup: 'https://limbiz.gumroad.com/l/startup-blueprint',
  credit: 'https://limbiz.gumroad.com/l/business-credit',
  ecommerce: 'https://limbiz.gumroad.com/l/ecommerce-empire',
  trademark: 'https://limbiz.gumroad.com/l/trademark-guide',
}

const ebooks = [
  {
    id: ,
    titleKey: 'startup',
    title: 'The Startup Blueprint',
    subtitle: 'From Idea to First $K',
    author: 'Marcus Chen',
    price: '$.',
    originalPrice: '$.',
    rating: .,
    reviews: ,
    description: 'Le guide complet pour lancer votre startup, obtenir vos premiers clients et g√n√rer vos premiers revenus.',
    cover: 'https://images.unsplash.com/photo--caefabdc?w=&h=&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: ,
    isNew: true,
    featured: true,
    category: 'Entrepreneuriat',
    tags: ['Startup', 'Business', 'Strat√gie'],
    gumroadUrl: PRODUCTS.startup,
  },
  {
    id: ,
    titleKey: 'credit',
    title: 'Business Credit Mastery',
    subtitle: 'Build Business Credit Fast',
    author: 'Sarah Johnson',
    price: '$.',
    originalPrice: '$.',
    rating: .,
    reviews: ,
    description: 'Apprenez √† construire un cr√dit professionnel solide et √† acc√der au financement dont vous avez besoin.',
    cover: 'https://images.unsplash.com/photo--aceaf?w=&h=&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: ,
    isNew: false,
    featured: false,
    category: 'Finance',
    tags: ['Cr√dit', 'Financement', 'Business'],
    gumroadUrl: PRODUCTS.credit,
  },
  {
    id: ,
    titleKey: 'ecommerce',
    title: 'E-Commerce Empire',
    subtitle: 'Build a Profitable Online Store',
    author: 'David Kim',
    price: '$.',
    originalPrice: '$.',
    rating: .,
    reviews: ,
    description: 'Les strat√gies pour cr√er, lancer et d√velopper une boutique en ligne rentable.',
    cover: 'https://images.unsplash.com/photo--dade?w=&h=&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: ,
    isNew: false,
    featured: false,
    category: 'E-commerce',
    tags: ['E-commerce', 'Marketing', 'Vente'],
    gumroadUrl: PRODUCTS.ecommerce,
  },
  {
    id: ,
    titleKey: 'trademark',
    title: 'Trademark Your Brand',
    subtitle: 'Protect Your Intellectual Property',
    author: 'Emily Zhang',
    price: '$.',
    originalPrice: '$.',
    rating: .,
    reviews: ,
    description: 'Prot√gez votre marque et vos actifs intellectuels avec des strat√gies √prouv√es.',
    cover: 'https://images.unsplash.com/photo--bfabf?w=&h=&fit=crop',
    format: 'PDF + EPUB + MOBI',
    pages: ,
    isNew: true,
    featured: false,
    category: 'L√gal',
    tags: ['Trademark', 'Droit', 'Protection'],
    gumroadUrl: PRODUCTS.trademark,
  },
]

const bundles = [
  {
    id: ,
    title: 'Entrepreneur Starter Pack',
    ebooks: [, , ],
    price: '$.',
    originalPrice: '$.',
    savings: '%',
    description: ' eBooks pour d√marrer votre entreprise sur de bonnes bases.',
  },
  {
    id: ,
    title: 'Complete Business Library',
    ebooks: [, , , ],
    price: '$.',
    originalPrice: '$.',
    savings: '%',
    description: 'La collection compl√®te pour ma√triser tous les aspects.',
  },
]

export default function BooksPage() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-">
        {/ Background premium (identique) /}
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute inset- -z-">
          <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
          <div className="absolute top-/ left-/ w- h- bg-cyan-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
          <svg className="absolute inset- w-full h-full opacity-" xmlns="http://www.w.org//svg">
            <defs><pattern id="grid" width="" height="" patternUnits="userSpaceOnUse"><path d="M   L    " fill="none" stroke="EB" strokeWidth="." /></pattern></defs>
            <rect width="%" height="%" fill="url(grid)" />
          </svg>
        </div>

        {/ Hero Section /}
        <div className="relative text-center px- py- md:py-">
          <div className="inline-flex items-center gap- px- py- rounded-full bg-blue-/ text-blue- text-xs mb- backdrop-blur-sm">
            <span className="w-. h-. rounded-full bg-blue- animate-pulse" />
            Biblioth√®que num√rique
          </div>
          <h className="text-xl md:text-xl lg:text-xl font-bold">
            eBooks <span className="text-blue- bg-gradient-to-r from-blue- to-purple- bg-clip-text text-transparent">Premium</span>
          </h>
          <p className="mt- text-white/ text-lg max-w-xl mx-auto">
            Des connaissances d'experts pour acc√l√rer votre succ√®s entrepreneurial.
          </p>
        </div>

        {/ Featured eBook Banner (si besoin) /}
        {ebooks.filter(b => b.featured).map(book => (
          <div key={book.id} className="max-w-xl mx-auto px- py-">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-/ to-purple-/ border border-blue-/ p- md:p- backdrop-blur-sm">
              <div className="absolute inset- bg-gradient-to-r from-blue-/ to-purple-/" />
              <div className="relative flex flex-col md:flex-row gap- items-center">
                <div className="w- h- rounded-xl overflow-hidden shadow-xl rotate- hover:rotate- transition-transform duration-">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex- text-center md:text-left">
                  <div className="inline-flex items-center gap- px- py- rounded-full bg-blue-/ text-blue- text-xs mb-">
                     Best-seller
                  </div>
                  <h className="text-xl md:text-xl font-bold text-white">{book.title}</h>
                  <p className="text-white/ text-sm mt-">{book.subtitle}</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap- mt-">
                    <div className="flex text-yellow-">{[...Array()].map((_, i) => <span key={i}></span>)}</div>
                    <span className="text-white/ text-xs">({book.reviews} avis)</span>
                    <span className="text-white/ text-xs">üìÑ {book.pages} pages</span>
                    <span className="text-white/ text-xs">üì± {book.format}</span>
                  </div>
                  <div className="flex flex-wrap gap- mt-">
                    <a
                      href={`${book.gumroadUrl}?wanted=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px- py- bg-blue- hover:bg-blue- rounded-full text-white text-sm font-semibold transition shadow-lg shadow-blue-/ inline-flex items-center gap-"
                    >
                      üìñ Acheter maintenant - {book.price}
                    </a>
                    <button className="px- py- border border-white/ rounded-full text-white text-sm font-semibold hover:bg-white/ transition">
                      Lire un extrait
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/ eBooks Grid /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="text-center mb-">
            <h className="text-xl md:text-xl font-bold">Nos <span className="text-blue-">eBooks</span></h>
            <p className="text-white/ text-sm mt-">Disponibles en PDF, EPUB et MOBI - Lecture imm√diate</p>
          </div>
          <div className="grid md:grid-cols- lg:grid-cols- gap-">
            {ebooks.map((book) => (
              <div
                key={book.id}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                className="group bg-white/ backdrop-blur-sm border border-white/ rounded-xl overflow-hidden transition-all duration- hover:border-blue-/ hover:shadow-xl hover:-translate-y-"
              >
                <div className="relative h- overflow-hidden">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration- group-hover:scale-" />
                  {book.isNew && (
                    <div className="absolute top- right- bg-gradient-to-r from-green- to-emerald- text-white text-xs font-bold px- py- rounded-full shadow-lg">
                      Nouveau
                    </div>
                  )}
                  <div className="absolute inset- bg-gradient-to-t from-black/ via-transparent to-transparent opacity- group-hover:opacity- transition-opacity flex items-end justify-center p-">
                    <button className="bg-white/ backdrop-blur-md text-white text-sm font-semibold px- py- rounded-full hover:bg-white/ transition">
                      Aper√ßu rapide
                    </button>
                  </div>
                </div>
                <div className="p-">
                  <div className="flex justify-between items-center mb-">
                    <span className="text-blue- text-xs font-semibold">{book.category}</span>
                    <div className="flex items-center gap-">
                      <span className="text-yellow- text-xs"></span>
                      <span className="text-white/ text-xs">{book.rating}</span>
                    </div>
                  </div>
                  <h className="text-lg font-bold text-white group-hover:text-blue- transition line-clamp-">{book.title}</h>
                  <p className="text-white/ text-xs mt-">par {book.author}</p>
                  <div className="flex flex-wrap gap- mt-">
                    {book.tags.slice(, ).map((tag, i) => (
                      <span key={i} className="text-white/ text-xs">{tag}</span>
                    ))}
                  </div>
                  <p className="text-white/ text-xs mt- line-clamp-">{book.description}</p>
                  <div className="flex items-center gap- mt-">
                    <span className="text-white/ text-xs">üìÑ {book.pages} p.</span>
                    <span className="text-white/ text-xs">üì± {book.format.split(' ')[]}</span>
                  </div>
                  <div className="flex justify-between items-center mt- pt- border-t border-white/">
                    <div>
                      <span className="text-xl font-bold text-blue-">{book.price}</span>
                      <span className="text-white/ text-xs line-through ml-">{book.originalPrice}</span>
                    </div>
                    <a
                      href={`${book.gumroadUrl}?wanted=true`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap- px- py- bg-gradient-to-r from-blue- to-purple- rounded-full text-white text-sm font-semibold hover:scale- transition shadow-lg"
                    >
                      üì• Acheter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/ Bundles Section /}
        <div className="bg-gradient-to-b from-transparent via-blue-/ to-transparent py-">
          <div className="max-w-xl mx-auto px-">
            <div className="text-center mb-">
              <h className="text-xl md:text-xl font-bold">Packs <span className="text-blue-">√âconomiques</span></h>
              <p className="text-white/ text-sm mt-">√âconomisez jusqu'√† % avec nos bundles</p>
            </div>
            <div className="grid md:grid-cols- gap-">
              {bundles.map((bundle) => (
                <div key={bundle.id} className="bg-gradient-to-r from-blue-/ to-purple-/ backdrop-blur-sm border border-blue-/ p- rounded-xl transition-all duration- hover:shadow-xl hover:-translate-y-">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-">
                    <div>
                      <h className="text-xl font-bold text-white">{bundle.title}</h>
                      <p className="text-white/ text-sm mt-">{bundle.description}</p>
                      <div className="flex items-center gap- mt-">
                        <span className="text-xl font-bold text-blue-">{bundle.price}</span>
                        <span className="text-white/ text-sm line-through">{bundle.originalPrice}</span>
                        <span className="bg-green-/ text-green- text-xs px- py-. rounded-full">
                          √âconomisez {bundle.savings}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex -space-x-">
                        {bundle.ebooks.map((id) => {
                          const book = ebooks.find(b => b.id === id)
                          return book ? (
                            <img key={id} src={book.cover} alt="" className="w- h- rounded-lg object-cover border- border-white/" />
                          ) : null
                        })}
                      </div>
                      {/ Bundle ‚Äì lien composite (ex: page d√di√e ou lien vers le bundle Gumroad) /}
                      <button className="mt- px- py- bg-gradient-to-r from-blue- to-purple- rounded-full text-white text-sm font-semibold hover:scale- transition">
                        Acheter le pack
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/ Features Section /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="grid md:grid-cols- gap- text-center">
            <div className="bg-white/ backdrop-blur-sm border border-white/ p- rounded-xl transition-all hover:border-blue-/">
              <div className="text-xl mb-">üì±</div>
              <h className="text-white font-semibold">Multi-format</h>
              <p className="text-white/ text-sm mt-">PDF, EPUB, MOBI - Lisez sur tous vos appareils</p>
            </div>
            <div className="bg-white/ backdrop-blur-sm border border-white/ p- rounded-xl transition-all hover:border-blue-/">
              <div className="text-xl mb-"></div>
              <h className="text-white font-semibold">Livraison imm√diate</h>
              <p className="text-white/ text-sm mt-">T√l√chargement instantan√ apr√®s achat</p>
            </div>
            <div className="bg-white/ backdrop-blur-sm border border-white/ p- rounded-xl transition-all hover:border-blue-/">
              <div className="text-xl mb-">üîÑ</div>
              <h className="text-white font-semibold">Mises √† jour gratuites</h>
              <p className="text-white/ text-sm mt-">Recevez les nouvelles versions √† vie</p>
            </div>
          </div>
        </div>

        {/ Testimonials /}
        <div className="max-w-xl mx-auto px- py-">
          <div className="text-center mb-">
            <h className="text-xl md:text-xl font-bold">Ce que nos <span className="text-blue-">lecteurs disent</span></h>
          </div>
          <div className="grid md:grid-cols- gap-">
            {[
              { name: "Sophie Martin", role: "Fondatrice", text: "Un contenu incroyablement riche et bien structur√ !", rating: , book: "The Startup Blueprint" },
              { name: "Thomas Bernard", role: "CEO", text: "Ces eBooks m'ont sauv√ des mois de recherche.", rating: , book: "Business Credit Mastery" },
              { name: "√âlodie Rousseau", role: "E-commer√ßante", text: "Des conseils pratiques et directement applicables.", rating: , book: "E-Commerce Empire" }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/ backdrop-blur-sm border border-white/ p- rounded-xl transition-all duration- hover:border-blue-/">
                <div className="flex text-yellow- mb-">{[...Array(testimonial.rating)].map((_, i) => <span key={i}></span>)}</div>
                <p className="text-white/ text-sm italic">"{testimonial.text}"</p>
                <div className="mt-">
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-white/ text-xs">{testimonial.role}</p>
                  <p className="text-blue- text-xs mt-">üìñ {testimonial.book}</p>
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