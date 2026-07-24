'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const posts = [
  { title: 'How to Form an LLC in 2026', desc: 'Step-by-step guide to forming your LLC in any state.', category: 'Formation', date: 'June 20, 2026', readTime: '5 min' },
  { title: 'Business Credit 101: What Every Entrepreneur Needs to Know', desc: 'Learn the fundamentals of building strong business credit.', category: 'Credit', date: 'June 18, 2026', readTime: '7 min' },
  { title: 'Top 5 Funding Options for Small Businesses', desc: 'Explore grants, loans, and alternative funding sources.', category: 'Funding', date: 'June 15, 2026', readTime: '6 min' },
  { title: 'Tax Deductions Every LLC Owner Should Know', desc: 'Maximize your tax savings with these essential deductions.', category: 'Tax', date: 'June 12, 2026', readTime: '4 min' },
  { title: 'Trademark vs Copyright: What\'s the Difference?', desc: 'Understand which protection your business needs.', category: 'Legal', date: 'June 10, 2026', readTime: '5 min' },
  { title: 'How to Write a Winning Business Plan', desc: 'Create a compelling business plan that attracts investors.', category: 'Strategy', date: 'June 8, 2026', readTime: '8 min' },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a2e] via-[#0f2847] to-[#0b1a2e]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,80,180,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center mb-12">
            <p className="text-blue-400/60 text-xs uppercase tracking-[0.3em] font-light mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">LIMBIZ <span className="text-blue-300">Blog</span></h1>
            <p className="text-white/40 mt-3">Expert advice, business tips, and guides.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, idx) => (
              <motion.article key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.05}} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition cursor-pointer">
                <div className="flex items-center gap-3 mb-4"><span className="px-2.5 py-1 bg-blue-500/15 text-blue-300 text-[10px] rounded-full">{post.category}</span><span className="text-white/20 text-[10px]">{post.readTime}</span></div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition">{post.title}</h3>
                <p className="text-white/40 text-sm mb-4">{post.desc}</p>
                <div className="flex items-center justify-between"><span className="text-white/20 text-xs">{post.date}</span><span className="text-blue-400 text-sm">Read More →</span></div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
