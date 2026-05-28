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
      top: '%',
      left: '%',
      transform: 'translate(-%, -%)',
      zIndex: ,
      width: '%',
      maxWidth: 'px',
      background: 'linear-gradient(deg, EB, CAED)',
      borderRadius: 'px',
      padding: 'px',
      color: 'white',
      textAlign: 'center',
      boxShadow: ' px px -px rgba(,,,.)'
    }}>
      {/ ... même contenu ... /}
    </div>
  )
}