'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}>
      <Section title="General Information Disclaimer">The information provided through golimbiz.com and related services is for informational purposes only.</Section>
      <Section title="No Legal Advice">LIMBIZ™ is not a law firm and does not provide legal advice.</Section>
      <Section title="No Tax Advice">LIMBIZ™ does not provide tax advice.</Section>
      <Section title="No Accounting Advice">LIMBIZ™ is not a certified public accounting firm.</Section>
      <Section title="No Financial or Investment Advice">Information provided should not be considered investment advice.</Section>
      <Section title="No Lending Relationship">LIMBIZ™ is not a lender or financial institution.</Section>
      <Section title="No Guarantee of Results">No approvals, outcomes, or results are guaranteed.</Section>
      <Section title="Third-Party Services Disclaimer">LIMBIZ™ is not responsible for actions or decisions of third-party providers.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
