import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harish Nandhan | Data Science & AI Engineer',
  description: 'Data Science Graduate Student at CU Boulder. Building AI systems, ML pipelines, and data-driven solutions.',
  keywords: ['Data Science', 'Machine Learning', 'AI', 'Python', 'Deep Learning', 'Portfolio'],
  authors: [{ name: 'Harish Nandhan Shanmugam' }],
  openGraph: {
    title: 'Harish Nandhan | Data Science & AI Engineer',
    description: 'Data Science Graduate Student at CU Boulder. Building AI systems, ML pipelines, and data-driven solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${sora.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'rgba(8, 15, 28, 0.88)',
                color: '#e2e8f0',
                border: '1px solid rgba(148, 163, 184, 0.22)',
                backdropFilter: 'blur(18px)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}