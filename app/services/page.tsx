'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceCategories = [
  {
    id: 'formation',
    title: 'Business Formation',
    description: 'Start your business legally with full compliance and expert guidance.',
    services: [
      { name: 'LLC Filing', price: '$149', unit: '', note: 'State filing and required publication charges are separate.' },
      { name: 'EIN Registration', price: '$79', unit: '', note: 'One standard EIN application. International cases use EIN for Foreign Owners.' },
      { name: 'Operating Agreement', price: '$149', unit: '', note: 'Standard template completion. Custom drafting and legal review require a quote.' },
      { name: 'DBA / Fictitious Name', price: '$99', unit: '', note: 'One name in one jurisdiction. Government and required publication fees are separate.' },
      { name: 'S-Corporation Election Assistance', price: '$199', unit: '', note: 'Administrative application assistance. Specialized advice and additional filings are separate.' },
      { name: 'LLC Amendment', price: '$149', unit: '', note: 'One simple amendment. State fees separate; complex changes require a quote.' },
      { name: 'Foreign Qualification', price: '$249', unit: '/state', note: 'Registration in one additional U.S. state. State fees, certificates and agent service separate.' },
      { name: 'Business Reinstatement', price: 'From $199', unit: '', note: 'Simple case to restore active registration. State charges, penalties and overdue filings are separate.' },
      { name: 'Business Dissolution', price: '$199', unit: '', note: 'Dissolution assistance in one state. Government fees, final tax returns and other closure work separate.' },
    ]
  },
  {
    id: 'setup',
    title: 'Business Setup',
    description: 'Get your business ready to operate with essential infrastructure.',
    services: [
      { name: 'Business Names & Domains', price: '$99', unit: '', note: 'Name research and up to 2 domains for year 1; combined purchase allowance $55. Premium domains, excess and renewals separate.' },
      { name: 'Business Address', price: '$89.99', unit: 'one-time', note: 'Setup and first month of a basic address plan costing up to $39. From month 2, customer pays the provider directly.' },
      { name: 'Registered Agent', price: '$99', unit: '/year/state', note: 'One business in one state. Selected base provider service is included; additional services separate.' },
      { name: 'Business Email Creation', price: '$79', unit: '', note: 'One professional email setup. Domain and email subscriptions separate.' },
      { name: 'Google Business Profile Setup', price: '$149', unit: '', note: 'One eligible profile. Verification and platform approval are not guaranteed.' },
      { name: 'Licenses & Permits Assessment', price: '$129', unit: '', note: 'Research for one business activity/location. Application work and official fees separate.' },
      { name: 'License / Permit Application Assistance', price: 'From $99', unit: '/application', note: 'One application, not a bundle. Official fees separate.' },
      { name: 'Sales Tax Permit Assistance', price: '$99', unit: '', note: 'Registration assistance in one state. Official fees and ongoing returns separate.' },
      { name: 'D-U-N-S Application Assistance', price: '$79', unit: '', note: 'Standard application assistance and follow-up. Optional paid expedited products separate.' },
      { name: 'Essential Business Documents', price: '$199', unit: '', note: 'Standard Operating Agreement, banking resolution and organizational minutes. Custom legal documents require a quote.' },
    ]
  },
  {
    id: 'growth',
    title: 'Growth & Compliance',
    description: 'Build credit, secure funding, and stay compliant with regulations.',
    services: [
      { name: 'Business Credit Building', price: '$999', unit: '6-month program', note: 'Business-structure review, credit-profile setup, assistance with vendor applications and progress follow-up. Vendor purchases and account charges separate.' },
      { name: 'Funding Assistance', price: '$699', unit: '', note: 'Readiness review, suitable-option research, file preparation, assistance with up to 3 applications and follow-up. Lender charges separate.' },
      { name: 'Business Tax Preparation & Filing', price: 'From $699', unit: '', note: 'Preparation and filing for one tax year. Final quote depends on entity/return type and states involved.' },
      { name: 'Annual Report Filing', price: '$99', unit: '/report/state', note: 'One report for one business in one state and reporting period. Government fees and penalties separate.' },
      { name: 'Compliance Monitoring', price: '$149', unit: '/year/state', note: 'One business in one state. Filing services and government charges separate.' },
    ]
  },
  {
    id: 'international',
    title: 'International Services',
    description: 'Supporting international entrepreneurs with U.S. business formation.',
    services: [
      { name: 'ITIN Application Assistance', price: '$450', unit: '/applicant', note: 'Application assistance, case coordination and follow-up through LIMBIZ and its ITIN partner.' },
      { name: 'Foreign-Owned U.S. LLC Formation', price: '$499', unit: '', note: 'One U.S. LLC in one state. State fees, EIN, address, Registered Agent and tax reporting are separate services.' },
      { name: 'EIN for Foreign Owners', price: '$199', unit: '', note: 'One international EIN application handled by LIMBIZ with client authorization.' },
      { name: 'International Business Formation', price: 'Custom quote', unit: '', note: 'Other countries or entity structures. Route standard foreign-owned U.S. LLC requests to the $499 service.' },
      { name: 'U.S. Business Address', price: '$89.99', unit: 'one-time', note: 'Same service as Business Address: setup + first month; direct provider billing from month 2.' },
      { name: 'Registered Agent', price: '$99', unit: '/year/state', note: 'Same service as Registered Agent in Business Setup.' },
    ]
  },
  {
    id: 'protection',
    title: 'Protection & Digital',
    description: 'Protect your brand, assets, and build your digital presence.',
    services: [
      { name: 'Trademark Research & Guidance', price: '$249', unit: '', note: 'Preliminary research and process guidance. Application filing, official fees and attorney services separate.' },
      { name: 'Copyright Registration Assistance', price: '$149', unit: '/work', note: 'Standard application assistance for one work. Official fees and specialized legal services separate.' },
      { name: 'Business Branding', price: '$249', unit: '', note: 'Brand positioning, messaging and visual direction. Logo production and full guidelines separate.' },
      { name: 'Simple Logo', price: '$199', unit: '', note: 'One concept, two revision rounds and final files. Extra concepts/revisions quoted separately.' },
      { name: 'Full Brand Guidelines', price: '$499', unit: '', note: 'Logo, colors, typography and brand-use guide. Additional assets beyond agreed scope separate.' },
      { name: 'Starter Website / Landing Page', price: '$499', unit: '', note: 'Simple informational site of 1-4 pages or a landing page. Hosting, domain, paid tools and maintenance separate.' },
      { name: 'Professional Website', price: '$999', unit: '', note: 'Informational site of 5-8 pages. Special features, hosting, domains, paid tools and maintenance separate.' },
      { name: 'Domain Registration Assistance', price: '$39', unit: '/domain', note: 'Research and configuration. Domain purchase and renewals separate.' },
      { name: 'E-Commerce Setup', price: '$399', unit: '/platform', note: 'One platform and up to 5 products using client content. Subscriptions, transaction fees and additional work separate.' },
      { name: 'Social Media Setup', price: '$149', unit: '', note: 'Up to 2 accounts: profile images, bio, contact information and links. Ongoing content and ads separate.' },
      { name: 'Digital Business Card', price: '$79', unit: '', note: 'One digital card with contact details, links and QR code. Paid subscriptions, if needed, separate.' },
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
              Choose individual services or explore our complete packages.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, catIdx) => (
              <motion.div key={category.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIdx * 0.1 }}>
                <div className="mb-6 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <p className="text-white/40 text-sm mt-1">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIdx * 0.1 + idx * 0.03 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition group flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-sm group-hover:text-blue-300 transition-colors">{service.name}</h3>
                        <p className="text-white/30 text-xs mt-2 leading-relaxed">{service.note}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                        <div>
                          <span className="text-blue-300 font-bold text-lg">{service.price}</span>
                          {service.unit && <span className="text-white/30 text-xs ml-1">{service.unit}</span>}
                        </div>
                        <button className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-full text-white text-xs font-medium transition">
                          {service.price.includes('From') || service.price.includes('Custom') ? 'Contact Us for a Quote' : 'Get Started'}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
