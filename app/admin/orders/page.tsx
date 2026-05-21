'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase.from('orders').select('*, services(*)').order('created_at', { ascending: false })
      setOrders(data || [])
    }
    fetchOrders()
  }, [])

  const updateStatus = async (id: number, status: string) => {
    await supabase.from('orders').update({ status }).eq('id', id)
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Commandes</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div>
                <h3 className="text-lg font-bold text-white">Commande #{order.id}</h3>
                <p className="text-white/50 text-sm">{order.services?.name}</p>
              </div>
              <select
                value={order.status}
                onChange={(e) => updateStatus(order.id, e.target.value)}
                className="px-3 py-1 bg-white/10 rounded-lg text-white text-sm"
              >
                <option value="pending">En attente</option>
                <option value="in_progress">En cours</option>
                <option value="completed">Terminé</option>
              </select>
            </div>
            <div className="mt-3">
              <div className="flex justify-between text-white/50 text-xs mb-1">
                <span>Progression</span>
                <span>{order.progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${order.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}