'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await supabase.from('profiles').select('').order('created_at', { ascending: false })
      setUsers(data || [])
    }
    fetchUsers()
  }, [])

  return (
    <div>
      <h className="text-xl font-bold text-white mb-">Utilisateurs</h>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-white/">
            <tr className="text-white/ text-sm">
              <th className="pb-">ID</th>
              <th className="pb-">Nom</th>
              <th className="pb-">Email</th>
              <th className="pb-">Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-white/">
                <td className="py- text-white/ text-xs">{user.id.slice(, )}...</td>
                <td className="py- text-white">{user.full_name || '-'}</td>
                <td className="py- text-white/">{user.id}</td>
                <td className="py- text-white/">{new Date(user.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}