'use client'

import Link from 'next/link'

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-[#060b14] flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a30] to-[#0b1830]" />
      </div>
      <div className="relative z-10 max-w-md w-full text-center py-16">
        <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Payment Cancelled</h2>
        <p className="text-white/40 text-sm mb-8">Your payment was not completed. Don't worry, you can try again anytime.</p>
        <Link href="/pricing" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm transition">
          Back to Pricing
        </Link>
      </div>
    </div>
  )
}
