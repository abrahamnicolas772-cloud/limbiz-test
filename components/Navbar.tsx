'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { FiMenu, FiX, FiLogOut, FiSettings, FiShoppingBag, FiFolder, FiMessageSquare, FiChevronDown, FiPhone, FiMail, FiGlobe } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import NotificationBell from './NotificationBell'

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
    const handleScroll = () => setScrolled(window.scrollY > )
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

  const displayName = profile?.full_name || user?.email?.split('@')[] || 'Compte'

  const changeLanguage = (lng: string) => {
    console.log('Langue chang�e:', lng)
    setLangOpen(false)
  }

  return (
    <nav className={`fixed top- left- w-full z- transition-all duration- ${scrolled ? 'bg-black/ backdrop-blur-xl border-b border-white/ shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-xl mx-auto px- sm:px- lg:px-">
        <div className="flex items-center justify-between h- md:h-">
          {/ Logo /}
          <Link href="/" className="flex-shrink-">
            <img src="/LOGO.png" alt="Limbiz Logo" className="h- w-auto md:h-" />
          </Link>

          {/ Liens desktop /}
          <div className="hidden md:flex items-center gap- lg:gap-">
            <Link href="/" className="text-white/ hover:text-white text-sm font-medium transition">Accueil</Link>
            <Link href="/services" className="text-white/ hover:text-white">Services</Link>
            <Link href="/pricing" className="text-white/ hover:text-white">Tarifs</Link>
            <Link href="/books" className="text-white/ hover:text-white">Livres</Link>
            <Link href="/contact" className="text-white/ hover:text-white">Contact</Link>
          </div>

          {/ Boutons desktop /}
          <div className="hidden md:flex items-center gap-">
            {/ 🔔 Cloche de notifications (fonctionnelle) /}
            <NotificationBell />

            {/ S�lecteur de langue /}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="lang-button flex items-center gap- px- py- text-sm text-white/ hover:text-white transition">
                <FiGlobe size={} /> EN
              </button>
              {langOpen && (
                <div className="lang-popup absolute right- mt- w- bg-black/ backdrop-blur-xl rounded-xl border border-white/ py- z-">
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px- py-. text-sm text-white/ hover:text-white hover:bg-white/">English</button>
                  <button onClick={() => changeLanguage('fr')} className="block w-full text-left px- py-. text-sm text-white/ hover:text-white hover:bg-white/">Français</button>
                  <button onClick={() => changeLanguage('ht')} className="block w-full text-left px- py-. text-sm text-white/ hover:text-white hover:bg-white/">Kreyòl</button>
                </div>
              )}
            </div>

            {/ Utilisateur /}
            {user ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="user-menu flex items-center gap- px- py-. bg-white/ rounded-full border border-white/ hover:bg-white/ transition">
                  <div className="w- h- rounded-full bg-gradient-to-r from-blue- to-purple- flex items-center justify-center text-white text-sm font-bold">
                    {displayName.charAt().toUpperCase()}
                  </div>
                  <span className="text-white/ text-sm font-medium hidden sm:inline">{displayName}</span>
                  <FiChevronDown size={} className="text-white/" />
                </button>

                {dropdownOpen && (
                  <div className="user-popup absolute right- mt- w- bg-black/ backdrop-blur-xl rounded-xl border border-white/ shadow-xl z-">
                    <div className="p- border-b border-white/">
                      <p className="text-white/ text-xs">Connect�</p>
                      <p className="text-white font-medium truncate">{user.email}</p>
                    </div>
                    <div className="p- space-y-">
                      <Link href="/orders" onClick={() => setDropdownOpen(false)} className="flex items-center gap- px- py- text-white/ hover:bg-white/ rounded-xl transition"><FiShoppingBag size={} /> Mes commandes</Link>
                      <Link href="/vault" onClick={() => setDropdownOpen(false)} className="flex items-center gap- px- py- text-white/ hover:bg-white/ rounded-xl transition"><FiFolder size={} /> Mes documents</Link>
                      <Link href="/support" onClick={() => setDropdownOpen(false)} className="flex items-center gap- px- py- text-white/ hover:bg-white/ rounded-xl transition"><FiMessageSquare size={} /> Support</Link>
                      {/ Lien Administration (visible pour tout utilisateur connect� – à restreindre plus tard) /}
                      <Link href="/admin" onClick={() => setDropdownOpen(false)} className="flex items-center gap- px- py- text-white/ hover:bg-white/ rounded-xl transition">
                        <FiSettings size={} /> Administration
                      </Link>
                      <button onClick={handleLogout} className="w-full flex items-center gap- px- py- text-red- hover:bg-red-/ rounded-xl transition">
                        <FiLogOut size={} /> D�connexion
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="px- py- text-sm font-medium text-white/ hover:text-white transition">Connexion</Link>
                <Link href="/register" className="px- py- bg-blue- hover:bg-blue- rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-/ transition">S'inscrire</Link>
              </>
            )}

            {/ Book a Consultation /}
            <div className="relative">
              <button onClick={() => setShowContactPopup(!showContactPopup)} className="booking-button flex items-center gap- px- py- bg-blue- hover:bg-blue- rounded-full text-white text-sm font-semibold shadow-lg shadow-blue-/ transition">
                Book a Consultation
              </button>
              {showContactPopup && (
                <div className="contact-popup absolute right- mt- w- bg-black/ backdrop-blur-xl rounded-xl border border-white/ p- z-">
                  <p className="text-white/ text-xs mb-">Contactez-nous</p>
                  <a href="tel:+" className="flex items-center gap- text-white hover:text-blue- py-">📞 + () -</a>
                  <a href="mailto:hello@limbiz.com" className="flex items-center gap- text-white hover:text-blue- py-"> hello@limbiz.com</a>
                  <a href="https://wa.me/" target="_blank" className="flex items-center gap- text-white hover:text-green- py-">💬 WhatsApp</a>
                </div>
              )}
            </div>
          </div>

          {/ Menu mobile /}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-">
            {isOpen ? <FiX size={} /> : <FiMenu size={} />}
          </button>
        </div>
      </div>

      {/ Mobile menu /}
      {isOpen && (
        <div className="md:hidden bg-black/ backdrop-blur-xl border-t border-white/ py-">
          <div className="flex flex-col items-center gap-">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Accueil</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Services</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Tarifs</Link>
            <Link href="/books" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Livres</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Contact</Link>
            {user ? (
              <>
                <Link href="/orders" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Mes commandes</Link>
                <Link href="/vault" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Mes documents</Link>
                <Link href="/support" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Support</Link>
                <Link href="/admin" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Administration</Link>
                <button onClick={handleLogout} className="text-red-">D�connexion</button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-white/ hover:text-white">Connexion</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="text-blue-">Inscription</Link>
              </>
            )}
            <button className="px- py- bg-blue- rounded-full text-white text-sm font-semibold"> Book a Consultation</button>
          </div>
        </div>
      )}
    </nav>
  )
}