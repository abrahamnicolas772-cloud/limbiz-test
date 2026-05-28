'use client'
const projects = ['NeoBank Platform', 'AI Analytics Suite', 'Luxury E‑commerce']
export default function Portfolio() {
  return (
    <section id="portfolio" className="py- bg-[]">
      <div className="max-w-xl mx-auto px- text-center">
        <p className="text-blue- text-sm tracking-wider font-light">RECENT WORK</p>
        <h className="text-xl md:text-xl font-bold mt- tracking-tight">Our <span className="text-blue-">Projects</span></h>
        <div className="grid md:grid-cols- gap- mt-">
          {projects.map((p, i) => (
            <div key={i} className="glass-card p- rounded-xl card-hover">
              <div className="h- bg-blue-/ rounded-xl flex items-center justify-center text-xl"></div>
              <h className="text-xl font-semibold mt-">{p}</h>
              <button className="mt- text-blue- text-sm flex items-center justify-center gap- hover:gap- transition">View Project </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}