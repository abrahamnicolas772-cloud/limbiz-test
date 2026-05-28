'use client'

import in from 'inext'
import { initReactInext } from 'react-inext'

// Traductions
import en from '../public/locales/en/common.json'
import fr from '../public/locales/fr/common.json'
import ht from '../public/locales/ht/common.json'

const resources = {
  en: { common: en },
  fr: { common: fr },
  ht: { common: ht }
}

in
  .use(initReactInext)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  })

export default in