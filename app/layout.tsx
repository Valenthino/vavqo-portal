import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VAVQO - Innovative Solutions with a Human Touch',
  description: 'VAVQO develops cutting-edge solutions for organizations, businesses, and governments with a human-centered approach.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-[#edeff3] text-[#1f1f1f]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

