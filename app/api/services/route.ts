import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = createClient()
    const { data: services, error } = await supabase
      .from('services')
      .select('')
      .eq('is_active', true)
    
    if (error) {
      return Response.json({ error: error.message }, { status:  })
    }
    
    return Response.json(services || [])
  } catch (error) {
    return Response.json({ error: 'Erreur serveur' }, { status:  })
  }
}