'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiFolder, FiUpload, FiDownload, FiTrash2, FiFile, FiImage, FiFileText } from 'react-icons/fi'

interface Document {
  id: number
  name: string
  file_url: string
  file_type: string
  folder: string
  created_at: string
}

export default function VaultPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedFolder, setSelectedFolder] = useState('all')
  const supabase = createClient()

  const folders = [
    { id: 'all', name: 'Tous', icon: <FiFolder /> },
    { id: 'formation', name: 'Formation', icon: <FiFile /> },
    { id: 'tax', name: 'Fiscalité', icon: <FiFileText /> },
    { id: 'brand', name: 'Marque', icon: <FiImage /> },
    { id: 'credit', name: 'Crédit', icon: <FiFile /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <FiFile /> },
  ]

  useEffect(() => {
    fetchDocuments()
  }, [selectedFolder])

  const fetchDocuments = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    let query = supabase.from('documents').select('*').eq('user_id', user.id)
    if (selectedFolder !== 'all') query = query.eq('folder', selectedFolder)
    const { data } = await query.order('created_at', { ascending: false })
    setDocuments(data || [])
    setLoading(false)
  }

  const uploadFile = async (file: File) => {
    setUploading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const filePath = `${user.id}/${Date.now()}_${file.name}`
    const { error } = await supabase.storage.from('documents').upload(filePath, file)
    if (!error) {
      const { data: urlData } = supabase.storage.from('documents').getPublicUrl(filePath)
      await supabase.from('documents').insert({
        user_id: user.id,
        name: file.name,
        file_url: urlData.publicUrl,
        file_type: file.type,
        file_size: file.size,
        folder: 'general'
      })
      fetchDocuments()
    }
    setUploading(false)
  }

  const deleteDocument = async (id: number) => {
    if (confirm('Supprimer ce document ?')) {
      await supabase.from('documents').delete().eq('id', id)
      fetchDocuments()
    }
  }

  const getFileIcon = (fileType: string) => {
    if (fileType?.includes('pdf')) return <FiFileText className="text-red-400" />
    if (fileType?.includes('image')) return <FiImage className="text-green-400" />
    return <FiFile className="text-blue-400" />
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

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Mes documents</h1>
              <p className="text-white/50 mt-1">Tous vos documents importants au même endroit</p>
            </div>
            <label className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-white text-sm font-semibold flex items-center gap-2 transition">
              <FiUpload size={16} /> {uploading ? 'Upload...' : 'Ajouter un document'}
              <input type="file" onChange={(e) => e.target.files && uploadFile(e.target.files[0])} className="hidden" disabled={uploading} />
            </label>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition ${
                  selectedFolder === folder.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {folder.icon}
                {folder.name}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-12"><div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>
          ) : documents.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl">
              <FiFolder className="text-5xl text-white/20 mx-auto mb-3" />
              <p className="text-white/40">Aucun document dans ce dossier</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        {getFileIcon(doc.file_type)}
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm truncate max-w-[150px]">{doc.name}</h3>
                        <p className="text-white/30 text-xs">{new Date(doc.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <a href={doc.file_url} target="_blank" className="p-1.5 hover:bg-white/10 rounded-lg text-blue-400 transition"><FiDownload size={16} /></a>
                      <button onClick={() => deleteDocument(doc.id)} className="p-1.5 hover:bg-white/10 rounded-lg text-red-400 transition"><FiTrash2 size={16} /></button>
                    </div>
                  </div>
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