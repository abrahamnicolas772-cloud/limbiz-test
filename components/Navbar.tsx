'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import SearchBar from '@/components/SearchBar'

export default function Navbar() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

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
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
        setProfile(profile)
      }
    }
    getUser()
    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null)
      if (session?.user) {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', session.user.id).single()
        setProfile(profile)
      } else { setProfile(null) }
    })
    return () => listener?.subscription.unsubscribe()
  }, [supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setDropdownOpen(false)
    router.push('/')
  }

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Account'
  const avatarUrl = profile?.avatar_url || null

  const submenus = [
    {
      id: 'formations', title: 'Formations',
      icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>),
      links: [{ href: '/services/llc', label: 'LLC Filing' },{ href: '/services/ein', label: 'EIN Registration' },{ href: '/services/dba', label: 'DBA / Fictitious Name' },{ href: '/services/boir', label: 'BOIR Guidance' }]
    },
    {
      id: 'setups', title: 'Setups',
      icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
      links: [{ href: '/services/business-address', label: 'Business Address' },{ href: '/services/registered-agent', label: 'Registered Agent' },{ href: '/services/ecommerce', label: 'E-commerce Setup' },{ href: '/services/website', label: 'Website Development' }]
    },
    {
      id: 'protections', title: 'Protections',
      icon: (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
      links: [{ href: '/services/trademark', label: 'Trademark' },{ href: '/services/copyright', label: 'Copyright' },{ href: '/services/compliance', label: 'Compliance' },{ href: '/services/consultation', label: 'Consultation' }]
    }
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo agrandi */}
            <Link href="/" className="flex-shrink-0">
              <img src="/LOGO1.png" alt="LIMBIZ Logo" className="h-28 w-auto md:h-36 lg:h-48 hover:opacity-80 transition-all duration-300" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-5 lg:gap-7">
              <Link href="/" className="text-white/70 hover:text-white text-sm font-light tracking-wide transition">Home</Link>
              
              <div className="relative">
                <button onClick={() => { setServicesOpen(!servicesOpen); setEcosystemOpen(false); setOpenSubmenu(null) }} className="text-white/70 hover:text-white text-sm font-light tracking-wide transition flex items-center gap-1">
                  Services
                  <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-black/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-3 z-50">
                    {submenus.map((menu) => (
                      <div key={menu.id} className="mb-1">
                        <button onClick={() => setOpenSubmenu(openSubmenu === menu.id ? null : menu.id)} className="w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition">
                          <span className="flex items-center gap-2"><span className="text-blue-400">{menu.icon}</span>{menu.title}</span>
                          <svg className={`w-3 h-3 transition-transform ${openSubmenu === menu.id ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </button>
                        {openSubmenu === menu.id && (
                          <div className="ml-6 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                            {menu.links.map((link) => (
                              <Link key={link.href} href={link.href} onClick={() => { setServicesOpen(false); setOpenSubmenu(null) }} className="block px-3 py-1.5 text-white/50 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">{link.label}</Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/pricing" className="text-white/70 hover:text-white text-sm font-light tracking-wide transition">Pricing</Link>
              
              <div className="relative">
                <button onClick={() => { setEcosystemOpen(!ecosystemOpen); setServicesOpen(false) }} className="text-white/70 hover:text-white text-sm font-light tracking-wide transition flex items-center gap-1">
                  Ecosystem
                  <svg className={`w-3 h-3 transition-transform ${ecosystemOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                {ecosystemOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-black/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-3 z-50">
                    <ul className="space-y-1">
                      <li><Link href="/ecosystem" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Overview</Link></li>
                      <li><Link href="/academy" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Academy</Link></li>
                      <li><Link href="/rewards" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Rewards</Link></li>
                      <li><Link href="/credit-hub" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Credit Hub</Link></li>
                      <li><Link href="/funding-center" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Funding Center</Link></li>
                      <li><Link href="/tax-filings" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Tax Filings</Link></li>
                      <li><Link href="/resources" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Free Resources</Link></li>
                      <li><Link href="/academy" onClick={() => setEcosystemOpen(false)} className="block px-3 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition">Ebooks & Guides</Link></li>
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/international" className="text-white/70 hover:text-white text-sm font-light tracking-wide transition">International</Link>
              <Link href="/about" className="text-white/70 hover:text-white text-sm font-light tracking-wide transition">About</Link>
              <Link href="/contact" className="text-white/70 hover:text-white text-sm font-light tracking-wide transition">Contact</Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <SearchBar />
              <div className="relative">
                <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 px-2 py-2 text-sm text-white/60 hover:text-white transition">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10"/></svg>EN
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-2 w-28 bg-black/90 rounded-xl border border-white/10 py-2 z-50">
                    {['English','Kreyòl','Français','Español'].map(l => (
                      <button key={l} onClick={() => setLangOpen(false)} className="block w-full text-left px-4 py-1.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition">{l}</button>
                    ))}
                  </div>
                )}
              </div>
              {user ? (
                <div className="relative">
                  <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition">
                    {avatarUrl ? <img src={avatarUrl} alt="" className="w-7 h-7 rounded-full object-cover"/> : <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">{displayName.charAt(0).toUpperCase()}</div>}
                    <span className="text-white/80 text-sm hidden sm:inline">{displayName}</span>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-2xl border border-white/10 p-2 z-50">
                      <Link href="/dashboard" onClick={()=>setDropdownOpen(false)} className="block px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg text-sm">Dashboard</Link>
                      <button onClick={handleLogout} className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg text-sm">Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <><Link href="/login" className="px-4 py-2 text-sm text-white/70 hover:text-white transition">Login</Link><Link href="/register" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white text-sm font-medium transition">Sign Up</Link></>
              )}
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/70 p-2">
              {isOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"/></svg>}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 py-4">
            <div className="flex flex-col items-center gap-3">
              <Link href="/" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Home</Link>
              <Link href="/services" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Services</Link>
              <Link href="/pricing" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Pricing</Link>
              <Link href="/ecosystem" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Ecosystem</Link>
              <Link href="/international" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">International</Link>
              <Link href="/about" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">About</Link>
              <Link href="/contact" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Contact</Link>
              {user ? <button onClick={handleLogout} className="text-red-400 text-sm">Logout</button> : <><Link href="/login" onClick={()=>setIsOpen(false)} className="text-white/70 text-sm">Login</Link><Link href="/register" onClick={()=>setIsOpen(false)} className="text-blue-400 text-sm">Sign Up</Link></>}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
