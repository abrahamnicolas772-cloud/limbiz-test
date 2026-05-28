import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return Response.json({ error: 'Non authentifi√' }, { status:  })
    }
    
    const { data: orders, error } = await supabase
      .from('orders')
      .select(', services()')
      .eq('user_id', user.id)
    
    if (error) {
      return Response.json({ error: error.message }, { status:  })
    }
    
    return Response.json(orders || [])
  } catch (error) {
    return Response.json({ error: 'Erreur serveur' }, { status:  })
  }
}

export async function POST(request: Request) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return Response.json({ error: 'Non authentifi√' }, { status:  })
    }
    
    const { service_id } = await request.json()
    
    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        service_id: service_id,
        status: 'pending',
        progress: 
      })
      .select()
      .single()
    
    if (error) {
      return Response.json({ error: error.message }, { status:  })
    }
    
    return Response.json(order, { status:  })
  } catch (error) {
    return Response.json({ error: 'Erreur serveur' }, { status:  })
  }
}