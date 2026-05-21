'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FiStar, FiMapPin } from 'react-icons/fi'
import { SiGoogle } from 'react-icons/si'

const reviews = [
  { name: 'Sophie Martin', textKey: 'text1', rating: 5, dateKey: 'date1' },
  { name: 'Thomas Bernard', textKey: 'text2', rating: 5, dateKey: 'date2' },
  { name: 'Élodie Rousseau', textKey: 'text3', rating: 5, dateKey: 'date3' }
]

export default function GoogleReviews() {
  const { t } = useTranslation('common')
  const totalRating = 4.9
  const totalReviews = 128

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0" />
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-1500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3"><SiGoogle className="text-4xl text-blue-400" /></div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('googleReviews.title')} <span className="text-blue-500">{t('googleReviews.titleHighlight')}</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-4">
            <div className="flex text-yellow-400 text-xl">{[...Array(5)].map((_, i) => (<FiStar key={i} className="fill-yellow-400 text-yellow-400" />))}</div>
            <span className="text-white text-xl font-bold">{totalRating}</span>
            <span className="text-white/50 text-sm">· {totalReviews} {t('googleReviews.reviews')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass-card p-6 rounded-2xl hover:shadow-neon transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">{review.name.charAt(0)}</div>
                <div><h4 className="text-white font-semibold">{review.name}</h4><div className="flex items-center gap-1"><div className="flex text-yellow-400 text-xs">{[...Array(review.rating)].map((_, i) => (<FiStar key={i} className="fill-yellow-400 w-3 h-3" />))}</div><span className="text-white/40 text-xs">· {t(`googleReviews.${review.dateKey}`)}</span></div></div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">"{t(`googleReviews.${review.textKey}`)}"</p>
              <div className="mt-3 flex items-center gap-1"><SiGoogle className="text-blue-400 w-4 h-4" /><span className="text-white/40 text-xs">{t('googleReviews.googleReview')}</span></div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass-card p-2 rounded-2xl overflow-hidden">
          <div className="relative h-64 rounded-xl overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.123456!2d-97.7431!3d30.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599c7e7e7e7%3A0x1234567890abcdef!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" /></div>
          <div className="flex items-center justify-between p-3"><div className="flex items-center gap-2 text-white/60 text-sm"><FiMapPin className="text-blue-400" /><span>123 Innovation Drive, Austin, TX</span></div><a href="https://maps.google.com/?q=123+Innovation+Drive+Austin+TX" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">{t('googleReviews.directions')} →</a></div>
        </motion.div>

        <div className="text-center mt-8"><a href="https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition group"><SiGoogle className="text-blue-400" /><span>{t('googleReviews.seeAll')}</span><span className="group-hover:translate-x-0.5 transition">→</span></a></div>
      </div>
    </section>
  )
}