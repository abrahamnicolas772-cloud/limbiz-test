'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { FiDownload, FiTrash2 } from 'react-icons/fi'

export default function AdminDocuments() {
  const [documents, setDocuments] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchDocs = async () => {
      const { data } = await supabase.from('documents').select('*').order('created_at', { ascending: false })
      setDocuments(data || [])
    }
    fetchDocs()
  }, [])

  const deleteDoc = async (id: number) => {
    await supabase.from('documents').delete().eq('id', id)
    setDocuments(documents.filter(d => d.id !== id))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Documents</h1>
      <div className="space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white/5 rounded-xl p-4 border border-white/10 flex justify-between items-center">
            <div>
              <p className="text-white font-medium">{doc.name}</p>
              <p className="text-white/40 text-xs">{new Date(doc.created_at).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <a href={doc.file_url} target="_blank" className="p-2 hover:bg-white/10 rounded-lg text-blue-400"><FiDownload /></a>
              <button onClick={() => deleteDoc(doc.id)} className="p-2 hover:bg-white/10 rounded-lg text-red-400"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}