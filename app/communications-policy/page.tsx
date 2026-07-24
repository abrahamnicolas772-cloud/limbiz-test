'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function CommunicationsPolicyPage() {
  return (
    <LegalPage title="SMS & Email Communications Policy" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}>
      <Section title="Purpose">This SMS & Email Communications Policy explains how LIMBIZ™ communicates with customers, leads, website visitors, and clients through text messages and email communications.</Section>
      <Section title="Consent to Communications">By submitting a form, scheduling a consultation, requesting information, purchasing services, or otherwise providing contact information, you consent to receive communications from LIMBIZ™ related to your inquiry, account, services, or transactions.</Section>
      <Section title="Types of Communications">Communications may include appointment reminders, service updates, order confirmations, account notifications, educational materials, customer support responses, promotional offers, newsletters, and other business-related messages.</Section>
      <Section title="SMS Communications">Message frequency may vary. Standard message and data rates may apply according to your mobile carrier's terms and conditions.</Section>
      <Section title="Opt-Out Rights">Recipients may opt out of marketing emails by using the unsubscribe link. SMS recipients may opt out by replying STOP where supported.</Section>
      <Section title="Data Privacy">Contact information collected for communications is handled in accordance with the LIMBIZ™ Privacy Policy. Personal information is not sold to third parties.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
