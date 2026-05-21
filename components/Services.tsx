'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCreditCard, FiShoppingCart, FiShield, FiArrowRight } from 'react-icons/fi'

const services = [
  { icon: <FiBriefcase size={32} />, title: 'LLC Formation & Business Setup', desc: 'Complete legal registration and compliance.' },
  { icon: <FiCreditCard size={32} />, title: 'Business Credit & Funding', desc: 'Build credit and secure capital.' },
  { icon: <FiShoppingCart size={32} />, title: 'E-Commerce Setup', desc: 'Launch your online store.' },
  { icon: <FiShield size={32} />, title: 'Trademark Guidance', desc: 'Protect your brand.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Premium Services</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">What We <span className="text-blue-500">Offer</span></motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 rounded-2xl text-center group cursor-pointer transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{service.desc}</p>
              <button className="mt-5 text-blue-400 text-sm flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-300">Learn More <FiArrowRight size={14} /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}