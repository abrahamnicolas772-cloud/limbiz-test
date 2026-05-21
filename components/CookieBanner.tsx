'use client'

import { useState, useEffect } from 'react'
import { FiShield, FiCheckCircle } from 'react-icons/fi'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Force l'affichage uniquement si pas de consentement
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 99999,
      width: '90%',
      maxWidth: '600px',
      background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
      borderRadius: '24px',
      padding: '32px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
    }}>
      {/* ... même contenu ... */}
    </div>
  )
}