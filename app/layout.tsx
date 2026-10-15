import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from '@/components/scroll-to-top'
import { AuthProvider } from '@/contexts/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AS Infra Concrete Jaipur - Premium Ready Mix Concrete Solutions',
  description:
    'AS Infra Concrete Jaipur - Your trusted partner for high-quality concrete solutions across Rajasthan. We deliver excellence in every mix.',
  generator: 'Build By Devendra Prajapat',
  icons: {
    icon: '/heritage-logo.png',
  },
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
          <ScrollToTop />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
