import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// GET - Récupérer les tickets
export async function GET(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const url = new URL(request.url)
    const isAdmin = url.searchParams.get('admin') === 'true'
    
    let query = supabase.from('tickets').select('*, profiles(full_name)')
    
    if (!isAdmin) {
      query = query.eq('user_id', user.id)
    }
    
    const { data: tickets, error } = await query.order('created_at', { ascending: false })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(tickets || [])
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// POST - Créer un ticket
export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { subject, message, category } = await request.json()
    
    const { data: ticket, error } = await supabase
      .from('tickets')
      .insert({
        user_id: user.id,
        subject,
        message,
        category,
        status: 'open'
      })
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(ticket, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}