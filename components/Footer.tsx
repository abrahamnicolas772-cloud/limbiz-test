'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) { setError('Please enter your email address'); return }
    if (!email.includes('@')) { setError('Please enter a valid email address'); return }
    console.log('Newsletter signup:', email)
    setSubscribed(true)
    setEmail('')
    setError('')
    setTimeout(() => setSubscribed(false), 5000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/5 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ===== HAUT : Logo + Newsletter ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
          </div>
          
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Join the LIMBIZ Community..." 
              className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition text-sm" 
            />
            <button 
              type="submit" 
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-sm font-semibold flex items-center gap-1.5 transition shadow-lg shadow-blue-500/20"
            >
              Subscribe 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
          
          {error && <p className="text-red-400 text-xs">{error}</p>}
          {subscribed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 text-xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Thank you for joining the LIMBIZ community!
            </motion.div>
          )}
        </div>

        {/* ===== 4 COLONNES (Company, Services, Resources, Legal) ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          
          {/* Colonne 1 : Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About LIMBIZ™</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition">Careers <span className="text-white/20 text-xs">(Future)</span></Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link href="#consultation" className="hover:text-blue-400 transition text-blue-400">Book a Consultation</Link></li>
            </ul>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link href="/services/formation" className="hover:text-blue-400 transition">Business Formation</Link></li>
              <li><Link href="/services/credit-hub" className="hover:text-blue-400 transition">Credit Hub</Link></li>
              <li><Link href="/services/funding-center" className="hover:text-blue-400 transition">Funding Center</Link></li>
              <li><Link href="/services/tax-filings" className="hover:text-blue-400 transition">Tax Filings</Link></li>
              <li><Link href="/academy" className="hover:text-blue-400 transition">Academy</Link></li>
              <li><Link href="/rewards" className="hover:text-blue-400 transition">Rewards</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link href="/resources/guides" className="hover:text-blue-400 transition">Startup Guides</Link></li>
              <li><Link href="/resources/templates" className="hover:text-blue-400 transition">Templates</Link></li>
              <li><Link href="/tools" className="hover:text-blue-400 transition">Business Tools</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition">State Pricing</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms &amp; Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-blue-400 transition">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-400 transition">Disclaimer</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-blue-400 transition">Accessibility Statement</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-blue-400 transition">Website Terms of Use</Link></li>
              <li><Link href="/consultation-agreement" className="hover:text-blue-400 transition">Consultation Agreement</Link></li>
              <li><Link href="/communications-policy" className="hover:text-blue-400 transition">SMS &amp; Email Communications Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* ===== BAS : Social + Contact + Copyright ===== */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a href="https://www.tiktok.com/@limbiz00" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="TikTok">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a href="https://www.instagram.com/limbiz_business" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://www.facebook.com/share/19AzXrXUW9/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="Facebook">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/limbizbuilder" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="X (Twitter)">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://wa.me/13212977988" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-green-400 transition" aria-label="WhatsApp">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            </a>
            <a href="https://youtube.com/@limbizbusinessbuilder" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-blue-400 transition" aria-label="YouTube">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/40 text-sm">
              <a href="mailto:hello@golimbiz.com" className="hover:text-blue-400 transition flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div>
                  
                  <p className="text-white hover:text-blue-300 transition text-sm font-medium">hello@golimbiz.com</p>
                
                </div>
              </a>
            <a href="tel:+13212977988" className="hover:text-blue-400 transition flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +1 (321) 297-7988
            </a>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <p className="text-white/80 text-sm">Remote — All 50 States</p>
                </div>
              </span>
          </div>

          {/* Copyright */}
          <div className="text-white/20 text-xs text-center md:text-right">
            © {currentYear} Limitless Biz Hub LLC. All Rights Reserved. Dev <button>By</button>  Nicolas 
          </div>
        </div>

        {/* Disclaimer supplémentaire */}
        <div className="mt-6 text-center text-white/10 text-[10px] leading-relaxed max-w-4xl mx-auto">
          LIMBIZ™ provides guidance, assistance, and support for business formation, credit readiness, funding preparation, 
          tax setup, and digital presence. We do not guarantee funding, credit approval, tax outcomes, or government approval. 
          State filing fees and processing times are subject to change. Please review our policies for complete terms.
        </div>
      </div>
    </footer>
  )
}
