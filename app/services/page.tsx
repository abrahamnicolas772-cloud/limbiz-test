'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const allServices = [
  {
    category: 'Business Formation',
    icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>),
    items: [
      { name: 'LLC Filing', desc: 'Form your LLC in any state with full compliance and expert guidance.', price: '$499+', link: '/services/llc', badge: 'Popular' },
      { name: 'EIN Registration', desc: 'Get your Employer Identification Number from the IRS quickly.', price: '$99', link: '/services/ein', badge: 'Essential' },
      { name: 'Operating Agreement', desc: 'Customized operating agreement for your LLC.', price: '$149', link: '/services/llc' },
      { name: 'DBA / Fictitious Name', desc: 'Register your business under a different name.', price: '$99', link: '/services/dba' },
      { name: 'BOIR Guidance', desc: 'Comply with Beneficial Ownership Information reporting.', price: '$99', link: '/services/boir' },
    ]
  },
  {
    category: 'Business Setup',
    icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
    items: [
      { name: 'Business Address', desc: 'Get a professional business address in any state.', price: '$149/yr', link: '/services/business-address', badge: 'Privacy' },
      { name: 'Registered Agent', desc: 'Professional registered agent service in all 50 states.', price: '$199/yr', link: '/services/registered-agent', badge: 'Required' },
      { name: 'Business Email', desc: 'Professional email address for your business.', price: '$49/yr', link: '/services/website' },
      { name: 'Google Business Profile', desc: 'Set up and optimize your Google Business Profile.', price: '$199', link: '/services/website' },
    ]
  },
  {
    category: 'Growth & Compliance',
    icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
    items: [
      { name: 'Business Credit', desc: 'Build and improve your business credit score.', price: '$299', link: '/credit-hub', badge: 'Growth' },
      { name: 'Funding Assistance', desc: 'Get help finding and applying for business funding.', price: '$499', link: '/funding-center', badge: 'Funding' },
      { name: 'Tax Filings', desc: 'Professional tax filing assistance for your business.', price: '$399', link: '/tax-filings', badge: 'Tax' },
      { name: 'Annual Reports', desc: 'Stay compliant with annual report filings.', price: '$149/yr', link: '/services/compliance' },
      { name: 'Compliance Reminders', desc: 'Never miss a deadline with automated reminders.', price: '$99/yr', link: '/services/compliance' },
    ]
  },
  {
    category: 'Protection & Digital',
    icon: (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    items: [
      { name: 'Trademark Registration', desc: 'Protect your brand name and logo with federal registration.', price: '$599', link: '/services/trademark', badge: 'Protect' },
      { name: 'Copyright Registration', desc: 'Protect your creative works and content.', price: '$399', link: '/services/copyright', badge: 'Create' },
      { name: 'Website Development', desc: 'Professional website design and development.', price: '$2,999', link: '/services/website', badge: 'Digital' },
      { name: 'E-commerce Setup', desc: 'Launch your online store with payment processing.', price: '$1,999', link: '/services/ecommerce', badge: 'Sell' },
      { name: 'Business Consultation', desc: 'Expert guidance for your business journey.', price: 'Free', link: '/services/consultation', badge: 'Free' },
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,60,140,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">All <span className="text-blue-300">Services</span></h1>
            <p className="text-white/40 mt-3 max-w-2xl mx-auto">
              Everything you need to start, structure, fund, grow, and protect your business.
            </p>
          </motion.div>

          <div className="space-y-10">
            {allServices.map((category, catIdx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((service, idx) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-blue-400/30 hover:bg-white/[0.07] transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition">
                          {service.name}
                        </h3>
                        {service.badge && (
                          <span className="text-[10px] px-2 py-0.5 bg-blue-500/15 text-blue-300 rounded-full font-medium flex-shrink-0">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-bold text-sm">{service.price}</span>
                        <Link
                          href={service.link}
                          className="text-white/30 hover:text-white text-xs flex items-center gap-1 transition group/link"
                        >
                          Learn More
                          <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-white/20 text-xs mb-4">Not sure which service you need?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition">
              Book a Free Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
