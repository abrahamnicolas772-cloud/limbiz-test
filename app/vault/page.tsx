'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FiFolder, FiUpload, FiDownload, FiTrash, FiFile, FiImage, FiFileText } from 'react-icons/fi'

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
    { id: 'tax', name: 'Fiscalit√', icon: <FiFileText /> },
    { id: 'brand', name: 'Marque', icon: <FiImage /> },
    { id: 'credit', name: 'Cr√dit', icon: <FiFile /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <FiFile /> },
  ]

  useEffect(() => {
    fetchDocuments()
  }, [selectedFolder])

  const fetchDocuments = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    let query = supabase.from('documents').select('').eq('user_id', user.id)
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
    if (fileType?.includes('pdf')) return <FiFileText className="text-red-" />
    if (fileType?.includes('image')) return <FiImage className="text-green-" />
    return <FiFile className="text-blue-" />
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
              <h className="text-xl font-bold text-white">Mes documents</h>
              <p className="text-white/ mt-">Tous vos documents importants au m√™me endroit</p>
            </div>
            <label className="cursor-pointer px- py- bg-blue- hover:bg-blue- rounded-xl text-white text-sm font-semibold flex items-center gap- transition">
              <FiUpload size={} /> {uploading ? 'Upload...' : 'Ajouter un document'}
              <input type="file" onChange={(e) => e.target.files && uploadFile(e.target.files[])} className="hidden" disabled={uploading} />
            </label>
          </div>

          <div className="flex flex-wrap gap- mb-">
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`flex items-center gap- px- py- rounded-xl text-sm transition ${
                  selectedFolder === folder.id
                    ? 'bg-blue- text-white'
                    : 'bg-white/ text-white/ hover:bg-white/'
                }`}
              >
                {folder.icon}
                {folder.name}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-"><div className="w- h- border- border-blue- border-t-transparent rounded-full animate-spin" /></div>
          ) : documents.length ===  ? (
            <div className="text-center py- bg-white/ rounded-xl">
              <FiFolder className="text-xl text-white/ mx-auto mb-" />
              <p className="text-white/">Aucun document dans ce dossier</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols- lg:grid-cols- gap-">
              {documents.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: , y:  }}
                  animate={{ opacity: , y:  }}
                  transition={{ delay: idx  . }}
                  className="bg-white/ rounded-xl p- border border-white/ hover:border-blue-/ transition group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-">
                      <div className="w- h- rounded-lg bg-white/ flex items-center justify-center">
                        {getFileIcon(doc.file_type)}
                      </div>
                      <div>
                        <h className="text-white font-medium text-sm truncate max-w-[px]">{doc.name}</h>
                        <p className="text-white/ text-xs">{new Date(doc.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex gap- opacity- group-hover:opacity- transition">
                      <a href={doc.file_url} target="_blank" className="p-. hover:bg-white/ rounded-lg text-blue- transition"><FiDownload size={} /></a>
                      <button onClick={() => deleteDocument(doc.id)} className="p-. hover:bg-white/ rounded-lg text-red- transition"><FiTrash size={} /></button>
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