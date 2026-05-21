import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialisation de Stripe avec la clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
})

export async function POST(request: Request) {
  try {
    const { planId, name, amount, interval } = await request.json()

    // Vérifier que la clé secrète est présente
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Clé secrète Stripe manquante. Configurez STRIPE_SECRET_KEY.' },
        { status: 500 }
      )
    }

    // Création de la session Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: `${name} - LIMBIZ` },
            unit_amount: Math.round(amount * 100),
            recurring: interval ? { interval } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: interval ? 'subscription' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: { planId, interval },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur lors de la création du paiement' },
      { status: 500 }
    )
  }
}