'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-inext'
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
    setTimeout(() => setSubscribed(false), )
  }

  const handleCookieAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setCookieConsent(true)
  }

  return (
    <section className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none" />
      <div className="absolute inset- -z-">
        <div className="absolute top-/ left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
        <div className="absolute bottom-/ right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <motion.div initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ duration: . }} className="glass-premium rounded-xl border border-white/ shadow-xl backdrop-blur-xl overflow-hidden">
          <div className="relative p- pb- text-center">
            <div className="w- h- mx-auto mb- bg-gradient-to-r from-blue- to-purple- rounded-xl flex items-center justify-center shadow-lg shadow-blue-/"><FiMail size={} className="text-white" /></div>
            <h className="text-xl md:text-xl font-bold tracking-tight">{t('newsletter.title')} <span className="text-blue-">{t('newsletter.titleHighlight')}</span></h>
            <p className="mt- text-white/ text-sm max-w-md mx-auto">{t('newsletter.subtitle')}</p>
          </div>

          <div className="p- pt-">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap- max-w-md mx-auto">
              <div className="flex- relative"><FiMail className="absolute left- top-/ -translate-y-/ text-white/" size={} /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('newsletter.emailPlaceholder')} className="w-full pl- pr- py- bg-white/ border border-white/ rounded-xl text-white placeholder-white/ focus:outline-none focus:border-blue-/ transition" /></div>
              <motion.button type="submit" whileHover={{ scale: . }} whileTap={{ scale: . }} className="px- py- bg-gradient-to-r from-blue- to-purple- rounded-xl text-white font-semibold flex items-center justify-center gap- transition shadow-lg shadow-blue-/">{t('newsletter.subscribe')} <FiSend size={} /></motion.button>
            </form>
            {error && <p className="text-red- text-xs text-center mt-">{error}</p>}
            {subscribed && (<motion.div initial={{ opacity: , y:  }} animate={{ opacity: , y:  }} className="flex items-center justify-center gap- text-green- text-sm mt-"><FiCheckCircle /> {t('newsletter.success')}</motion.div>)}
          </div>

          {!cookieConsent && (<motion.div initial={{ opacity:  }} animate={{ opacity:  }} className="border-t border-white/ bg-black/ p-">
            <div className="flex flex-col sm:flex-row items-center justify-between gap- max-w-xl mx-auto">
              <div className="flex items-center gap- text-white/ text-xs"><FiShield size={} className="text-blue-" /><span>{t('newsletter.cookieText')}</span><FiLock size={} className="text-white/" /></div>
              <div className="flex gap-"><button onClick={handleCookieAccept} className="px- py-. text-xs bg-blue- hover:bg-blue- rounded-full text-white transition">{t('newsletter.acceptCookies')}</button><a href="/privacy" className="px- py-. text-xs border border-white/ rounded-full text-white/ hover:text-white transition">{t('newsletter.learnMore')}</a></div>
            </div>
          </motion.div>)}

          {cookieConsent && (<div className="border-t border-white/ bg-black/ p- text-center"><p className="text-white/ text-[px]">🍪 {t('newsletter.cookiesAccepted')}</p></div>)}
        </motion.div>
      </div>
    </section>
  )
}