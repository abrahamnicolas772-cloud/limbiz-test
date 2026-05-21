'use client'

import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { loadStripe } from '@stripe/stripe-js'
import { FiCreditCard, FiPaypal } from 'react-icons/fi'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentButtonsProps {
  orderId: number
  amount: number
  serviceName: string
  onSuccess: () => void
}

export default function PaymentButtons({ orderId, amount, serviceName, onSuccess }: PaymentButtonsProps) {
  const [loading, setLoading] = useState(false)

  const handleStripePayment = async () => {
    setLoading(true)
    const res = await fetch('/api/payments/stripe/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_id: orderId, amount, service_name: serviceName })
    })
    const { url } = await res.json()
    if (url) window.location.href = url
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <button
        onClick={handleStripePayment}
        disabled={loading}
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
      >
        <FiCreditCard /> Payer par carte (Stripe)
      </button>
      
      <PayPalButtons
        createOrder={async () => {
          const res = await fetch('/api/payments/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
          })
          const data = await res.json()
          return data.id
        }}
        onApprove={async () => {
          alert('Paiement PayPal réussi !')
          onSuccess()
        }}
        style={{ layout: 'horizontal' }}
      />
    </div>
  )
}