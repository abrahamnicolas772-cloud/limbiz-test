'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminOrders() {
  const [orders, setOrders] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase.from('orders').select(', services()').order('created_at', { ascending: false })
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
      <h className="text-xl font-bold text-white mb-">Commandes</h>
      <div className="space-y-">
        {orders.map((order) => (
          <div key={order.id} className="bg-white/ rounded-xl p- border border-white/">
            <div className="flex flex-wrap justify-between items-start gap-">
              <div>
                <h className="text-lg font-bold text-white">Commande {order.id}</h>
                <p className="text-white/ text-sm">{order.services?.name}</p>
              </div>
              <select
                value={order.status}
                onChange={(e) => updateStatus(order.id, e.target.value)}
                className="px- py- bg-white/ rounded-lg text-white text-sm"
              >
                <option value="pending">En attente</option>
                <option value="in_progress">En cours</option>
                <option value="completed">Termin√</option>
              </select>
            </div>
            <div className="mt-">
              <div className="flex justify-between text-white/ text-xs mb-">
                <span>Progression</span>
                <span>{order.progress}%</span>
              </div>
              <div className="h- bg-white/ rounded-full overflow-hidden">
                <div className="h-full bg-blue- rounded-full" style={{ width: `${order.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}