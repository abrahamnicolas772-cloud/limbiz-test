import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ orders: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  return NextResponse.json({ message: 'Order created', data })
}
