import { Urbanist } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
// import HomePage from './(routes)/page'
import Footer from '@/components/footer'
import './globals.css'
import BackToTop from '@/components/ui/BacktoTop'
import CursorTrail from '@/components/CursorTrail'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'IndieKart',
  description: 'IndieKart - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <CursorTrail />
        <ModalProvider />
        <Navbar />

        {children}
        <SpeedInsights /> 
        <BackToTop />
        <Footer />
      </body>
    </html>
    </>
  )
}
