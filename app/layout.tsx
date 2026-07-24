import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import SplashScreen from '@/components/SplashScreen'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LIMBIZ | Start, Structure, Fund, Grow & Protect Your Business',
  description: 'LIMBIZ helps entrepreneurs start, structure, fund, grow, and protect their businesses across all 50 U.S. states.',
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
          <SplashScreen />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
