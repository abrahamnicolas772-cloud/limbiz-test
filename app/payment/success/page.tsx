'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing')
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      setOrderId(token)
      const capturePayment = async () => {
        try {
          const response = await fetch('/api/payments/paypal/capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId: token }),
          })
          const data = await response.json()
          if (data.status === 'COMPLETED') {
            setStatus('success')
            setOrderId(data.transactionId || token)
          } else {
            setStatus('error')
          }
        } catch (error) {
          setStatus('error')
        }
      }
      capturePayment()
    } else {
      setStatus('error')
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#060b14] flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1a30] to-[#0b1830]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-md w-full text-center">
        {status === 'processing' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center py-16">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-16 h-16 rounded-full border-2 border-blue-400 border-t-transparent mb-6" />
            <h2 className="text-xl font-bold text-white mb-2">Processing Payment...</h2>
            <p className="text-white/40 text-sm">Please wait while we confirm your payment</p>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-16">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">Payment Successful! 🎉</h2>
            <p className="text-white/40 text-sm mb-2">Order ID: <span className="text-blue-400 font-mono text-xs">{orderId}</span></p>
            <p className="text-white/30 text-sm mb-8">Thank you for your purchase! Your business is on its way to success.</p>
            <div className="flex gap-3">
              <Link href="/dashboard" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm transition shadow-lg shadow-blue-500/20">
                Go to Dashboard
              </Link>
              <Link href="/" className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-xl text-white/60 hover:text-white text-sm transition">
                Back to Home
              </Link>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-16">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Payment Error</h2>
            <p className="text-white/40 text-sm mb-8">Something went wrong. Please try again.</p>
            <Link href="/pricing" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm transition">
              Try Again
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#060b14] flex items-center justify-center"><div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /></div>}>
      <PaymentSuccessContent />
    </Suspense>
  )
}
