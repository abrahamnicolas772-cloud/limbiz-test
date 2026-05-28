'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminSupport() {
  const [tickets, setTickets] = useState<any[]>([])
  const [selected, setSelected] = useState<any>(null)
  const [reply, setReply] = useState('')
  const supabase = createClient()

  useEffect(() => {
    const fetchTickets = async () => {
      const { data } = await supabase.from('tickets').select(', profiles(full_name)').order('created_at', { ascending: false })
      setTickets(data || [])
    }
    fetchTickets()
  }, [])

  const updateTicket = async (id: number, admin_reply: string, status: string) => {
    await supabase.from('tickets').update({ admin_reply, status }).eq('id', id)
    setTickets(tickets.map(t => t.id === id ? { ...t, admin_reply, status } : t))
    setSelected(null)
    setReply('')
  }

  return (
    <div>
      <h className="text-xl font-bold text-white mb-">Support Tickets</h>
      <div className="grid lg:grid-cols- gap-">
        <div className="space-y-">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelected(ticket)}
              className={`bg-white/ rounded-xl p- border cursor-pointer transition ${selected?.id === ticket.id ? 'border-blue- bg-blue-/' : 'border-white/ hover:border-white/'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h className="font-bold text-white">{ticket.subject}</h>
                  <p className="text-white/ text-sm">{ticket.profiles?.full_name || 'Client'}</p>
                </div>
                <span className={`text-xs px- py-. rounded-full ${
                  ticket.status === 'open' ? 'bg-yellow-/ text-yellow-' :
                  ticket.status === 'closed' ? 'bg-gray-/ text-gray-' : 'bg-green-/ text-green-'
                }`}>{ticket.status}</span>
              </div>
              <p className="text-white/ text-sm mt- line-clamp-">{ticket.message}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="bg-white/ rounded-xl p- border border-white/">
            <h className="text-xl font-bold text-white mb-">{selected.subject}</h>
            <p className="text-white/ text-sm mb-">{selected.message}</p>
            {selected.admin_reply && (
              <div className="bg-blue-/ rounded-xl p- mb-">
                <p className="text-blue- text-xs font-semibold">Votre r√ponse :</p>
                <p className="text-white/ text-sm">{selected.admin_reply}</p>
              </div>
            )}
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Votre r√ponse..."
              rows={}
              className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white resize-none mb-"
            />
            <div className="flex gap-">
              <button onClick={() => updateTicket(selected.id, reply, 'resolved')} className="px- py- bg-blue- rounded-xl text-white text-sm">R√pondre</button>
              <button onClick={() => updateTicket(selected.id, selected.admin_reply || '', 'closed')} className="px- py- bg-gray-/ rounded-xl text-white text-sm">Fermer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}