'use client'

import { motion } from 'framer-motion'

export default function PremiumBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
              ⭐
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Go Premium</h3>
              <p className="text-amber-100 text-sm">Unlock exclusive features and priority support</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-colors">
            Upgrade Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
