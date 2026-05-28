import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return NextResponse.json({ error: 'Non authentifi√' }, { status:  })
    }
    
    const { admin_reply, status } = await request.json()
    
    const { data: ticket, error } = await supabase
      .from('tickets')
      .update({ 
        admin_reply, 
        status,
        updated_at: new Date()
      })
      .eq('id', params.id)
      .select()
      .single()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status:  })
    }
    
    return NextResponse.json(ticket)
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status:  })
  }
}