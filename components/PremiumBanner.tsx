'use client'

import { FiX, FiBell, FiArrowRight } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function PremiumBanner() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-2xl bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <FiBell className="text-white" size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm md:text-base">
              🚀 Offre spéciale premium
            </h4>
            <p className="text-white/80 text-xs md:text-sm">
              Bénéficiez de -20% sur votre première consultation. Offre limitée !
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleContactClick}
            className="px-4 py-2 bg-white text-red-600 rounded-full text-xs md:text-sm font-semibold hover:bg-white/90 transition flex items-center gap-1"
          >
            En profiter <FiArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}