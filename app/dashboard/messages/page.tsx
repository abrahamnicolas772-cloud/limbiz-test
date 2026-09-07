'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MessagesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 bg-[#060b14]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-6">Messages</h1>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">📨</div>
            <p className="text-white/40">No messages yet</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
