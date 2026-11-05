'use client'

import { useCart } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CartPage() {
  const { items, removeItem, total, clearCart } = useCart()
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060b14] via-[#0b1a2e] to-[#0f2847]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>
          {items.length === 0 ? (
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 text-center">
              <p className="text-white/40">Your cart is empty.</p>
              <Link href="/services" className="mt-4 inline-block text-blue-400 hover:text-blue-300">Browse Services →</Link>
            </div>
          ) : (
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-white/[0.05] last:border-0">
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    {item.note && <p className="text-white/30 text-xs mt-0.5">{item.note}</p>}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-300 font-semibold">${item.price}</span>
                    <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-300 text-xs">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-white/[0.1] flex justify-between items-center">
                <span className="text-white font-semibold">Total</span>
                <span className="text-blue-300 font-bold text-xl">${total.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <button onClick={() => { clearCart(); router.push('/services') }} className="px-4 py-2 border border-white/10 rounded-lg text-white/50 text-sm hover:text-white">
                  Clear Cart
                </button>
                <button onClick={() => router.push('/checkout?cart=true')} className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold text-sm">
                  Proceed to Checkout →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
