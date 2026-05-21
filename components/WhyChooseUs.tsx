'use client'
import { motion } from 'framer-motion'
import { FiClock, FiTrendingUp, FiCheckCircle, FiHeadphones } from 'react-icons/fi'

const features = [
  { icon: <FiClock size={24} />, title: 'Fast Delivery', desc: 'Launch in weeks, not months' },
  { icon: <FiTrendingUp size={24} />, title: 'Premium Design', desc: 'Award-winning aesthetics' },
  { icon: <FiCheckCircle size={24} />, title: 'Conversion Focused', desc: 'ROI-driven strategies' },
  { icon: <FiHeadphones size={24} />, title: 'Dedicated Support', desc: '24/7 priority assistance' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase mb-2">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why <span className="text-blue-500">Choose Us</span></h2>
            <div className="mt-8 space-y-5">
              {features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ x: 6 }} className="flex gap-4 items-start group cursor-pointer">
                  <div className="text-blue-400 mt-1 group-hover:scale-110 transition">{feature.icon}</div>
                  <div><h3 className="font-semibold text-white">{feature.title}</h3><p className="text-white/50 text-sm">{feature.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-2 rounded-2xl shadow-2xl">
            <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/S8XncK7sHfM?autoplay=1&loop=1&playlist=S8XncK7sHfM&mute=1&controls=1&modestbranding=1&rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <p className="text-center text-white/50 text-xs mt-3 tracking-wide">Inspiring business journey — watch in loop</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}