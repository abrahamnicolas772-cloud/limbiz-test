'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceCategories = [
  {
    id: 'formation',
    title: 'Business Formation',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>),
    description: 'Start your business legally with full compliance and expert guidance.',
    color: 'from-blue-500 to-cyan-400',
    services: [
      { name: 'LLC Filing', desc: 'Form your LLC in any state with complete state-specific compliance' },
      { name: 'EIN Registration', desc: 'Get your Employer Identification Number from the IRS quickly' },
      { name: 'Operating Agreement', desc: 'Customized operating agreement for your LLC structure' },
      { name: 'DBA / Fictitious Name', desc: 'Register your business under a different name' },
      { name: 'S-Corporation Election Assistance', desc: 'Elect S-Corp status for potential tax benefits' },
      { name: 'LLC Amendments & Business Changes', desc: 'Update your LLC structure or information' },
      { name: 'Foreign Qualification', desc: 'Register your LLC to operate in additional states' },
      { name: 'Business Reinstatement', desc: 'Restore a dissolved or suspended business' },
      { name: 'Business Dissolution', desc: 'Properly close your business with the state' },
    ]
  },
  {
    id: 'setup',
    title: 'Business Setup',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
    description: 'Get your business ready to operate with essential infrastructure.',
    color: 'from-emerald-500 to-green-400',
    services: [
      { name: 'Business Address', desc: 'Professional address in any U.S. state' },
      { name: 'Registered Agent', desc: 'Legal compliance representative for your business' },
      { name: 'Business Email', desc: 'Professional email matching your domain' },
      { name: 'Google Business Profile', desc: 'Get found on Google Search and Maps' },
      { name: 'Business Licenses & Permits', desc: 'Identify and obtain required licenses' },
      { name: 'Sales Tax Permit / Resale Certificate', desc: 'Register for state sales tax collection' },
      { name: 'D-U-N-S Number Assistance', desc: 'Get your D&B business credit identifier' },
      { name: 'Business Phone System', desc: 'Professional business phone number' },
      { name: 'Business Banking Setup', desc: 'Open your business bank account' },
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Compliance',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
    description: 'Build credit, secure funding, and stay compliant with regulations.',
    color: 'from-purple-500 to-pink-400',
    services: [
      { name: 'Business Credit Building', desc: 'Build a strong business credit profile' },
      { name: 'Business Funding Assistance', desc: 'Access funding options for your business' },
      { name: 'Business Tax Filing Assistance', desc: 'Professional tax preparation and filing' },
      { name: 'Annual Report Filing', desc: 'Stay compliant with annual state requirements' },
      { name: 'Compliance Monitoring & Reminders', desc: 'Never miss a deadline with automated alerts' },
      { name: 'Business Consulting', desc: 'Expert guidance for your business growth' },
    ]
  },
  {
    id: 'international',
    title: 'International Services',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    description: 'Supporting international entrepreneurs with U.S. business formation.',
    color: 'from-amber-500 to-orange-400',
    services: [
      { name: 'International ITIN Application Assistance', desc: 'Get your Individual Taxpayer Identification Number' },
      { name: 'International Entrepreneur Business Formation', desc: 'Start your U.S. business from abroad' },
      { name: 'Foreign-Owned LLC Support', desc: 'Comprehensive LLC formation for foreign owners' },
      { name: 'EIN Assistance for Foreign Owners', desc: 'Get your EIN without an SSN' },
      { name: 'U.S. Business Address', desc: 'Physical address for your U.S. business' },
      { name: 'Registered Agent Service', desc: 'Legal compliance representative in any state' },
    ]
  },
  {
    id: 'protection',
    title: 'Protection & Digital',
    icon: (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    description: 'Protect your brand, assets, and build your digital presence.',
    color: 'from-rose-500 to-red-400',
    services: [
      { name: 'Trademark Application Assistance', desc: 'Protect your brand name and logo' },
      { name: 'Copyright Registration Assistance', desc: 'Protect your creative works' },
      { name: 'Business Branding', desc: 'Develop a cohesive brand identity' },
      { name: 'Logo & Brand Identity', desc: 'Professional logo design for your business' },
      { name: 'Website Design & Development', desc: 'Build a professional business website' },
      { name: 'Domain Registration', desc: 'Secure your domain name' },
      { name: 'E-commerce Store Setup', desc: 'Launch your online store' },
      { name: 'Social Media Business Setup', desc: 'Establish your social media presence' },
      { name: 'Digital Business Card', desc: 'Modern digital business card' },
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060b14] via-[#0b1a2e] to-[#0f2847]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Complete Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">All <span className="text-blue-300">Services</span></h1>
            <p className="text-white/40 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to start, structure, fund, grow, and protect your business.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8 justify-center text-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                    <p className="text-white/40 text-sm mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                  {category.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIdx * 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={`/checkout?plan=basic&state=florida&service=${encodeURIComponent(service.name)}`}
                        className="group block h-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 hover:border-blue-400/30 hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10" />
                        
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{service.name}</h3>
                            <p className="text-white/40 text-xs mt-1 leading-relaxed">{service.desc}</p>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-1 text-white/20 text-xs group-hover:text-blue-400 transition-colors">
                          Get Started
                          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-center mt-16">
            <p className="text-white/30 text-sm mb-4">Not sure which service you need?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold text-sm shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
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
