'use client'

import { motion } from 'framer-motion'

const tools = [
  { name:'LLC Name Checker', desc:'Check if your desired business name is available.', badge:'Free', color:'from-blue-500 to-blue-400', link:'/tools' },
  { name:'State Filing Fee Lookup', desc:'See exact filing fees for your state in seconds.', badge:'Free', color:'from-emerald-500 to-emerald-400', link:'/tools' },
  { name:'Startup Cost Calculator', desc:'Estimate your total startup costs with one click.', badge:'New', color:'from-purple-500 to-purple-400', link:'/tools' },
  { name:'Funding Eligibility Quiz', desc:'Discover your funding readiness in 2 minutes.', badge:'Popular', color:'from-amber-500 to-amber-400', link:'/tools' },
  { name:'Credit Readiness Score', desc:'Get your business credit score and improvement plan.', badge:'New', color:'from-cyan-500 to-cyan-400', link:'/tools' },
  { name:'Trademark Search Guide', desc:'Step-by-step guide to check trademark availability.', badge:'Free', color:'from-rose-500 to-rose-400', link:'/tools' },
  { name:'Startup Checklist', desc:'Your complete checklist for launching a business.', badge:'Popular', color:'from-indigo-500 to-indigo-400', link:'/tools' },
]

export default function BusinessTools() {
  return (
    <>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/><div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5"/></div>
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"/>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-[120px]"/>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px]"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Free Business Tools</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Free <span className="text-blue-500">Entrepreneur Tools</span></h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto text-sm">Everything you need to validate, launch, and grow your business — at no cost.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.06}} whileHover={{y:-8}} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500 overflow-hidden cursor-pointer" onClick={()=>window.location.href=tool.link}>
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded-full border border-blue-500/20">{tool.badge}</div>
                <div className="flex items-center gap-3 mb-2"><span className="text-2xl font-bold text-white/10">{(idx+1).toString().padStart(2,'0')}</span><h3 className="text-lg font-semibold text-white">{tool.name}</h3></div>
                <p className="text-white/40 text-sm ml-11">{tool.desc}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium flex items-center gap-1 ml-11">Try Now →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/><div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5"/></div>
    </>
  )
}
