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
      const { data } = await supabase.from('tickets').select('*, profiles(full_name)').order('created_at', { ascending: false })
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
      <h1 className="text-3xl font-bold text-white mb-6">Support Tickets</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => setSelected(ticket)}
              className={`bg-white/5 rounded-xl p-4 border cursor-pointer transition ${selected?.id === ticket.id ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 hover:border-white/20'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">{ticket.subject}</h3>
                  <p className="text-white/40 text-sm">{ticket.profiles?.full_name || 'Client'}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  ticket.status === 'open' ? 'bg-yellow-500/20 text-yellow-400' :
                  ticket.status === 'closed' ? 'bg-gray-500/20 text-gray-400' : 'bg-green-500/20 text-green-400'
                }`}>{ticket.status}</span>
              </div>
              <p className="text-white/60 text-sm mt-2 line-clamp-2">{ticket.message}</p>
            </div>
          ))}
        </div>

        {selected && (
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-2">{selected.subject}</h2>
            <p className="text-white/60 text-sm mb-4">{selected.message}</p>
            {selected.admin_reply && (
              <div className="bg-blue-600/10 rounded-xl p-3 mb-4">
                <p className="text-blue-400 text-xs font-semibold">Votre réponse :</p>
                <p className="text-white/60 text-sm">{selected.admin_reply}</p>
              </div>
            )}
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Votre réponse..."
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white resize-none mb-3"
            />
            <div className="flex gap-3">
              <button onClick={() => updateTicket(selected.id, reply, 'resolved')} className="px-4 py-2 bg-blue-600 rounded-xl text-white text-sm">Répondre</button>
              <button onClick={() => updateTicket(selected.id, selected.admin_reply || '', 'closed')} className="px-4 py-2 bg-gray-600/30 rounded-xl text-white text-sm">Fermer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}