'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedStats from '@/components/TrustedStats'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import WhyChooseUs from '@/components/WhyChooseUs'
import Roadmap from '@/components/Roadmap'
import Testimonials from '@/components/Testimonials'
import ComparisonTable from '@/components/ComparisonTable'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import ChatbotWidget from '@/components/ChatbotWidget'

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustedStats />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Roadmap />
      <Testimonials />
      <ComparisonTable />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieBanner />
      <ChatbotWidget />
    </main>
  )
}
