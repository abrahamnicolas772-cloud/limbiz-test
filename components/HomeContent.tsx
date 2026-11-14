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
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <TrustedStats />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal>
        <Roadmap />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <ComparisonTable />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>
      <Footer />
      <CookieBanner />
      <ChatbotWidget />
    </main>
  )
}
