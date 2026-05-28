import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import Chatbot from '@/components/Chatbot'   //  Import du chatbot

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limbiz | Premium Business Consultancy',
  description: 'Launch, structure, and scale your business with expert guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Chatbot />   {/  Ajout du chatbot (visible partout) /}
        </AuthProvider>
      </body>
    </html>
  )
}