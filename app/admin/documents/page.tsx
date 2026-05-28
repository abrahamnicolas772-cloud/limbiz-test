'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { FiDownload, FiTrash } from 'react-icons/fi'

export default function AdminDocuments() {
  const [documents, setDocuments] = useState<any[]>([])
  const supabase = createClient()

  useEffect(() => {
    const fetchDocs = async () => {
      const { data } = await supabase.from('documents').select('').order('created_at', { ascending: false })
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
      <h className="text-xl font-bold text-white mb-">Documents</h>
      <div className="space-y-">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white/ rounded-xl p- border border-white/ flex justify-between items-center">
            <div>
              <p className="text-white font-medium">{doc.name}</p>
              <p className="text-white/ text-xs">{new Date(doc.created_at).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-">
              <a href={doc.file_url} target="_blank" className="p- hover:bg-white/ rounded-lg text-blue-"><FiDownload /></a>
              <button onClick={() => deleteDoc(doc.id)} className="p- hover:bg-white/ rounded-lg text-red-"><FiTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}