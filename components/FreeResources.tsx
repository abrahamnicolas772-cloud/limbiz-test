'use client'

import { motion } from 'framer-motion'

const resources = [
  { name:'LLC Startup Guide', desc:'Complete guide to launching your LLC in any state.', type:'PDF', size:'2.4 MB', badge:'Most Downloaded', color:'from-blue-500 to-blue-400' },
  { name:'Business Credit Guide', desc:'Build and grow your business credit profile.', type:'PDF', size:'1.8 MB', badge:'Popular', color:'from-emerald-500 to-emerald-400' },
  { name:'Funding Readiness Guide', desc:'Prepare your business for funding applications.', type:'PDF', size:'3.1 MB', badge:'Free', color:'from-purple-500 to-purple-400' },
  { name:'Tax Calendar', desc:'Key tax deadlines and filing reminders.', type:'PDF', size:'0.9 MB', badge:'New', color:'from-amber-500 to-amber-400' },
  { name:'Startup Checklist', desc:'Everything you need to launch your business.', type:'PDF', size:'1.2 MB', badge:'Essential', color:'from-cyan-500 to-cyan-400' },
  { name:'Operating Agreement Sample', desc:'Professional template for your LLC.', type:'DOCX', size:'0.7 MB', badge:'Template', color:'from-rose-500 to-rose-400' },
]

export default function FreeResources() {
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
            <p className="text-blue-400 text-sm tracking-wider font-semibold uppercase">Free Resources</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Download <span className="text-blue-500">Startup Essentials</span></h2>
            <p className="mt-3 text-white/50 max-w-2xl mx-auto text-sm">Get instant access to professional guides, templates, and checklists — all free.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, idx) => (
              <motion.div key={idx} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:idx*0.06}} whileHover={{y:-8}} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-500">
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider rounded-full">{r.badge}</div>
                <div className="flex items-center gap-3 mb-3"><span className="text-2xl font-bold text-white/10">{(idx+1).toString().padStart(2,'0')}</span><h3 className="text-lg font-semibold text-white">{r.name}</h3></div>
                <p className="text-white/40 text-sm ml-11">{r.desc}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-white/30 ml-11"><span className="px-2 py-0.5 bg-white/5 rounded">{r.type}</span><span>{r.size}</span></div>
                <button className="mt-4 w-full py-2.5 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 rounded-xl text-blue-400 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-all ml-11">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative z-10"><div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"/><div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-0.5"/></div>
    </>
  )
}
