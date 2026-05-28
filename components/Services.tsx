'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiCreditCard, FiShoppingCart, FiShield, FiArrowRight } from 'react-icons/fi'

const services = [
  { icon: <FiBriefcase size={} />, title: 'LLC Formation & Business Setup', desc: 'Complete legal registration and compliance.' },
  { icon: <FiCreditCard size={} />, title: 'Business Credit & Funding', desc: 'Build credit and secure capital.' },
  { icon: <FiShoppingCart size={} />, title: 'E-Commerce Setup', desc: 'Launch your online store.' },
  { icon: <FiShield size={} />, title: 'Trademark Guidance', desc: 'Protect your brand.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none z-" />
      <div className="absolute inset- -z-">
        <div className="absolute top- right- w- h- bg-blue-/ rounded-full blur-xl" />
        <div className="absolute bottom- left- w- h- bg-purple-/ rounded-full blur-xl" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="text-center mb-">
          <motion.p initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} className="text-blue- text-sm tracking-wider font-semibold uppercase">Premium Services</motion.p>
          <motion.h initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} transition={{ delay: . }} className="text-xl md:text-xl font-bold mt- tracking-tight">What We <span className="text-blue-">Offer</span></motion.h>
        </div>

        <div className="grid md:grid-cols- lg:grid-cols- gap-">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: , y:  }}
              whileInView={{ opacity: , y:  }}
              viewport={{ once: true }}
              transition={{ delay: idx  ., duration: . }}
              whileHover={{ y: - }}
              className="glass-card p- rounded-xl text-center group cursor-pointer transition-all duration- hover:border-blue-/"
            >
              <div className="text-blue- mb- flex justify-center group-hover:scale- transition duration-">{service.icon}</div>
              <h className="text-xl font-semibold text-white">{service.title}</h>
              <p className="text-white/ text-sm mt- leading-relaxed">{service.desc}</p>
              <button className="mt- text-blue- text-sm flex items-center justify-center gap- group-hover:gap- transition-all duration-">Learn More <FiArrowRight size={} /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}