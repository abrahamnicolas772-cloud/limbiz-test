'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { serviceCategories } from '@/lib/services-data'

// services soti nan lib/services-data.ts


export default function ServicesPage() {
  const { addItem } = useCart()
  const router = useRouter()
  const [addedId, setAddedId] = useState<string | null>(null)

  const parsePrice = (price: string) => {
    return parseFloat(price.replace('$', '').replace('From ', '').replace(',', ''))
  }

  const handleGetStarted = (service: any) => {
    const price = parsePrice(service.price)
    router.push(`/checkout?service=${encodeURIComponent(service.name)}&price=${price}`)
  }

  const handleAddToCart = (service: any) => {
    const price = parsePrice(service.price)
    addItem({
      id: service.name,
      name: service.name,
      price: price,
      unit: service.unit,
      note: service.note
    })
    setAddedId(service.name)
  }

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">All <span className="text-blue-300">Services</span></h1>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">
              Choose individual services or explore our complete packages.
            </p>
          </motion.div>

          <div className="space-y-16 w-full">
            {serviceCategories.map((category, catIdx) => (
              <motion.div key={category.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIdx * 0.1 }}>
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-white/40 text-sm mt-1">{category.description}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                  {category.services.map((service, idx) => {
                    const isFrom = service.price.includes('From') || service.price.includes('Custom')
                    const { items } = useCart()
                    const isAdded = addedId === service.name || items.some(i => i.id === service.name)

                    return (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: catIdx * 0.1 + idx * 0.03 }} 
                        className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition group flex flex-col"
                      >
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{service.name}</h3>
                          <p className="text-white/30 text-xs mt-2 leading-relaxed">{service.note}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/[0.05]">
                          <div className="flex items-baseline gap-1 mb-3">
                            <span className="text-blue-300 font-bold text-lg">{service.price}</span>
                            {service.unit && <span className="text-white/30 text-xs">{service.unit}</span>}
                          </div>
                          {isFrom ? (
                            <button 
                              onClick={() => router.push('/contact')}
                              className="w-full px-4 py-2 bg-white/[0.05] border border-white/10 hover:border-blue-400/30 hover:bg-white/[0.08] rounded-full text-white/70 text-xs font-medium transition"
                            >
                              Contact Us for a Quote
                            </button>
                          ) : (
                            <div className="flex gap-2">
                              <button 
                                onClick={() => handleGetStarted(service)}
                                className="flex-1 px-3 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-full text-white text-xs font-medium transition"
                              >
                                Get Started
                              </button>
                              <button 
                                onClick={() => handleAddToCart(service)}
                                className={`flex-1 px-3 py-2 rounded-full text-xs font-medium transition border ${
                                  isAdded 
                                    ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' 
                                    : 'bg-white/[0.05] border-white/10 hover:border-blue-400/30 text-white/70 hover:text-white'
                                }`}
                              >
                                {isAdded ? 'Added' : 'Add to Cart'}
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
