import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { amount, currency = 'USD' } = await request.json()

    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    const mode = process.env.PAYPAL_MODE || 'sandbox'
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

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

    const orderResponse = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: amount.toString(),
            },
          },
        ],
        application_context: {
          return_url: `${siteUrl}/payment/success`,
          cancel_url: `${siteUrl}/payment/cancel`,
        },
      }),
    })

    const orderData = await orderResponse.json()

    return NextResponse.json({
      orderId: orderData.id,
      approvalUrl: orderData.links?.find((link: any) => link.rel === 'approve')?.href,
    })
  } catch (error) {
    console.error('PayPal error:', error)
    return NextResponse.json({ error: 'PayPal request failed' }, { status: 500 })
  }
}
