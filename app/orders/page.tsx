'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiPackage, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

interface Order {
  id: number
  status: string
  progress: number
  created_at: string
  services: { name: string; price: number }
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchOrders = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setLoading(false)
        return
      }
      const { data } = await supabase
        .from('orders')
        .select('*, services(*)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      setOrders(data || [])
      setLoading(false)
    }
    fetchOrders()
  }, [supabase])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <FiClock className="text-yellow-400" />
      case 'in_progress': return <FiPackage className="text-blue-400" />
      case 'completed': return <FiCheckCircle className="text-green-400" />
      default: return <FiAlertCircle className="text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente'
      case 'in_progress': return 'En cours'
      case 'completed': return 'Terminé'
      default: return status
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[110px] animate-pulse-slow" />
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-4xl font-bold text-white">Mes commandes</h1>
            <p className="text-white/50 mt-1">Suivez l’avancement de vos services</p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>
          ) : orders.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl">
              <FiPackage className="text-5xl text-white/20 mx-auto mb-3" />
              <p className="text-white/40">Vous n’avez aucune commande pour le moment.</p>
              <a href="/services" className="inline-block mt-4 px-5 py-2 bg-blue-600 rounded-full text-white text-sm">Découvrir nos services</a>
            </div>
          ) : (
            <div className="space-y-5">
              {orders.map((order, idx) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition"
                >
                  <div className="flex flex-wrap justify-between items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{order.services?.name}</h3>
                      <p className="text-white/40 text-sm">Commande #{order.id} • {new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <span className="text-white/60 text-sm">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-white/50 text-xs mb-1">
                      <span>Progression</span>
                      <span>{order.progress}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${order.progress}%` }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}