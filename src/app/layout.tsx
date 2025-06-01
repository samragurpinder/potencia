import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Potencia Academy',
  description: 'Premier coaching institute for IIT-JEE, NEET, and Foundation courses',
  keywords: 'IIT JEE coaching, NEET preparation, Foundation courses, Bathinda coaching, Moga coaching',
  authors: [{ name: 'Potencia Academy' }],
  metadataBase: new URL('https://potencia.in'),
  openGraph: {
    title: 'Potencia Academy',
    description: 'Premier coaching institute for IIT-JEE, NEET, and Foundation courses',
    url: 'https://potencia.in',
    siteName: 'Potencia Academy',
    locale: 'en_US',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} bg-black`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col font-inter antialiased">
        <div className="flex-grow relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
} 