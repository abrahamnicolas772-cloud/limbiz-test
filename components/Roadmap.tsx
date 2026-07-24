'use client'

import { motion } from 'framer-motion'

const steps = [
  { 
    id: 1, 
    label: 'Idea', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ), 
    branch: 'root' 
  },
  { 
    id: 2, 
    label: 'Business Formation', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ), 
    branch: 'left' 
  },
  { 
    id: 3, 
    label: 'EIN', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <line x1="6" y1="8" x2="18" y2="8" />
        <line x1="6" y1="12" x2="18" y2="12" />
        <line x1="6" y1="16" x2="12" y2="16" />
      </svg>
    ), 
    branch: 'left' 
  },
  { 
    id: 4, 
    label: 'Business Address', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ), 
    branch: 'left' 
  },
  { 
    id: 5, 
    label: 'Compliance', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ), 
    branch: 'right' 
  },
  { 
    id: 6, 
    label: 'Business Credit', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ), 
    branch: 'right' 
  },
  { 
    id: 7, 
    label: 'Funding', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ), 
    branch: 'right' 
  },
  { 
    id: 8, 
    label: 'Tax Setup', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ), 
    branch: 'right' 
  },
  { 
    id: 9, 
    label: 'Growth', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ), 
    branch: 'left' 
  },
  { 
    id: 10, 
    label: 'Expansion', 
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ), 
    branch: 'left' 
  },
]

const leftBranch = steps.filter(s => s.branch === 'left' || s.branch === 'root')
const rightBranch = steps.filter(s => s.branch === 'right')

export default function Roadmap() {
  return (
    <>
      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <section className="py-24 bg-black relative overflow-hidden">
        {/* Fond avec grille et lueurs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
          {/* Particules flottantes */}
          <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-blue-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Titre */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-400 text-sm tracking-wider font-semibold uppercase"
            >
              Your Business Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-2"
            >
              From <span className="text-blue-500">Idea</span> to <span className="text-blue-500">Expansion</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-white/40 max-w-2xl mx-auto text-sm"
            >
              Every great business follows a path. Let LIMBIZ guide you through each step.
            </motion.p>
          </div>

          {/* STRUCTURE EN ARBRE */}
          <div className="relative">
            {/* Ligne verticale principale (tronc) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-blue-500/60 -translate-x-1/2 rounded-full" />
            
            {/* Racine - IDEA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10 flex flex-col items-center mb-12"
            >
              <div className="relative">
                {/* Anneau lumineux */}
                <div className="absolute -inset-3 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/40 border-2 border-blue-400/50">
                  {steps[0].icon}
                </div>
              </div>
              <p className="text-white font-semibold mt-3 text-sm">{steps[0].label}</p>
              <p className="text-blue-300/40 text-[10px] uppercase tracking-widest mt-1">Start Here</p>
            </motion.div>

            {/* Branches gauche et droite */}
            <div className="grid grid-cols-2 gap-x-12 md:gap-x-20">
              {/* BRANCHE GAUCHE */}
              <div className="flex flex-col items-end space-y-0">
                {leftBranch.slice(1).map((step, idx) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, type: "spring", stiffness: 100 }}
                    className="relative flex items-center w-full justify-end py-3 group"
                  >
                    {/* Ligne horizontale */}
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-500/30 group-hover:text-blue-400/60 transition-colors" width="30" height="10" viewBox="0 0 30 10">
                      <line x1="0" y1="5" x2="30" y2="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                    </svg>
                    
                    {/* Carte */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 group-hover:border-blue-500/40 group-hover:bg-blue-500/5 group-hover:-translate-x-1 transition-all duration-300 flex items-center gap-3 mr-10 min-w-[170px] shadow-lg">
                      <span className="text-blue-400 group-hover:text-blue-300 transition-colors">{step.icon}</span>
                      <span className="text-white/80 text-sm font-medium group-hover:text-white transition">{step.label}</span>
                    </div>
                    
                    {/* Point de connexion */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-500/60 border-2 border-blue-400/40 group-hover:bg-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300 z-10" />
                  </motion.div>
                ))}
              </div>

              {/* BRANCHE DROITE */}
              <div className="flex flex-col items-start space-y-0">
                {rightBranch.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, type: "spring", stiffness: 100 }}
                    className="relative flex items-center w-full py-3 group"
                  >
                    {/* Point de connexion */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-500/60 border-2 border-purple-400/40 group-hover:bg-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 z-10" />
                    
                    {/* Carte */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 group-hover:border-purple-500/40 group-hover:bg-purple-500/5 group-hover:translate-x-1 transition-all duration-300 flex items-center gap-3 ml-10 min-w-[170px] shadow-lg">
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors">{step.icon}</span>
                      <span className="text-white/80 text-sm font-medium group-hover:text-white transition">{step.label}</span>
                    </div>
                    
                    {/* Ligne horizontale */}
                    <svg className="absolute left-0 top-1/2 -translate-y-1/2 text-purple-500/30 group-hover:text-purple-400/60 transition-colors" width="30" height="10" viewBox="0 0 30 10">
                      <line x1="0" y1="5" x2="30" y2="5" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pied */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Start your journey today with LIMBIZ
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </>
  )
}
