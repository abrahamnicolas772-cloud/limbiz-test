'use client'

import { motion } from 'framer-motion'

const projects = [
  { name: 'TechFlow', desc: 'SaaS Platform', tag: 'LLC + Trademark', color: 'from-blue-500 to-cyan-400' },
  { name: 'GreenLeaf', desc: 'Eco Products', tag: 'Corporation', color: 'from-green-500 to-emerald-400' },
  { name: 'UrbanVault', desc: 'Real Estate', tag: 'LLC + EIN', color: 'from-purple-500 to-pink-400' },
]

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-400 text-sm tracking-wider font-light">RECENT WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12 tracking-tight text-white">
          Our <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${p.color} mb-4`} />
              <h3 className="text-xl font-semibold text-white mb-1">{p.name}</h3>
              <p className="text-gray-400 mb-3">{p.desc}</p>
              <span className="text-xs bg-gray-800 text-blue-400 px-3 py-1 rounded-full">{p.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
