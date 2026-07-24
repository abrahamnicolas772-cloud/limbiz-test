'use client'

import Hero from '@/components/Hero'
import TrustedStats from '@/components/TrustedStats'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Roadmap from '@/components/Roadmap'
import Testimonials from '@/components/Testimonials'
import ComparisonTable from '@/components/ComparisonTable'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Navbar from '@/components/Navbar'
import ChatbotWidget from '@/components/ChatbotWidget'

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustedStats />
      <Services />
      <WhyChooseUs />
      <Roadmap />
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieBanner />
      <ChatbotWidget />
    </main>
  )
}
