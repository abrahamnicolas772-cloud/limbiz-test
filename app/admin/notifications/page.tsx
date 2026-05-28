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
    alert('Notification envoy√e')
    setTitle('')
    setMessage('')
    setSelectedUser('')
  }

  return (
    <div>
      <h className="text-xl font-bold text-white mb-">Notifications</h>
      <form onSubmit={sendNotification} className="max-w-lg space-y- bg-white/ p- rounded-xl border border-white/">
        <div>
          <label className="block text-white/ text-sm mb-">Utilisateur</label>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required>
            <option value="">S√lectionner</option>
            {users.map((user) => <option key={user.id} value={user.id}>{user.full_name || user.id}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-white/ text-sm mb-">Titre</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required />
        </div>
        <div>
          <label className="block text-white/ text-sm mb-">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={} className="w-full px- py- bg-white/ border border-white/ rounded-xl text-white" required />
        </div>
        <button type="submit" className="px- py- bg-blue- rounded-xl text-white font-semibold">Envoyer</button>
      </form>
    </div>
  )
}