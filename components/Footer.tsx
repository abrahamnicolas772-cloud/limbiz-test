'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiTwitter, FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation('common')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) { setError(t('footer.emailRequired')); return }
    if (!email.includes('@')) { setError(t('footer.validEmail')); return }
    console.log('Newsletter:', email)
    setSubscribed(true)
    setEmail('')
    setError('')
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <footer className="relative bg-black border-t border-white/10 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-2"><img src="/LOGO1.png" alt="Limbiz Logo" className="h-12 w-auto" /><span className="text-white text-xl font-bold tracking-tight">limbiz™</span></div>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('footer.emailPlaceholder')} className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition text-sm" />
            <button type="submit" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-sm font-semibold flex items-center gap-2 transition shadow-lg shadow-blue-500/30">{t('footer.subscribe')} <FiSend size={14} /></button>
          </form>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          {subscribed && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 text-green-400 text-xs"><FiCheckCircle /> {t('footer.subscribed')}</motion.div>)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div><h3 className="font-semibold text-white mb-4">{t('footer.services')}</h3><ul className="space-y-2 text-white/50 text-sm"><li><Link href="/services" className="hover:text-blue-400 transition">{t('footer.businessSetup')}</Link></li><li><Link href="/services" className="hover:text-blue-400 transition">{t('footer.businessCredit')}</Link></li><li><Link href="/services" className="hover:text-blue-400 transition">{t('footer.ecommerceSetup')}</Link></li><li><Link href="/services" className="hover:text-blue-400 transition">{t('footer.trademarkGuidance')}</Link></li></ul></div>
          <div><h3 className="font-semibold text-white mb-4">{t('footer.company')}</h3><ul className="space-y-2 text-white/50 text-sm"><li><Link href="/about" className="hover:text-blue-400 transition">{t('footer.aboutUs')}</Link></li><li><Link href="/pricing" className="hover:text-blue-400 transition">{t('footer.pricing')}</Link></li><li><Link href="/contact" className="hover:text-blue-400 transition">{t('footer.contact')}</Link></li><li><Link href="/blog" className="hover:text-blue-400 transition">{t('footer.blog')}</Link></li></ul></div>
          <div><h3 className="font-semibold text-white mb-4">{t('footer.support')}</h3><ul className="space-y-2 text-white/50 text-sm"><li><Link href="/faq" className="hover:text-blue-400 transition">{t('footer.faq')}</Link></li><li><Link href="/privacy" className="hover:text-blue-400 transition">{t('footer.privacyPolicy')}</Link></li><li><Link href="/terms" className="hover:text-blue-400 transition">{t('footer.termsOfService')}</Link></li><li><Link href="/refund" className="hover:text-blue-400 transition">{t('footer.refundPolicy')}</Link></li></ul></div>
          <div><h3 className="font-semibold text-white mb-4">{t('footer.connect')}</h3><div className="flex gap-4 mb-4"><a href="#" className="text-white/50 hover:text-blue-400 transition"><FiTwitter size={20} /></a><a href="#" className="text-white/50 hover:text-blue-400 transition"><FiGithub size={20} /></a><a href="#" className="text-white/50 hover:text-blue-400 transition"><FiLinkedin size={20} /></a><a href="#" className="text-white/50 hover:text-green-400 transition"><FaWhatsapp size={20} /></a><a href="mailto:hello@limbiz.com" className="text-white/50 hover:text-blue-400 transition"><FiMail size={20} /></a></div><p className="text-white/40 text-sm">hello@limbiz.com</p><p className="text-white/40 text-sm mt-1">+1 (555) 123-4567</p></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-white/40 text-xs">
          <div className="flex flex-wrap justify-center gap-4"><Link href="/privacy" className="hover:text-white transition">{t('footer.privacy')}</Link><Link href="/terms" className="hover:text-white transition">{t('footer.terms')}</Link><Link href="/refund" className="hover:text-white transition">{t('footer.refund')}</Link><Link href="/disclaimer" className="hover:text-white transition">{t('footer.disclaimer')}</Link><Link href="/cookies" className="hover:text-white transition">{t('footer.cookies')}</Link></div>
          <div>© 2025 Limbiz. {t('footer.rights')}</div>
        </div>
      </div>
    </footer>
  )
}