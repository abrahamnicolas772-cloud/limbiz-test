'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import { FiUsers, FiPackage, FiFolder, FiMessageSquare } from 'react-icons/fi'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: , orders: , documents: , tickets:  })
  const supabase = createClient()

  useEffect(() => {
    const fetchStats = async () => {
      const [users, orders, docs, tickets] = await Promise.all([
        supabase.from('profiles').select('', { count: 'exact', head: true }),
        supabase.from('orders').select('', { count: 'exact', head: true }),
        supabase.from('documents').select('', { count: 'exact', head: true }),
        supabase.from('tickets').select('', { count: 'exact', head: true }),
      ])
      setStats({
        users: users.count || ,
        orders: orders.count || ,
        documents: docs.count || ,
        tickets: tickets.count || ,
      })
    }
    fetchStats()
  }, [])

  const cards = [
    { title: 'Utilisateurs', value: stats.users, icon: <FiUsers size={} />, color: 'from-blue- to-cyan-' },
    { title: 'Commandes', value: stats.orders, icon: <FiPackage size={} />, color: 'from-purple- to-pink-' },
    { title: 'Documents', value: stats.documents, icon: <FiFolder size={} />, color: 'from-green- to-emerald-' },
    { title: 'Tickets', value: stats.tickets, icon: <FiMessageSquare size={} />, color: 'from-orange- to-red-' },
  ]

  return (
    <div>
      <h className="text-xl font-bold text-white mb-">Tableau de bord</h>
      <div className="grid md:grid-cols- lg:grid-cols- gap-">
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: , y:  }}
            animate={{ opacity: , y:  }}
            transition={{ delay: idx  . }}
            className="bg-white/ rounded-xl p- border border-white/"
          >
            <div className={`w- h- rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-`}>
              {card.icon}
            </div>
            <p className="text-white/ text-sm">{card.title}</p>
            <p className="text-xl font-bold text-white">{card.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}