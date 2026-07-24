'use client'
import { LegalPage, Section, ContactInfo } from '@/components/legal/LegalPage'

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" icon={<svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z"/></svg>}>
      <Section title="Introduction">This Cookie Policy explains how LIMBIZ™ uses cookies, analytics tools, tracking technologies, and similar technologies on golimbiz.com.</Section>
      <Section title="What Are Cookies?">Cookies are small text files placed on a device when visiting a website. Cookies help websites remember user preferences, improve performance, enhance security, and provide a more personalized browsing experience.</Section>
      <Section title="Types of Cookies We May Use">LIMBIZ™ may use essential cookies, performance cookies, analytics cookies, functionality cookies, and security-related cookies to improve website operation and user experience.</Section>
      <Section title="Managing Cookie Preferences">Most web browsers allow users to manage, disable, restrict, or delete cookies through browser settings.</Section>
      <Section title="User Consent">Where required by law, LIMBIZ™ may request user consent before placing certain categories of cookies.</Section>
      <ContactInfo />
    </LegalPage>
  )
}
