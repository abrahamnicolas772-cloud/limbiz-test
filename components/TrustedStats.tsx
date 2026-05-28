'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FiUsers, FiTrendingUp, FiHeadphones, FiAward } from 'react-icons/fi'

const stats = [
  { value: '+', label: 'Clients Worldwide', icon: <FiUsers size={} /> },
  { value: '%', label: 'Satisfaction Rate', icon: <FiTrendingUp size={} /> },
  { value: '/', label: 'Premium Support', icon: <FiHeadphones size={} /> },
  { value: '+', label: 'Awards Won', icon: <FiAward size={} /> },
]

export default function TrustedStats() {
  const ref = useRef(null)

  return (
    <section className="py- relative overflow-hidden bg-black/ border-y border-white/">
      <div className="absolute inset- -z-">
        <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-xl" />
        <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-xl" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px-">
        <div className="grid md:grid-cols- gap- items-center">
          <motion.div
            initial={{ opacity: , x: - }}
            whileInView={{ opacity: , x:  }}
            viewport={{ once: true }}
            transition={{ duration: . }}
            className="text-center md:text-left"
          >
            <p className="text-blue- text-sm font-semibold tracking-wider uppercase mb-">Why choose us</p>
            <h className="text-xl md:text-xl font-bold tracking-tight">Trusted by <span className="text-blue-">innovators</span></h>
            <p className="mt- text-white/ max-w-md leading-relaxed">We partner with forward-thinking brands to deliver measurable results and exceptional digital experiences.</p>
          </motion.div>

          <div ref={ref} className="grid grid-cols- sm:grid-cols- lg:grid-cols- gap-">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: , y:  }}
                whileInView={{ opacity: , y:  }}
                viewport={{ once: true }}
                transition={{ delay: idx  ., duration: . }}
                whileHover={{ y: - }}
                className="glass-card p- text-center backdrop-blur-sm border border-white/ rounded-xl cursor-pointer hover:border-blue-/ transition group"
              >
                <div className="text-blue- mb- flex justify-center group-hover:scale- transition">{stat.icon}</div>
                <div className="text-xl md:text-xl font-bold text-white">{stat.value}</div>
                <div className="mt- text-white/ text-xs uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}