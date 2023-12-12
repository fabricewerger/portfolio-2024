import './globals.css'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import ScrollContainer from '../../src/templates/hooks/ScrollContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'May portfolio',
  description: 'Online portfolio designer may de haas',
}

export default function RootLayout({ children, params }) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <ScrollContainer>
        <body className={inter.className}>{children}</body>
      </ScrollContainer>
    </html>
  )
}
