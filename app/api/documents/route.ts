import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ documents: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({ message: 'Document created', data })
}
