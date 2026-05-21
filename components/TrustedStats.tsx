'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FiUsers, FiTrendingUp, FiHeadphones, FiAward } from 'react-icons/fi'

const stats = [
  { value: '100+', label: 'Clients Worldwide', icon: <FiUsers size={24} /> },
  { value: '95%', label: 'Satisfaction Rate', icon: <FiTrendingUp size={24} /> },
  { value: '24/7', label: 'Premium Support', icon: <FiHeadphones size={24} /> },
  { value: '50+', label: 'Awards Won', icon: <FiAward size={24} /> },
]

export default function TrustedStats() {
  const ref = useRef(null)

  return (
    <section className="py-24 relative overflow-hidden bg-black/30 border-y border-white/10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2">Why choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by <span className="text-blue-500">innovators</span></h2>
            <p className="mt-4 text-white/60 max-w-md leading-relaxed">We partner with forward-thinking brands to deliver measurable results and exceptional digital experiences.</p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="glass-card p-5 text-center backdrop-blur-sm border border-white/10 rounded-2xl cursor-pointer hover:border-blue-500/40 transition group"
              >
                <div className="text-blue-400 mb-2 flex justify-center group-hover:scale-110 transition">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-white/50 text-xs uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}