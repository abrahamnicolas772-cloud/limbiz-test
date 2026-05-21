'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminNotifications() {
  const [users, setUsers] = useState<any[]>([])
  const [selectedUser, setSelectedUser] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const supabase = createClient()

  useEffect(() => {
    supabase.from('profiles').select('id, full_name').then(({ data }) => setUsers(data || []))
  }, [])

  const sendNotification = async (e: React.FormEvent) => {
    e.preventDefault()
    await supabase.from('notifications').insert({
      user_id: selectedUser,
      title,
      message,
      type: 'admin',
      read: false
    })
    alert('Notification envoyée')
    setTitle('')
    setMessage('')
    setSelectedUser('')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Notifications</h1>
      <form onSubmit={sendNotification} className="max-w-lg space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
        <div>
          <label className="block text-white/60 text-sm mb-1">Utilisateur</label>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white" required>
            <option value="">Sélectionner</option>
            {users.map((user) => <option key={user.id} value={user.id}>{user.full_name || user.id}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Titre</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white" required />
        </div>
        <div>
          <label className="block text-white/60 text-sm mb-1">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white" required />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded-xl text-white font-semibold">Envoyer</button>
      </form>
    </div>
  )
}