import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return Response.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { data: orders, error } = await supabase
      .from('orders')
      .select('*, services(*)')
      .eq('user_id', user.id)
    
    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }
    
    return Response.json(orders || [])
  } catch (error) {
    return Response.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return Response.json({ error: 'Non authentifié' }, { status: 401 })
    }
    
    const { service_id } = await request.json()
    
    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        service_id: service_id,
        status: 'pending',
        progress: 0
      })
      .select()
      .single()
    
    if (error) {
      return Response.json({ error: error.message }, { status: 400 })
    }
    
    return Response.json(order, { status: 201 })
  } catch (error) {
    return Response.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}