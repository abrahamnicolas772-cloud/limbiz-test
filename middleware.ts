import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  let response = NextResponse.next()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: any) {
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )
  
  const { data: { session } } = await supabase.auth.getSession()
  
  // Routes prot√g√es
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  const isAuthRoute = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/register') ||
                      req.nextUrl.pathname.startsWith('/forgot-password')
  
  if (isAdminRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  
  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }
  
  return response
}

export const config = {
  matcher: ['/admin/:path', '/login', '/register', '/forgot-password']
}