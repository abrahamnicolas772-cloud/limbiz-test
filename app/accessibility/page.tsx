'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/></svg>}>
      <Section title="Commitment to Accessibility">LIMBIZ™ is committed to providing a website experience that is accessible and inclusive for all users, including individuals with disabilities.</Section>
      <Section title="Accessibility Efforts">We strive to improve accessibility by implementing reasonable design, navigation, readability, and usability practices.</Section>
      <Section title="Accessibility Standards">Where practical, LIMBIZ™ seeks to align website accessibility efforts with generally recognized accessibility principles and industry best practices.</Section>
      <Section title="Assistive Technologies">We encourage compatibility with commonly used assistive technologies, including screen readers, magnification tools, voice recognition software, and keyboard navigation.</Section>
      <Section title="Ongoing Improvements">Accessibility is an ongoing process. LIMBIZ™ regularly reviews website content and functionality to identify opportunities for improvement.</Section>
      <Section title="Third-Party Content">Certain website features, embedded content, payment processors, scheduling tools, and third-party services may be provided by external organizations.</Section>
      <Section title="Feedback and Assistance">We welcome feedback regarding accessibility barriers. Users are encouraged to contact us so that we can review concerns and explore reasonable solutions.</Section>
      <Section title="Requests for Assistance">Individuals who experience difficulty accessing website content may request assistance by contacting LIMBIZ™.</Section>
      <Section title="Changes to This Statement">LIMBIZ™ reserves the right to update this Accessibility Statement at any time.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
