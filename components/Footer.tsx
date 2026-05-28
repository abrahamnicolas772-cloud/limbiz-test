'use client'

import { useState } from 'react'
import { useTranslation } from 'react-inext'
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
    setTimeout(() => setSubscribed(false), )
  }

  return (
    <footer className="relative bg-black border-t border-white/ py- overflow-hidden">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute bottom- left- w- h- bg-blue-/ rounded-full blur-xl pointer-events-none" />
      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="flex flex-col md:flex-row justify-between items-center gap- pb- border-b border-white/">
          <div className="flex items-center gap-"><img src="/LOGO.png" alt="Limbiz Logo" className="h- w-auto" /><span className="text-white text-xl font-bold tracking-tight">limbizâ„¢</span></div>
          <form onSubmit={handleSubscribe} className="flex gap- w-full max-w-md">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('footer.emailPlaceholder')} className="flex- px- py-. bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition text-sm" />
            <button type="submit" className="px- py-. bg-blue- hover:bg-blue- rounded-xl text-white text-sm font-semibold flex items-center gap- transition shadow-lg shadow-blue-/">{t('footer.subscribe')} <FiSend size={} /></button>
          </form>
          {error && <p className="text-red- text-xs">{error}</p>}
          {subscribed && (<motion.div initial={{ opacity:  }} animate={{ opacity:  }} className="flex items-center gap- text-green- text-xs"><FiCheckCircle /> {t('footer.subscribed')}</motion.div>)}
        </div>
        <div className="grid grid-cols- md:grid-cols- gap- py-">
          <div><h className="font-semibold text-white mb-">{t('footer.services')}</h><ul className="space-y- text-white/ text-sm"><li><Link href="/services" className="hover:text-blue- transition">{t('footer.businessSetup')}</Link></li><li><Link href="/services" className="hover:text-blue- transition">{t('footer.businessCredit')}</Link></li><li><Link href="/services" className="hover:text-blue- transition">{t('footer.ecommerceSetup')}</Link></li><li><Link href="/services" className="hover:text-blue- transition">{t('footer.trademarkGuidance')}</Link></li></ul></div>
          <div><h className="font-semibold text-white mb-">{t('footer.company')}</h><ul className="space-y- text-white/ text-sm"><li><Link href="/about" className="hover:text-blue- transition">{t('footer.aboutUs')}</Link></li><li><Link href="/pricing" className="hover:text-blue- transition">{t('footer.pricing')}</Link></li><li><Link href="/contact" className="hover:text-blue- transition">{t('footer.contact')}</Link></li><li><Link href="/blog" className="hover:text-blue- transition">{t('footer.blog')}</Link></li></ul></div>
          <div><h className="font-semibold text-white mb-">{t('footer.support')}</h><ul className="space-y- text-white/ text-sm"><li><Link href="/faq" className="hover:text-blue- transition">{t('footer.faq')}</Link></li><li><Link href="/privacy" className="hover:text-blue- transition">{t('footer.privacyPolicy')}</Link></li><li><Link href="/terms" className="hover:text-blue- transition">{t('footer.termsOfService')}</Link></li><li><Link href="/refund" className="hover:text-blue- transition">{t('footer.refundPolicy')}</Link></li></ul></div>
          <div><h className="font-semibold text-white mb-">{t('footer.connect')}</h><div className="flex gap- mb-"><a href="" className="text-white/ hover:text-blue- transition"><FiTwitter size={} /></a><a href="" className="text-white/ hover:text-blue- transition"><FiGithub size={} /></a><a href="" className="text-white/ hover:text-blue- transition"><FiLinkedin size={} /></a><a href="" className="text-white/ hover:text-green- transition"><FaWhatsapp size={} /></a><a href="mailto:hello@limbiz.com" className="text-white/ hover:text-blue- transition"><FiMail size={} /></a></div><p className="text-white/ text-sm">hello@limbiz.com</p><p className="text-white/ text-sm mt-">+ () -</p></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap- pt- border-t border-white/ text-white/ text-xs">
          <div className="flex flex-wrap justify-center gap-"><Link href="/privacy" className="hover:text-white transition">{t('footer.privacy')}</Link><Link href="/terms" className="hover:text-white transition">{t('footer.terms')}</Link><Link href="/refund" className="hover:text-white transition">{t('footer.refund')}</Link><Link href="/disclaimer" className="hover:text-white transition">{t('footer.disclaimer')}</Link><Link href="/cookies" className="hover:text-white transition">{t('footer.cookies')}</Link></div>
          <div>Â  Limbiz. {t('footer.rights')}</div>
        </div>
      </div>
    </footer>
  )
}