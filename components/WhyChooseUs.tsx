'use client'
import { motion } from 'framer-motion'
import { FiClock, FiTrendingUp, FiCheckCircle, FiHeadphones } from 'react-icons/fi'

const features = [
  { icon: <FiClock size={} />, title: 'Fast Delivery', desc: 'Launch in weeks, not months' },
  { icon: <FiTrendingUp size={} />, title: 'Premium Design', desc: 'Award-winning aesthetics' },
  { icon: <FiCheckCircle size={} />, title: 'Conversion Focused', desc: 'ROI-driven strategies' },
  { icon: <FiHeadphones size={} />, title: 'Dedicated Support', desc: '/ priority assistance' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none z-" />
      <div className="absolute inset- -z-">
        <div className="absolute top-/ left- w- h- bg-blue-/ rounded-full blur-xl" />
        <div className="absolute bottom- right- w- h- bg-purple-/ rounded-full blur-xl" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="grid lg:grid-cols- gap- items-center">
          <motion.div initial={{ opacity: , x: - }} whileInView={{ opacity: , x:  }} viewport={{ once: true }} transition={{ duration: . }}>
            <p className="text-blue- text-sm tracking-wider font-semibold uppercase mb-">Why Us</p>
            <h className="text-xl md:text-xl font-bold tracking-tight">Why <span className="text-blue-">Choose Us</span></h>
            <div className="mt- space-y-">
              {features.map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: idx  . }} whileHover={{ x:  }} className="flex gap- items-start group cursor-pointer">
                  <div className="text-blue- mt- group-hover:scale- transition">{feature.icon}</div>
                  <div><h className="font-semibold text-white">{feature.title}</h><p className="text-white/ text-sm">{feature.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: , x:  }} whileInView={{ opacity: , x:  }} viewport={{ once: true }} transition={{ duration: . }} className="glass-card p- rounded-xl shadow-xl">
            <div className="relative w-full pt-[.%] rounded-xl overflow-hidden">
              <iframe className="absolute top- left- w-full h-full" src="https://www.youtube.com/embed/SXncKsHfM?autoplay=&loop=&playlist=SXncKsHfM&mute=&controls=&modestbranding=&rel=" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <p className="text-center text-white/ text-xs mt- tracking-wide">Inspiring business journey — watch in loop</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}