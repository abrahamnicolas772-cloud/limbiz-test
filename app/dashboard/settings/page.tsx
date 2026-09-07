'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SettingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-[#060b14]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">Settings</h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-white/40 text-center">Settings coming soon</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
