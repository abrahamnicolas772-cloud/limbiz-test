'use client'

import { FiX, FiBell, FiArrowRight } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function PremiumBanner() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className="fixed top- left-/ -translate-x-/ z-[] w-[%] max-w-xl bg-gradient-to-r from-red- to-red- rounded-xl shadow-xl p-">
      <div className="flex items-center justify-between gap-">
        <div className="flex items-center gap-">
          <div className="w- h- rounded-full bg-white/ flex items-center justify-center">
            <FiBell className="text-white" size={} />
          </div>
          <div>
            <h className="text-white font-bold text-sm md:text-base">
              ğŸš€ Offre spÃciale premium
            </h>
            <p className="text-white/ text-xs md:text-sm">
              BÃnÃficiez de -% sur votre premiÃ¨re consultation. Offre limitÃe !
            </p>
          </div>
        </div>
        <div className="flex items-center gap-">
          <button
            onClick={handleContactClick}
            className="px- py- bg-white text-red- rounded-full text-xs md:text-sm font-semibold hover:bg-white/ transition flex items-center gap-"
          >
            En profiter <FiArrowRight size={} />
          </button>
        </div>
      </div>
    </div>
  )
}