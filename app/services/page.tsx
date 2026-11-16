'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { serviceCategories } from '@/lib/services-data'
import { ArrowRight, ShoppingCart, Check, FileText, ChevronDown } from 'lucide-react'

const getGridLayout = (count: number): number[] => {
  if (count === 5) return [2, 3]
  if (count === 10) return [2, 2, 3, 3]
  if (count === 11) return [2, 3, 3, 3]
  if (count <= 3) return [count]
  if (count === 4) return [2, 2]
  if (count === 6) return [3, 3]
  if (count === 7) return [3, 4]
  if (count === 8) return [4, 4]
  if (count === 9) return [3, 3, 3]
  const rows: number[] = []
  let remaining = count
  while (remaining > 0) {
    const size = Math.min(3, remaining)
    rows.push(size)
    remaining -= size
  }
  return rows
}

export default function ServicesPage() {
  const { addItem, items } = useCart()
  const router = useRouter()
  const [addedId, setAddedId] = useState<string | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>('formation')

  useEffect(() => {
    if (addedId) {
      const t = setTimeout(() => setAddedId(null), 2000)
      return () => clearTimeout(t)
    }
  }, [addedId])

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

  const toggleCategory = (id: string) => {
    setOpenCategory(prev => prev === id ? null : id)
  }

  const renderServiceCard = (service: any, idx: number) => {
    const isFrom = service.price.includes('From') || service.price.includes('Custom')
    const isAdded = addedId === service.name || items.some(i => i.id === service.name)

    return (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.03 }}
        whileHover={{ y: -4 }}
        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-400/30 via-blue-400/10 to-cyan-400/20 hover:from-blue-400/50 hover:to-cyan-400/40 transition-all duration-500"
      >
        <div className="relative bg-blue-950/50 backdrop-blur-xl rounded-2xl p-5 flex flex-col h-full overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-400/25 transition-colors duration-500" />

          <div className="relative flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-blue-300 transition-colors leading-tight">
                {service.name}
              </h3>
              <span className="text-[9px] uppercase tracking-wider text-blue-300/60 bg-blue-400/10 px-1.5 py-0.5 rounded border border-blue-400/20 shrink-0">
                Svc
              </span>
            </div>
            <p className="text-blue-100/50 text-xs leading-relaxed line-clamp-3">
              {service.note}
            </p>
          </div>

          <div className="relative mt-4 pt-3 border-t border-white/[0.06]">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-blue-300 font-bold text-lg">{service.price}</span>
              {service.unit && <span className="text-white/30 text-xs">{service.unit}</span>}
            </div>

            {isFrom ? (
              <button
                onClick={() => router.push('/contact')}
                className="w-full px-4 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] rounded-full text-white/80 text-xs font-medium transition inline-flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3 h-3" strokeWidth={2} />
                Contact for Quote
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => handleGetStarted(service)}
                  className="flex-1 px-3 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/40 hover:border-blue-300/60 hover:bg-blue-500/30 rounded-full text-white text-xs font-medium transition inline-flex items-center justify-center gap-1"
                >
                  Get Started
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </button>
                <button
                  onClick={() => handleAddToCart(service)}
                  className={`flex-1 px-3 py-2 rounded-full text-xs font-medium transition border inline-flex items-center justify-center gap-1 ${
                    isAdded
                      ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                      : 'bg-white/[0.04] border-white/10 hover:border-blue-400/40 text-white/80 hover:text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                      Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-3 h-3" strokeWidth={2} />
                      Add
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    )
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
          {/* HERO — pi gwo, mwens espas anlè */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Explore Our{' '}
              <span className="text-blue-400 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent rounded-full" />
              </span>
            </h1>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Choose individual services or explore our complete packages.
            </p>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mt-6" />
          </motion.div>

          {/* KATEGORI */}
          <div className="space-y-8 w-full max-w-6xl mx-auto">
            {serviceCategories.map((category, catIdx) => {
              const isOpen = openCategory === category.id
              const layout = getGridLayout(category.services.length)
              let serviceIndex = 0

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.08 }}
                  className="overflow-hidden"
                >
                  {/* TIT KATEGORI — SANTRE */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex flex-col items-center gap-3 py-6 group"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                          isOpen
                            ? 'bg-blue-500/20 border-blue-400/50 text-blue-300'
                            : 'bg-white/[0.04] border-white/10 text-white/50 group-hover:text-white group-hover:border-blue-400/30'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                      </motion.div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white group-hover:text-blue-300 transition-colors tracking-tight text-center">
                        {category.title}
                      </h2>

                      <span className="text-[10px] uppercase tracking-wider text-blue-300/70 bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-400/20 shrink-0 font-semibold">
                        {category.services.length} services
                      </span>
                    </div>

                    <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed">
                      {category.description}
                    </p>
                  </button>

                  {/* KONTNI */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-2">
                          <div className="space-y-4">
                            {layout.map((rowSize, rowIdx) => {
                              const rowServices = category.services.slice(serviceIndex, serviceIndex + rowSize)
                              const startIdx = serviceIndex
                              serviceIndex += rowSize

                              const colClass =
                                rowSize === 2 ? 'md:grid-cols-2 max-w-3xl' :
                                rowSize === 3 ? 'md:grid-cols-3 max-w-5xl' :
                                rowSize === 4 ? 'md:grid-cols-4 max-w-6xl' :
                                'md:grid-cols-2'

                              return (
                                <div
                                  key={rowIdx}
                                  className={`grid grid-cols-1 ${colClass} gap-4 mx-auto`}
                                >
                                  {rowServices.map((service, idx) =>
                                    renderServiceCard(service, startIdx + idx)
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
