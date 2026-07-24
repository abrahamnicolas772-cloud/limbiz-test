'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}>
      <Section title="Introduction">LIMBIZ™ respects the privacy of every visitor, customer, and business owner who uses our website, services, consultations, educational resources, and related business solutions.</Section>
      <Section title="Information We Collect">We may collect various categories of information including full name, business name, mailing address, email address, telephone number, and business formation information.</Section>
      <Section title="Information You Provide">Information is collected directly from you when you complete website forms, schedule consultations, request business services, or purchase products and services.</Section>
      <Section title="Information Automatically Collected">When you visit golimbiz.com, certain technical information may be collected automatically, including IP address, browser type, device type, and website usage behavior.</Section>
      <Section title="Cookies and Tracking Technologies">Our website may use cookies, analytics tools, pixels, and similar technologies to improve website performance and user experience.</Section>
      <Section title="How We Use Information">Information collected may be used for legitimate business purposes including providing requested services, preparing business documents, processing customer orders, and responding to inquiries.</Section>
      <Section title="Information Sharing and Disclosure">LIMBIZ™ does not sell personal information. Information may be disclosed when necessary to government agencies, state filing offices, and service providers.</Section>
      <Section title="Data Security">We implement reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access.</Section>
      <Section title="Your Rights">Depending on applicable laws, users may have rights regarding their personal information, including requesting access, corrections, or deletion where permitted.</Section>
      <Section title="Children's Privacy">LIMBIZ™ services are intended for adults and business owners. We do not knowingly collect personal information from children under 13.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
