import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustedStats from '@/components/TrustedStats'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustedStats />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}