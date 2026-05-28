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
      .select('')
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
      case 'open': return <span className="px- py-. text-xs rounded-full bg-yellow-/ text-yellow-">En attente</span>
      case 'resolved': return <span className="px- py-. text-xs rounded-full bg-green-/ text-green-">R√solu</span>
      case 'closed': return <span className="px- py-. text-xs rounded-full bg-gray-/ text-gray-">Ferm√</span>
      default: return null
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
          <div className="flex flex-wrap justify-between items-center gap- mb-">
            <div>
              <h className="text-xl font-bold text-white">Support client</h>
              <p className="text-white/ mt-">Une question ? Notre √quipe vous r√pond sous h</p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px- py- bg-blue- rounded-xl text-white text-sm font-semibold flex items-center gap- hover:bg-blue- transition"
            >
              <FiPlus size={} /> Nouveau ticket
            </button>
          </div>

          {showForm && (
            <motion.form initial={{ opacity: , y:  }} animate={{ opacity: , y:  }} onSubmit={createTicket} className="bg-white/ rounded-xl p- mb- border border-white/">
              <div className="mb-">
                <label className="block text-white/ text-sm mb-">Cat√gorie</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white">
                  <option value="general">G√n√ral</option>
                  <option value="order">Commande</option>
                  <option value="document">Document</option>
                  <option value="payment">Paiement</option>
                  <option value="technical">Technique</option>
                </select>
              </div>
              <div className="mb-">
                <label className="block text-white/ text-sm mb-">Sujet</label>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required />
              </div>
              <div className="mb-">
                <label className="block text-white/ text-sm mb-">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white resize-none" required />
              </div>
              <button type="submit" className="px- py- bg-blue- rounded-xl text-white">Envoyer</button>
            </motion.form>
          )}

          {loading ? (
            <div className="flex justify-center py-"><div className="w- h- border- border-blue- border-t-transparent rounded-full animate-spin" /></div>
          ) : tickets.length ===  ? (
            <div className="text-center py- bg-white/ rounded-xl">
              <FiHelpCircle className="text-xl text-white/ mx-auto mb-" />
              <p className="text-white/">Aucun ticket de support</p>
            </div>
          ) : (
            <div className="space-y-">
              {tickets.map((ticket, idx) => (
                <motion.div key={ticket.id} initial={{ opacity: , y:  }} animate={{ opacity: , y:  }} transition={{ delay: idx  . }} className="bg-white/ rounded-xl p- border border-white/">
                  <div className="flex flex-wrap justify-between items-start gap- mb-">
                    <div>
                      <h className="text-lg font-bold text-white">{ticket.subject}</h>
                      <p className="text-white/ text-sm">{new Date(ticket.created_at).toLocaleDateString()}</p>
                    </div>
                    {getStatusBadge(ticket.status)}
                  </div>
                  <p className="text-white/ text-sm mb-">{ticket.message}</p>
                  {ticket.admin_reply && (
                    <div className="bg-blue-/ rounded-xl p- mt-">
                      <p className="text-blue- text-xs font-semibold mb-">R√ponse de Limbiz :</p>
                      <p className="text-white/ text-sm">{ticket.admin_reply}</p>
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