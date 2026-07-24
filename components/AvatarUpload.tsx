'use client'

import { useState, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'

interface AvatarUploadProps { userId: string; currentAvatar: string | null; onAvatarUpdate: (url: string) => void }

export default function AvatarUpload({ userId, currentAvatar, onAvatarUpdate }: AvatarUploadProps) {
  const supabase = createClient()
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentAvatar)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadAvatar = async (file: File) => {
    setUploading(true); setError(null)
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${userId}-${Date.now()}.${fileExt}`
      const { error: uploadError } = await supabase.storage.from('avatars').upload(`avatars/${fileName}`, file)
      if (uploadError) throw uploadError
      const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(`avatars/${fileName}`)
      await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', userId)
      setPreview(publicUrl); onAvatarUpdate(publicUrl); setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (err: any) { setError(err.message) }
    finally { setUploading(false) }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/30 bg-white/5">
          {preview ? <img src={preview} alt="Avatar" className="w-full h-full object-cover"/> : <div className="w-full h-full flex items-center justify-center text-4xl text-white/20">?</div>}
        </div>
        {uploading && <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center"><div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"/></div>}
      </div>
      <button onClick={() => fileInputRef.current?.click()} disabled={uploading} className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 rounded-xl text-white text-sm flex items-center gap-2">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        {uploading ? 'Uploading...' : 'Upload Photo'}
      </button>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if(f) uploadAvatar(f) }} className="hidden"/>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      {success && <p className="text-green-400 text-sm flex items-center gap-2"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>Avatar updated!</p>}
    </div>
  )
}
