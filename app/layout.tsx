import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aayush & Anjali — Wedding Invitation',
  description: 'Join us as we celebrate our wedding on January 17-18, 2027 in Dharamshala, Himachal Pradesh.',
  openGraph: {
    title: 'Aayush & Anjali — Digital Invitation',
    description: '17—18 January 2027 • Dharamshala, Himachal Pradesh',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#121110',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#121110] text-[#FDFBF7] antialiased selection:bg-[#C5A059]/30 selection:text-[#C5A059]">
        {children}
      </body>
    </html>
  );
}