import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json()

    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const mode = process.env.PAYPAL_MODE || 'sandbox'

    if (!clientId || !clientSecret) {
      return NextResponse.json({ error: 'PayPal credentials missing' }, { status: 500 })
    }

    const baseUrl = mode === 'sandbox' 
      ? 'https://api-m.sandbox.paypal.com' 
      : 'https://api-m.paypal.com'

    const authResponse = await fetch(`${baseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })

    const authData = await authResponse.json()
    const accessToken = authData.access_token

    if (!accessToken) {
      return NextResponse.json({ error: 'Failed to get PayPal access token' }, { status: 401 })
    }

    const captureResponse = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    const captureData = await captureResponse.json()

    return NextResponse.json({
      status: captureData.status,
      transactionId: captureData.id,
      amount: captureData.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value,
    })
  } catch (error) {
    console.error('PayPal capture error:', error)
    return NextResponse.json({ error: 'PayPal capture failed' }, { status: 500 })
  }
}
