'use client'

import Link from 'next/link'

const adminCards = [
  { title: 'Users', value: '1,234', icon: '👥', href: '/admin/users', color: 'bg-blue-500' },
  { title: 'Orders', value: '56', icon: '📦', href: '/admin/orders', color: 'bg-green-500' },
  { title: 'Documents', value: '892', icon: '📁', href: '/admin/documents', color: 'bg-purple-500' },
  { title: 'Support', value: '12', icon: '💬', href: '/admin/support', color: 'bg-orange-500' },
]

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {adminCards.map((card, index) => (
          <Link key={index} href={card.href}>
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{card.icon}</span>
                <span className={`w-3 h-3 rounded-full ${card.color}`}></span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-white">{card.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
