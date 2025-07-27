// app/layout.tsx or app/layout.js
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// ✅ Moved viewport out of metadata
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'IELTS Course by Munzereen Shahid - 10 Minute School',
  description: 'Get complete IELTS preparation with 50+ video lectures, mock tests, and expert guidance. Achieve your target band score with the best IELTS instructor in Bangladesh.',
  keywords: 'IELTS, IELTS preparation, IELTS course, Munzereen Shahid, band score, 10 minute school',
  authors: [{ name: '10 Minute School' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://10minuteschool.com/product/ielts-course/',
    siteName: '10 Minute School',
    title: 'Best IELTS Preparation Course by Munzereen Shahid [2025]',
    description: 'Get complete IELTS preparation with 50+ video lectures, mock tests, and expert guidance.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@10minuteschool',
    creator: '@10minuteschool',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
