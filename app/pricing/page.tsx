'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const [selectedState, setSelectedState] = useState('florida')

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16">
        <Pricing initialState={selectedState} onStateSelect={setSelectedState} />
      </div>
      <Footer />
    </main>
  )
}
