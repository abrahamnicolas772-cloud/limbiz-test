import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET - Récupérer les documents de l'utilisateur
export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { data: documents, error } = await supabase
      .from('documents')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(documents || [])
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// POST - Uploader un document
export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const orderId = formData.get('order_id')
    const folder = formData.get('folder') || 'general'
    
    if (!file) {
      return NextResponse.json({ error: 'Fichier requis' }, { status: 400 })
    }
    
    // Upload vers Storage
    const filePath = `${user.id}/${Date.now()}_${file.name}`
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .upload(filePath, file)
    
    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 400 })
    }
    
    // Récupérer l'URL publique
    const { data: urlData } = supabase.storage
      .from('documents')
      .getPublicUrl(filePath)
    
    // Sauvegarder en base
    const { data: document, error: dbError } = await supabase
      .from('documents')
      .insert({
        user_id: user.id,
        order_id: orderId || null,
        name: file.name,
        file_url: urlData.publicUrl,
        file_type: file.type,
        file_size: file.size,
        folder: folder,
        status: 'uploaded'
      })
      .select()
      .single()
    
    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 400 })
    }
    
    return NextResponse.json(document, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}