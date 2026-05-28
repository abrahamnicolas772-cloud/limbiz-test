'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-float-glow animation-delay-1500" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-glow animation-delay-3000" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch mt-4">
          {/* Colonne gauche : texte + boutons + logos */}
          <div className="flex flex-col justify-between space-y-4 pr-1">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Your Business.<br />Our Strategy.<br />
                <span className="text-blue-500">Unlimited</span> Potential.
              </h1>
              <p className="text-white/70 text-base max-w-md leading-relaxed mt-4">
                LIMBIZ™ helps entrepreneurs, immigrants, and small business owners build strong, compliant, and profitable businesses in the U.S. We handle the foundation so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold text-white shadow-lg transition">
                  Start Your Business
                </button>
                <button className="flex items-center gap-2 px-5 py-2 border border-white/30 rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/10 transition">
                  View Our Services →
                </button>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-5">
                <img src="https://cdn.simpleicons.org/stripe/ffffff/28" alt="Stripe" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
                <img src="https://cdn.simpleicons.org/vercel/ffffff/28" alt="Vercel" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
                <img src="https://cdn.simpleicons.org/linear/ffffff/28" alt="Linear" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
                <img src="https://cdn.simpleicons.org/figma/ffffff/28" alt="Figma" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
                <img src="https://cdn.simpleicons.org/notion/ffffff/28" alt="Notion" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
                <img src="https://cdn.simpleicons.org/slack/ffffff/28" alt="Slack" className="h-5 w-auto opacity-60 hover:opacity-100 transition" />
              </div>
            </div>
          </div>

          {/* Colonne droite : photo */}
          <div className="relative flex justify-end">
            <div className="relative w-[calc(100%+6rem)] -ml-12 lg:-ml-20 xl:-ml-28 overflow-visible">
              <div className="relative h-full min-h-[480px] rounded-2xl shadow-2xl overflow-hidden">
                <img src="/HERO.png" alt="Business consultant team" className="w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.src = "/HERO.jpg" }} loading="eager" />
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-xl shadow-xl max-w-[170px]">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
                <p className="text-white text-[10px] mt-1">"LIMBIZ made starting my LLC so easy. Highly professional!"</p>
                <p className="text-blue-300 text-[9px] font-semibold mt-1">— Verified Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/20 z-50">
        <a href="tel:+15551234567" className="p-2 rounded-xl hover:bg-blue-500/20 transition flex flex-col items-center text-xs text-white/70 hover:text-white group">
          <FiPhone size={18} className="group-hover:scale-110 transition" /><span className="text-[9px] mt-1">Call</span>
        </a>
        <a href="https://wa.me/15551234567" target="_blank" className="p-2 rounded-xl hover:bg-green-500/20 transition flex flex-col items-center text-xs text-white/70 hover:text-white group">
          <FaWhatsapp size={18} className="group-hover:scale-110 transition" /><span className="text-[9px] mt-1">WhatsApp</span>
        </a>
        <a href="mailto:hello@limbiz.com" className="p-2 rounded-xl hover:bg-gray-500/20 transition flex flex-col items-center text-xs text-white/70 hover:text-white group">
          <FiMail size={18} className="group-hover:scale-110 transition" /><span className="text-[9px] mt-1">Email</span>
        </a>
      </div>
    </section>
  )
}