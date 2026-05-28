'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Navbar() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showContactPopup, setShowContactPopup] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', user.id)
          .single()
        setProfile(profile)
      }
    }
    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null)
      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', session.user.id)
          .single()
        setProfile(profile)
      } else {
        setProfile(null)
      }
    })
    return () => listener?.subscription.unsubscribe()
  }, [supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setDropdownOpen(false)
    router.push('/')
  }

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Compte'

  const changeLanguage = (lng: string) => {
    console.log('Langue changée:', lng)
    setLangOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <img src="/LOGO1.png" alt="Limbiz Logo" className="h-10 w-auto md:h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium transition">Accueil</Link>
            <Link href="/services" className="text-white/70 hover:text-white">Services</Link>
            <Link href="/pricing" className="text-white/70 hover:text-white">Tarifs</Link>
            <Link href="/books" className="text-white/70 hover:text-white">Livres</Link>
            <Link href="/contact" className="text-white/70 hover:text-white">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Sélecteur de langue sans icône */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="lang-button px-3 py-2 text-sm text-white/70 hover:text-white transition">
                EN
              </button>
              {langOpen && (
                <div className="lang-popup absolute right-0 mt-2 w-28 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 py-2 z-50">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10">English</button>
                  <button onClick={() => changeLanguage('fr')} className="block w-full text-left px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10">Français</button>
                  <button onClick={() => changeLanguage('ht')} className="block w-full text-left px-4 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10">Kreyòl</button>
                </div>
              )}
            </div>

            {user ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="user-menu flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white/90 text-sm font-medium hidden sm:inline">{displayName}</span>
                  <span className="text-white/50 text-sm ml-1">▼</span>
                </button>

                {dropdownOpen && (
                  <div className="user-popup absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl z-50">
                    <div className="p-2 border-b border-white/10">
                      <p className="text-white/60 text-xs">Connecté</p>
                      <p className="text-white font-medium truncate">{user.email}</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <Link href="/orders" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-white/10 rounded-xl transition">Mes commandes</Link>
                      <Link href="/vault" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-white/10 rounded-xl transition">Mes documents</Link>
                      <Link href="/support" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-white/10 rounded-xl transition">Support</Link>
                      <Link href="/admin" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-3 py-2 text-white/80 hover:bg-white/10 rounded-xl transition">Administration</Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-xl transition">Déconnexion</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition">Connexion</Link>
                <Link href="/register" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-500/30 transition">S'inscrire</Link>
              </>
            )}

            {/* Book a Consultation sans icône */}
            <div className="relative">
              <button onClick={() => setShowContactPopup(!showContactPopup)} className="booking-button px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-500/30 transition">
                Book a Consultation
              </button>
              {showContactPopup && (
                <div className="contact-popup absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 p-4 z-50">
                  <p className="text-white/50 text-xs mb-2">Contactez-nous</p>
                  <a href="tel:+15551234567" className="flex items-center gap-2 text-white hover:text-blue-400 py-1">📞 +1 (555) 123-4567</a>
                  <a href="mailto:hello@limbiz.com" className="flex items-center gap-2 text-white hover:text-blue-400 py-1">✉️ hello@limbiz.com</a>
                  <a href="https://wa.me/15551234567" target="_blank" className="flex items-center gap-2 text-white hover:text-green-400 py-1">💬 WhatsApp</a>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-4">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Accueil</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Services</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Tarifs</Link>
            <Link href="/books" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Livres</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Contact</Link>
            {user ? (
              <>
                <Link href="/orders" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Mes commandes</Link>
                <Link href="/vault" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Mes documents</Link>
                <Link href="/support" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Support</Link>
                <Link href="/admin" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Administration</Link>
                <button onClick={handleLogout} className="text-red-400">Déconnexion</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">Connexion</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="text-blue-400">Inscription</Link>
              </>
            )}
            <button className="px-4 py-2 bg-blue-600 rounded-full text-white text-sm font-semibold">Book a Consultation</button>
          </div>
        </div>
      )}
    </nav>
  )
}