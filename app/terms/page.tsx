'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>}>
      <Section title="Acceptance of Terms">By accessing golimbiz.com, purchasing services, scheduling consultations, or otherwise interacting with LIMBIZ™, you agree to be bound by these Terms & Conditions.</Section>
      <Section title="Services Provided">LIMBIZ™ may provide business consulting, LLC formation assistance, business credit services, funding assistance, tax filing assistance, trademark support, educational resources, and related administrative services.</Section>
      <Section title="Client Responsibilities">Clients are responsible for providing accurate information, reviewing documents before submission, maintaining records, and responding promptly to requests for information.</Section>
      <Section title="Payment Terms">All fees must be paid according to agreed terms. Certain services may require payment before work begins.</Section>
      <Section title="No Guarantee of Results">LIMBIZ™ does not guarantee business approvals, credit approvals, funding approvals, trademark registrations, tax outcomes, or specific business results.</Section>
      <Section title="Intellectual Property">All website content, branding, materials, graphics, and educational resources remain the property of Limitless Biz Hub LLC.</Section>
      <Section title="Limitation of Liability">To the fullest extent permitted by law, LIMBIZ™ shall not be liable for indirect, incidental, special, or consequential damages.</Section>
      <Section title="Governing Law">These Terms & Conditions shall be governed by the laws of the State of Florida.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
