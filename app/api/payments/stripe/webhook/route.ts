import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!
  
  let event: Stripe.Event
  
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 })
  }
  
  const supabase = createClient()
  
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const order_id = parseInt(session.metadata?.order_id || '0')
    
    // Sauvegarder le paiement
    await supabase.from('payments').insert({
      user_id: session.client_reference_id,
      order_id: order_id,
      amount: session.amount_total! / 100,
      provider: 'stripe',
      provider_payment_id: session.id,
      status: 'completed'
    })
    
    // Mettre à jour la commande
    if (order_id) {
      await supabase
        .from('orders')
        .update({ status: 'paid' })
        .eq('id', order_id)
    }
  }
  
  return NextResponse.json({ received: true })
}