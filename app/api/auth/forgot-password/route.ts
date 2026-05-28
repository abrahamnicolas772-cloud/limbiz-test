import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status:  })
    }
    
    return NextResponse.json({ message: 'Reset email sent' }, { status:  })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status:  })
  }
}