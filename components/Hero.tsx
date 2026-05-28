'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-">
      <div className="absolute inset- z-">
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute top-/ left-/ w- h- bg-blue-/ rounded-full blur-xl animate-float-glow" />
        <div className="absolute bottom-/ right-/ w- h- bg-purple-/ rounded-full blur-xl animate-float-glow animation-delay-" />
        <div className="absolute top-/ left-/ w- h- bg-cyan-/ rounded-full blur-xl animate-float-glow animation-delay-" />
        <div className="absolute inset- bg-gradient-to-r from-transparent via-blue-/ to-transparent animate-shimmer" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- pb- relative z-">
        <div className="grid lg:grid-cols- gap- items-stretch mt-">
          {/ Colonne gauche : texte + boutons + logos /}
          <div className="flex flex-col justify-between space-y- pr-">
            <div>
              <h className="text-xl md:text-xl lg:text-xl font-bold leading-tight tracking-tight">
                Your Business.<br />Our Strategy.<br />
                <span className="text-blue-">Unlimited</span> Potential.
              </h>
              <p className="text-white/ text-base max-w-md leading-relaxed mt-">
                LIMBIZ™ helps entrepreneurs, immigrants, and small business owners build strong, compliant, and profitable businesses in the U.S. We handle the foundation so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap- mt-">
                <button className="flex items-center gap- px- py- bg-blue- hover:bg-blue- rounded-full font-semibold text-white shadow-lg transition">
                   Start Your Business
                </button>
                <button className="flex items-center gap- px- py- border border-white/ rounded-full font-semibold text-white backdrop-blur-sm hover:bg-white/ transition">
                  View Our Services 
                </button>
              </div>
            </div>

            <div className="mt-">
              <p className="text-white/ text-xs uppercase tracking-wider mb-">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-">
                <img src="https://cdn.simpleicons.org/stripe/ffffff/" alt="Stripe" className="h- w-auto opacity- hover:opacity- transition" />
                <img src="https://cdn.simpleicons.org/vercel/ffffff/" alt="Vercel" className="h- w-auto opacity- hover:opacity- transition" />
                <img src="https://cdn.simpleicons.org/linear/ffffff/" alt="Linear" className="h- w-auto opacity- hover:opacity- transition" />
                <img src="https://cdn.simpleicons.org/figma/ffffff/" alt="Figma" className="h- w-auto opacity- hover:opacity- transition" />
                <img src="https://cdn.simpleicons.org/notion/ffffff/" alt="Notion" className="h- w-auto opacity- hover:opacity- transition" />
                <img src="https://cdn.simpleicons.org/slack/ffffff/" alt="Slack" className="h- w-auto opacity- hover:opacity- transition" />
              </div>
            </div>
          </div>

          {/ Colonne droite : photo /}
          <div className="relative flex justify-end">
            <div className="relative w-[calc(%+rem)] -ml- lg:-ml- xl:-ml- overflow-visible">
              <div className="relative h-full min-h-[px] rounded-xl shadow-xl overflow-hidden">
                <img src="/HERO.png" alt="Business consultant team" className="w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.src = "/HERO.jpg" }} loading="eager" />
              </div>
              <div className="absolute bottom- right- bg-black/ backdrop-blur-md p- rounded-xl shadow-xl max-w-[px]">
                <div className="flex text-yellow- text-sm"></div>
                <p className="text-white text-[px] mt-">"LIMBIZ made starting my LLC so easy. Highly professional!"</p>
                <p className="text-blue- text-[px] font-semibold mt-">— Verified Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right- top-/ -translate-y-/ flex flex-col gap- bg-black/ backdrop-blur-md p- rounded-xl border border-white/ z-">
        <a href="tel:+" className="p- rounded-xl hover:bg-blue-/ transition flex flex-col items-center text-xs text-white/ hover:text-white group">
          <FiPhone size={} className="group-hover:scale- transition" /><span className="text-[px] mt-">Call</span>
        </a>
        <a href="https://wa.me/" target="_blank" className="p- rounded-xl hover:bg-green-/ transition flex flex-col items-center text-xs text-white/ hover:text-white group">
          <FaWhatsapp size={} className="group-hover:scale- transition" /><span className="text-[px] mt-">WhatsApp</span>
        </a>
        <a href="mailto:hello@limbiz.com" className="p- rounded-xl hover:bg-gray-/ transition flex flex-col items-center text-xs text-white/ hover:text-white group">
          <FiMail size={} className="group-hover:scale- transition" /><span className="text-[px] mt-">Email</span>
        </a>
      </div>
    </section>
  )
}