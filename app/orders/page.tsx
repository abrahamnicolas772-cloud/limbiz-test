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
        .select(', services()')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      setOrders(data || [])
      setLoading(false)
    }
    fetchOrders()
  }, [supabase])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <FiClock className="text-yellow-" />
      case 'in_progress': return <FiPackage className="text-blue-" />
      case 'completed': return <FiCheckCircle className="text-green-" />
      default: return <FiAlertCircle className="text-gray-" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'En attente'
      case 'in_progress': return 'En cours'
      case 'completed': return 'TerminÃ'
      default: return status
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black relative overflow-hidden pt-">
        <div className="absolute inset- bg-noise opacity- pointer-events-none" />
        <div className="absolute inset- -z-">
          <div className="absolute top- left-/ w- h- bg-blue-/ rounded-full blur-[px] animate-pulse-slow" />
          <div className="absolute bottom- right-/ w- h- bg-purple-/ rounded-full blur-[px] animate-pulse-slow" />
        </div>

        <div className="max-w-xl mx-auto px- py-">
          <motion.div initial={{ opacity: , y:  }} animate={{ opacity: , y:  }} className="mb-">
            <h className="text-xl font-bold text-white">Mes commandes</h>
            <p className="text-white/ mt-">Suivez lâ€™avancement de vos services</p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-"><div className="w- h- border- border-blue- border-t-transparent rounded-full animate-spin" /></div>
          ) : orders.length ===  ? (
            <div className="text-center py- bg-white/ rounded-xl">
              <FiPackage className="text-xl text-white/ mx-auto mb-" />
              <p className="text-white/">Vous nâ€™avez aucune commande pour le moment.</p>
              <a href="/services" className="inline-block mt- px- py- bg-blue- rounded-full text-white text-sm">DÃcouvrir nos services</a>
            </div>
          ) : (
            <div className="space-y-">
              {orders.map((order, idx) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: , y:  }}
                  animate={{ opacity: , y:  }}
                  transition={{ delay: idx  . }}
                  className="bg-white/ backdrop-blur-sm border border-white/ rounded-xl p- hover:border-blue-/ transition"
                >
                  <div className="flex flex-wrap justify-between items-start gap-">
                    <div>
                      <h className="text-xl font-bold text-white">{order.services?.name}</h>
                      <p className="text-white/ text-sm">Commande {order.id} â€¢ {new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-">
                      {getStatusIcon(order.status)}
                      <span className="text-white/ text-sm">{getStatusText(order.status)}</span>
                    </div>
                  </div>
                  <div className="mt-">
                    <div className="flex justify-between text-white/ text-xs mb-">
                      <span>Progression</span>
                      <span>{order.progress}%</span>
                    </div>
                    <div className="h- bg-white/ rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue- to-purple- rounded-full transition-all duration-" style={{ width: `${order.progress}%` }} />
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