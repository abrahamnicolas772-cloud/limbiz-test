'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiMessageSquare, FiPlus, FiClock, FiCheckCircle, FiHelpCircle } from 'react-icons/fi'

interface Ticket {
  id: number
  subject: string
  message: string
  category: string
  status: string
  admin_reply: string
  created_at: string
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [showForm, setShowForm] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [category, setCategory] = useState('general')
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    const { data } = await supabase
      .from('tickets')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    setTickets(data || [])
    setLoading(false)
  }

  const createTicket = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('tickets').insert({
      user_id: user.id,
      subject,
      message,
      category,
      status: 'open'
    })
    setShowForm(false)
    setSubject('')
    setMessage('')
    fetchTickets()
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open': return <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/20 text-yellow-400">En attente</span>
      case 'resolved': return <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Résolu</span>
      case 'closed': return <span className="px-2 py-0.5 text-xs rounded-full bg-gray-500/20 text-gray-400">Fermé</span>
      default: return null
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

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Support client</h1>
              <p className="text-white/50 mt-1">Une question ? Notre équipe vous répond sous 24h</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-600 rounded-xl text-white text-sm font-semibold flex items-center gap-2 hover:bg-blue-500 transition"
            >
              <FiPlus size={16} /> Nouveau ticket
            </button>
          </div>

          {showForm && (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={createTicket} className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
              <div className="mb-4">
                <label className="block text-white/60 text-sm mb-1">Catégorie</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white">
                  <option value="general">Général</option>
                  <option value="order">Commande</option>
                  <option value="document">Document</option>
                  <option value="payment">Paiement</option>
                  <option value="technical">Technique</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-white/60 text-sm mb-1">Sujet</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white" required />
              </div>
              <div className="mb-4">
                <label className="block text-white/60 text-sm mb-1">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white resize-none" required />
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded-xl text-white">Envoyer</button>
            </motion.form>
          )}

          {loading ? (
            <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>
          ) : tickets.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl">
              <FiHelpCircle className="text-5xl text-white/20 mx-auto mb-3" />
              <p className="text-white/40">Aucun ticket de support</p>
            </div>
          ) : (
            <div className="space-y-4">
              {tickets.map((ticket, idx) => (
                <motion.div key={ticket.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{ticket.subject}</h3>
                      <p className="text-white/40 text-sm">{new Date(ticket.created_at).toLocaleDateString()}</p>
                    </div>
                    {getStatusBadge(ticket.status)}
                  </div>
                  <p className="text-white/60 text-sm mb-3">{ticket.message}</p>
                  {ticket.admin_reply && (
                    <div className="bg-blue-600/10 rounded-xl p-3 mt-3">
                      <p className="text-blue-400 text-xs font-semibold mb-1">Réponse de Limbiz :</p>
                      <p className="text-white/60 text-sm">{ticket.admin_reply}</p>
                    </div>
                  )}
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