'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { FiUsers, FiPackage, FiFolder, FiMessageSquare } from 'react-icons/fi'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, orders: 0, documents: 0, tickets: 0 })
  const supabase = createClient()

  useEffect(() => {
    const fetchStats = async () => {
      const [users, orders, docs, tickets] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('orders').select('*', { count: 'exact', head: true }),
        supabase.from('documents').select('*', { count: 'exact', head: true }),
        supabase.from('tickets').select('*', { count: 'exact', head: true }),
      ])
      setStats({
        users: users.count || 0,
        orders: orders.count || 0,
        documents: docs.count || 0,
        tickets: tickets.count || 0,
      })
    }
    fetchStats()
  }, [])

  const cards = [
    { title: 'Utilisateurs', value: stats.users, icon: <FiUsers size={24} />, color: 'from-blue-500 to-cyan-500' },
    { title: 'Commandes', value: stats.orders, icon: <FiPackage size={24} />, color: 'from-purple-500 to-pink-500' },
    { title: 'Documents', value: stats.documents, icon: <FiFolder size={24} />, color: 'from-green-500 to-emerald-500' },
    { title: 'Tickets', value: stats.tickets, icon: <FiMessageSquare size={24} />, color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Tableau de bord</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 rounded-2xl p-6 border border-white/10"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
              {card.icon}
            </div>
            <p className="text-white/50 text-sm">{card.title}</p>
            <p className="text-3xl font-bold text-white">{card.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}