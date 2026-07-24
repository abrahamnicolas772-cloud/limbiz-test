'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}>
      <Section title="Purpose">This Refund Policy explains the circumstances under which refunds may be issued for services purchased from LIMBIZ™.</Section>
      <Section title="General Refund Eligibility">Refund requests may be considered only if the purchased service has not yet started.</Section>
      <Section title="Non-Refundable Government Fees">Government filing fees and similar charges are non-refundable.</Section>
      <Section title="Non-Refundable Third-Party Costs">Third-party vendor costs are generally non-refundable.</Section>
      <Section title="Consultation Services">Consultation fees are earned upon delivery.</Section>
      <Section title="Client Cancellation Requests">Cancellation requests must be submitted in writing.</Section>
      <Section title="Chargebacks and Payment Disputes">Clients should contact LIMBIZ™ before initiating disputes.</Section>
      <Section title="Processing Approved Refunds">Processing times vary by payment provider.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
