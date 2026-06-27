import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      )
    }
    
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      console.error('Erreur connexion:', error.message)
      return NextResponse.json(
        { error: error.message === 'Invalid login credentials' 
          ? 'Email ou mot de passe incorrect' 
          : error.message 
        },
        { status: 401 }
      )
    }
    
    return NextResponse.json(
      { user: data.user, session: data.session },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Erreur serveur:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}