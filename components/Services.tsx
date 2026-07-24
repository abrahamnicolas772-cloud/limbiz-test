'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  FiBriefcase, FiFileText, FiUserCheck, FiMapPin, 
  FiTrendingUp, FiDollarSign, FiShield, FiGlobe,
  FiArrowRight, FiPlus, FiCopy, FiMonitor, FiShoppingCart,
  FiLock, FiCode, FiCreditCard
} from 'react-icons/fi'

const serviceCategories = [
  {
    id: 'formation',
    title: 'Business Formations',
    icon: <FiBriefcase className="w-6 h-6" />,
    description: 'Start your business legally with full compliance and expert guidance.',
    services: [
      'LLC Filings',
      'Corporation Filings',
      'EIN Registrations',
      'Operating Agreements',
      'DBA / Fictitious Names',
      'BOIR Guidance',
    ],
    link: '/services'
  },
  {
    id: 'setup',
    title: 'Business Setups',
    icon: <FiMapPin className="w-6 h-6" />,
    description: 'Get your business ready to operate with essential infrastructure.',
    services: [
      'Business Addresses',
      'Registered Agents',
      'Business Emails',
      'Google Business Profiles',
      'DUNS Numbers',
      'Permits & Certificates',
      'Business Banking',
      'Business Phone',
      'Business Insurance',
    ],
    link: '/services'
  },
  {
    id: 'growth',
    title: 'Growth & Compliances',
    icon: <FiTrendingUp className="w-6 h-6" />,
    description: 'Build credit, secure funding, and stay compliant with regulations.',
    services: [
      'Business Credits',
      'Funding Assistances',
      'Tax Filings',
      'Annual Reports',
      'Compliance Reminders',
    ],
    link: '/services'
  },
  {
    id: 'protection',
    title: 'Protections & Digitals',
    icon: <FiLock className="w-6 h-6" />,
    description: 'Protect your brand, assets, and build your digital presence.',
    services: [
      'Trademarks',
      'Copyrights',
      'Website Developments',
      'E-commerce Setups',
      'Privacy & Terms',
      'Consultations',
    ],
    link: '/services'
  }
]

export default function Services() {
  const ref = useRef(null)

  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <section id="services" className="relative py-16 md:py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="text-blue-400/60 text-xs uppercase tracking-[0.3em] font-light mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-tight"
            >
              Everything You Need to <span className="font-bold text-blue-400">Succeed</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="mt-3 text-white/30 text-sm font-light tracking-wide max-w-2xl mx-auto"
            >
              From formations to fundings, we provide comprehensive services to help you 
              start, structure, fund, grow, and protect your business.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-full mx-auto mt-4"
            />
          </div>

          <div ref={ref} className="grid md:grid-cols-2 gap-4 md:gap-6">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.05)] transition-all duration-500"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-700 blur-xl -z-10" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white/90 group-hover:text-blue-400 transition">
                      {category.title}
                    </h3>
                    <p className="text-white/30 text-sm mt-0.5">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.services.map((service, sIdx) => (
                    <span 
                      key={sIdx}
                      className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-white/50 text-xs border border-white/5 hover:border-blue-400/30 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <Link href={category.link} className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-full text-white text-sm font-medium shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition flex items-center gap-1.5">
                    Get Started <FiArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/services" className="px-4 py-2 text-white/40 hover:text-white text-sm transition flex items-center gap-1 group-hover:gap-2">
                    Learn More <FiPlus className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 rounded-full text-white/60 hover:text-white text-sm font-light tracking-wide transition-all duration-300 group"
            >
              View All Services 
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
