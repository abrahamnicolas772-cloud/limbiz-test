'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceCategories } from '@/lib/services-data'
import { ArrowRight, Sparkles } from '@/lib/icons'

export default function Services() {
  const firstTwo = serviceCategories.slice(0, 2)
  const lastThree = serviceCategories.slice(2, 5)

  const renderCard = (category: any, idx: number) => {
    // Pri minimòm nan kategori a
    const prices = category.services
      .map((s: any) => parseFloat(s.price?.replace(/[^0-9.]/g, '') || '0'))
      .filter((p: number) => p > 0)
    const minPrice = prices.length > 0 ? Math.min(...prices) : null

    return (
      <motion.div
        key={category.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.06, duration: 0.35 }}
        whileHover={{ y: -6 }}
        className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-400/40 via-blue-400/15 to-cyan-400/30 hover:from-blue-400/60 hover:via-cyan-400/20 hover:to-cyan-400/50 transition-all duration-500"
        style={{ boxShadow: '0 0 0 rgba(59,130,246,0)' }}
      >
        <div className="relative bg-blue-950/60 backdrop-blur-xl rounded-2xl p-5 flex flex-col h-full overflow-hidden">

          {/* Top highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

          {/* Inner glow anlè dwat */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl group-hover:bg-blue-400/25 transition-colors duration-500" />

          {/* Inner glow anba gòch */}
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Header: title + arrow */}
          <div className="relative flex items-start justify-between gap-3 mb-3">
            <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
              {category.title}
            </h3>
            <Link
              href="/services"
              className="text-blue-300/60 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1"
              aria-label="View details"
            >
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          {/* Stats badge */}
          <div className="relative flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-400/10 border border-blue-400/20 rounded-full text-blue-300/80 text-[10px] font-medium">
              <Sparkles className="w-2.5 h-2.5" strokeWidth={2.5} />
              {category.services.length} services
            </span>
            {minPrice && (
              <span className="text-blue-300/60 text-[10px] font-medium">
                From ${minPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="relative text-blue-100/50 text-xs leading-relaxed mb-4 line-clamp-2">
            {category.description}
          </p>

          {/* Services tags */}
          <div className="relative flex flex-wrap gap-1.5 mt-auto">
            {category.services.slice(0, 6).map((service: any, sIdx: number) => (
              <span
                key={sIdx}
                className="inline-flex items-center px-2 py-0.5 bg-blue-400/[0.08] hover:bg-blue-400/15 rounded-md text-blue-100/70 text-[11px] border border-blue-400/15 hover:border-blue-400/30 transition-colors duration-200 whitespace-nowrap"
              >
                {service.name}
              </span>
            ))}
            {category.services.length > 6 && (
              <span className="inline-flex items-center px-2 py-0.5 bg-blue-400/10 rounded-md text-blue-300/90 text-[11px] border border-blue-400/20 font-medium">
                +{category.services.length - 6} more
              </span>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <section id="services" className="relative py-16 md:py-20 overflow-hidden bg-black">
        {/* BACKGROUND — KENBE MENM JAN (8 KOUCH) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.6)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, rgba(59,130,246,0.5) 0px, rgba(59,130,246,0.5) 1px, transparent 1px, transparent 20px)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '180px 180px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-400/60 text-xs uppercase tracking-[0.3em] font-light mb-3">
              Our Services
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight">
              Everything You Need to <span className="font-bold text-blue-400">Succeed</span>
            </motion.h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-400/30 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:max-w-4xl lg:mx-auto mb-4">
            {firstTwo.map((cat, idx) => renderCard(cat, idx))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lastThree.map((cat, idx) => renderCard(cat, idx + 2))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mt-10"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-500/10 backdrop-blur-xl border border-blue-400/30 hover:border-blue-300/50 hover:bg-blue-500/20 transition-all duration-300"
            >
              <span className="text-white/95 text-sm font-medium tracking-wide">
                All Services
              </span>
              <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>
    </>
  )
}
