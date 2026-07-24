'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function ConsultationAgreementPage() {
  return (
    <LegalPage title="Consultation Agreement" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>}>
      <Section title="Purpose of Consultation">The purpose of a consultation is to provide general business information, guidance, education, and discussion regarding topics requested by the client.</Section>
      <Section title="Scope of Services">Consultations may include discussions regarding LLC formation, business credit, funding opportunities, tax-related administrative support, trademark assistance, and business compliance.</Section>
      <Section title="No Professional Relationship">Participation in a consultation does not create an attorney-client relationship, accountant-client relationship, or any other licensed professional relationship.</Section>
      <Section title="Client Responsibilities">Clients agree to provide accurate information, cooperate during the consultation process, and supply any requested documentation.</Section>
      <Section title="Consultation Fees">Consultation fees must be paid according to the terms presented at the time of booking.</Section>
      <Section title="No Guarantee of Results">LIMBIZ™ does not guarantee funding approvals, credit approvals, trademark registrations, licensing approvals, or any specific outcome.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
