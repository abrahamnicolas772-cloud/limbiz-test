'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { FiLayout, FiUsers, FiPackage, FiFolder, FiMessageSquare, FiBell, FiLogOut } from 'react-icons/fi'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: <FiLayout size={18} /> },
  { name: 'Utilisateurs', href: '/admin/users', icon: <FiUsers size={18} /> },
  { name: 'Commandes', href: '/admin/orders', icon: <FiPackage size={18} /> },
  { name: 'Documents', href: '/admin/documents', icon: <FiFolder size={18} /> },
  { name: 'Support', href: '/admin/support', icon: <FiMessageSquare size={18} /> },
  { name: 'Notifications', href: '/admin/notifications', icon: <FiBell size={18} /> },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push('/login')
      else setUser(data.user)
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-black/80 backdrop-blur-xl border-r border-white/10 p-5 z-20">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Limbiz Admin</h1>
          <p className="text-white/40 text-sm truncate">{user?.email}</p>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="absolute bottom-5 left-5 right-5 flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-xl transition"
        >
          <FiLogOut size={18} /> Déconnexion
        </button>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 p-6">{children}</main>
    </div>
  )
}