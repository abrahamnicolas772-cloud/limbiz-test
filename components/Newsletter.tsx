'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiShield, FiMail, FiLock } from 'react-icons/fi'

export default function NewsletterConsent() {
  const { t } = useTranslation('common')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')
  const [cookieConsent, setCookieConsent] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (hasConsent === 'true') setCookieConsent(true)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) { setError(t('newsletter.emailRequired')); return }
    if (!email.includes('@')) { setError(t('newsletter.invalidEmail')); return }
    localStorage.setItem('newsletter-email', email)
    localStorage.setItem('cookie-consent', 'true')
    setCookieConsent(true)
    setSubscribed(true)
    setEmail('')
    setError('')
    console.log('Newsletter subscribed:', email)
    setTimeout(() => setSubscribed(false), 5000)
  }

  const handleCookieAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setCookieConsent(true)
  }

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow animation-delay-1500" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-premium rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl overflow-hidden">
          <div className="relative p-8 pb-0 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30"><FiMail size={28} className="text-white" /></div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('newsletter.title')} <span className="text-blue-500">{t('newsletter.titleHighlight')}</span></h2>
            <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">{t('newsletter.subtitle')}</p>
          </div>

          <div className="p-8 pt-4">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative"><FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('newsletter.emailPlaceholder')} className="w-full pl-9 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 transition" /></div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-blue-500/30">{t('newsletter.subscribe')} <FiSend size={16} /></motion.button>
            </form>
            {error && <p className="text-red-400 text-xs text-center mt-2">{error}</p>}
            {subscribed && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 text-green-400 text-sm mt-3"><FiCheckCircle /> {t('newsletter.success')}</motion.div>)}
          </div>

          {!cookieConsent && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-t border-white/10 bg-black/30 p-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 text-white/60 text-xs"><FiShield size={16} className="text-blue-400" /><span>{t('newsletter.cookieText')}</span><FiLock size={14} className="text-white/40" /></div>
              <div className="flex gap-3"><button onClick={handleCookieAccept} className="px-4 py-1.5 text-xs bg-blue-600 hover:bg-blue-500 rounded-full text-white transition">{t('newsletter.acceptCookies')}</button><a href="/privacy" className="px-4 py-1.5 text-xs border border-white/20 rounded-full text-white/60 hover:text-white transition">{t('newsletter.learnMore')}</a></div>
            </div>
          </motion.div>)}

          {cookieConsent && (<div className="border-t border-white/10 bg-black/30 p-3 text-center"><p className="text-white/30 text-[10px]">🍪 {t('newsletter.cookiesAccepted')}</p></div>)}
        </motion.div>
      </div>
    </section>
  )
}