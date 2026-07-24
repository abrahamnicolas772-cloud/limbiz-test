'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Website Terms of Use" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}>
      <Section title="Acceptance of Terms">By accessing or using golimbiz.com, you agree to comply with these Website Terms of Use.</Section>
      <Section title="Website Purpose">The website is intended to provide information regarding LIMBIZ™ services, educational resources, consultations, business solutions, and related offerings.</Section>
      <Section title="Permitted Use">Users may access the website for lawful personal or business purposes. Website content may not be copied, reproduced, distributed, or exploited without authorization.</Section>
      <Section title="Prohibited Activities">Users may not engage in fraud, hacking, unauthorized access attempts, malicious activity, or violations of applicable laws.</Section>
      <Section title="Intellectual Property Rights">All website content, trademarks, branding, graphics, text, logos, and educational materials remain the property of Limitless Biz Hub LLC.</Section>
      <Section title="Disclaimer of Warranties">The website is provided on an "as-is" and "as-available" basis.</Section>
      <Section title="Limitation of Liability">To the fullest extent permitted by law, LIMBIZ™ shall not be liable for damages arising from use of the website.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
