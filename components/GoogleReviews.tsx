'use client'

import { useTranslation } from 'react-inext'
import { motion } from 'framer-motion'
import { FiStar, FiMapPin } from 'react-icons/fi'
import { SiGoogle } from 'react-icons/si'

const reviews = [
  { name: 'Sophie Martin', textKey: 'text', rating: , dateKey: 'date' },
  { name: 'Thomas Bernard', textKey: 'text', rating: , dateKey: 'date' },
  { name: 'Élodie Rousseau', textKey: 'text', rating: , dateKey: 'date' }
]

export default function GoogleReviews() {
  const { t } = useTranslation('common')
  const totalRating = .
  const totalReviews = 

  return (
    <section className="relative py- overflow-hidden bg-black">
      <div className="absolute inset- bg-noise opacity- pointer-events-none z-" />
      <div className="absolute inset- -z-">
        <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
        <div className="absolute bottom- right-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow animation-delay-" />
      </div>

      <div className="max-w-xl mx-auto px- sm:px- lg:px- relative z-">
        <div className="text-center mb-">
          <div className="flex justify-center mb-"><SiGoogle className="text-xl text-blue-" /></div>
          <h className="text-xl md:text-xl font-bold tracking-tight">{t('googleReviews.title')} <span className="text-blue-">{t('googleReviews.titleHighlight')}</span></h>
          <div className="flex flex-wrap justify-center items-center gap- mt-">
            <div className="flex text-yellow- text-xl">{[...Array()].map((_, i) => (<FiStar key={i} className="fill-yellow- text-yellow-" />))}</div>
            <span className="text-white text-xl font-bold">{totalRating}</span>
            <span className="text-white/ text-sm">· {totalReviews} {t('googleReviews.reviews')}</span>
          </div>
        </div>

        <div className="grid md:grid-cols- gap- mb-">
          {reviews.map((review, idx) => (
            <motion.div key={idx} initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: idx  . }} className="glass-card p- rounded-xl hover:shadow-neon transition-all duration-">
              <div className="flex items-center gap- mb-">
                <div className="w- h- rounded-full bg-gradient-to-br from-blue- to-purple- flex items-center justify-center text-white font-bold">{review.name.charAt()}</div>
                <div><h className="text-white font-semibold">{review.name}</h><div className="flex items-center gap-"><div className="flex text-yellow- text-xs">{[...Array(review.rating)].map((_, i) => (<FiStar key={i} className="fill-yellow- w- h-" />))}</div><span className="text-white/ text-xs">· {t(`googleReviews.${review.dateKey}`)}</span></div></div>
              </div>
              <p className="text-white/ text-sm leading-relaxed">"{t(`googleReviews.${review.textKey}`)}"</p>
              <div className="mt- flex items-center gap-"><SiGoogle className="text-blue- w- h-" /><span className="text-white/ text-xs">{t('googleReviews.googleReview')}</span></div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: , y:  }} whileInView={{ opacity: , y:  }} viewport={{ once: true }} transition={{ delay: . }} className="glass-card p- rounded-xl overflow-hidden">
          <div className="relative h- rounded-xl overflow-hidden"><iframe src="https://www.google.com/maps/embed?pb=!m!m!m!d.!d-.!d.!m!f!f!f!m!i!i!f.!m!m!sxbceee%Axabcdef!sAustin%C%TX!e!m!sen!sus!v!m!sen!sus" width="%" height="%" style={{ border:  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" /></div>
          <div className="flex items-center justify-between p-"><div className="flex items-center gap- text-white/ text-sm"><FiMapPin className="text-blue-" /><span> Innovation Drive, Austin, TX</span></div><a href="https://maps.google.com/?q=+Innovation+Drive+Austin+TX" target="_blank" rel="noopener noreferrer" className="text-blue- text-sm hover:underline">{t('googleReviews.directions')} </a></div>
        </motion.div>

        <div className="text-center mt-"><a href="https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap- text-white/ hover:text-white text-sm transition group"><SiGoogle className="text-blue-" /><span>{t('googleReviews.seeAll')}</span><span className="group-hover:translate-x-. transition"></span></a></div>
      </div>
    </section>
  )
}