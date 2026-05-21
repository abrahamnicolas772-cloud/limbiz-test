import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// GET - Récupérer les notifications de l'utilisateur
export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { data: notifications, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(50)
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(notifications || [])
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// POST - Créer une notification (admin)
export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { user_id, title, message, type, sendEmail } = await request.json()
    
    // Sauvegarder en base
    const { data: notification, error } = await supabase
      .from('notifications')
      .insert({ user_id, title, message, type })
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    // Envoyer un email si demandé
    if (sendEmail) {
      const { data: userData } = await supabase
        .from('profiles')
        .select('email')
        .eq('id', user_id)
        .single()
      
      if (userData?.email) {
        await resend.emails.send({
          from: 'Limbiz <notifications@limbiz.com>',
          to: userData.email,
          subject: title,
          html: `<p>${message}</p><br/><a href="${process.env.NEXT_PUBLIC_APP_URL}">Voir sur Limbiz</a>`
        })
      }
    }
    
    return NextResponse.json(notification, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// PUT - Marquer comme lu
export async function PUT(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { notification_id } = await request.json()
    
    const { data: notification, error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('id', notification_id)
      .eq('user_id', user.id)
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(notification)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}