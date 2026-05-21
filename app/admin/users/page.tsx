'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from('profiles').select('*').order('created_at', { ascending: false })
      setUsers(data || [])
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Utilisateurs</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-white/10">
            <tr className="text-white/50 text-sm">
              <th className="pb-2">ID</th>
              <th className="pb-2">Nom</th>
              <th className="pb-2">Email</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-white/5">
                <td className="py-3 text-white/60 text-xs">{user.id.slice(0, 8)}...</td>
                <td className="py-3 text-white">{user.full_name || '-'}</td>
                <td className="py-3 text-white/60">{user.id}</td>
                <td className="py-3 text-white/60">{new Date(user.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}