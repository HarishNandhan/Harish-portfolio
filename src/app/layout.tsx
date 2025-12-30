import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={`${inter.className} antialiased`}>
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
                background: '#1a1a2e',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}