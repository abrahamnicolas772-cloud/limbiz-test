'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { FiLayout, FiUsers, FiPackage, FiFolder, FiMessageSquare, FiBell, FiLogOut } from 'react-icons/fi'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: <FiLayout size={} /> },
  { name: 'Utilisateurs', href: '/admin/users', icon: <FiUsers size={} /> },
  { name: 'Commandes', href: '/admin/orders', icon: <FiPackage size={} /> },
  { name: 'Documents', href: '/admin/documents', icon: <FiFolder size={} /> },
  { name: 'Support', href: '/admin/support', icon: <FiMessageSquare size={} /> },
  { name: 'Notifications', href: '/admin/notifications', icon: <FiBell size={} /> },
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
      {/ Sidebar /}
      <aside className="fixed left- top- h-full w- bg-black/ backdrop-blur-xl border-r border-white/ p- z-">
        <div className="mb-">
          <h className="text-xl font-bold text-white">Limbiz Admin</h>
          <p className="text-white/ text-sm truncate">{user?.email}</p>
        </div>
        <nav className="space-y-">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap- px- py- rounded-xl transition ${
                pathname === item.href
                  ? 'bg-blue- text-white'
                  : 'text-white/ hover:bg-white/ hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="absolute bottom- left- right- flex items-center gap- px- py- text-red- hover:bg-red-/ rounded-xl transition"
        >
          <FiLogOut size={} /> DÃconnexion
        </button>
      </aside>

      {/ Main content /}
      <main className="ml- flex- p-">{children}</main>
    </div>
  )
}