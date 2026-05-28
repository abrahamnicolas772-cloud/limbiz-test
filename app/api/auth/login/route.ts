import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status:  })
    }
    
    return NextResponse.json({ user: data.user }, { status:  })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status:  })
  }
}