'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Traductions
import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import ht from '../public/locales/ht/common.json'

const resources = {
  en: { common: en },
  fr: { common: fr },
  ht: { common: ht }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n