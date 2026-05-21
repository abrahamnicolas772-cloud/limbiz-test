import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()
    
    const response = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(
          `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET_KEY}`
        ).toString('base64')}`
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: amount.toString()
          }
        }]
      })
    })
    
    const data = await response.json()
    return NextResponse.json({ id: data.id })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur PayPal' }, { status: 500 })
  }
}