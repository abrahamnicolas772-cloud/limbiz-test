export const dynamic = "force-dynamic"
import { stateData } from '@/app/pricing/stateData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StatePricingContent from './StatePricingContent'

export default function StatePricingPage({ params }: { params: { state: string } }) {
  const stateKey = params.state
  const state = stateData[stateKey as keyof typeof stateData]
  if (!state) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black pt-24 pb-16 flex items-center justify-center">
          <div className="text-center"><h1 className="text-4xl font-bold text-white">State not found</h1><p className="text-white/50 mt-2">Please select a valid state.</p></div>
        </main>
        <Footer />
      </>
    )
  }
  return <StatePricingContent state={state} />
}
