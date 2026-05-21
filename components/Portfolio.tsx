'use client'
const projects = ['NeoBank Platform', 'AI Analytics Suite', 'Luxury E‑commerce']
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-blue-400 text-sm tracking-wider font-light">RECENT WORK</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 tracking-tight">Our <span className="text-blue-400">Projects</span></h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((p, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl card-hover">
              <div className="h-48 bg-blue-500/10 rounded-xl flex items-center justify-center text-5xl">✨</div>
              <h3 className="text-xl font-semibold mt-4">{p}</h3>
              <button className="mt-4 text-blue-400 text-sm flex items-center justify-center gap-1 hover:gap-2 transition">View Project →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}