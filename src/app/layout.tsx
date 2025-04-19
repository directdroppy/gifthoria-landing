import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';

// Font tanımlamaları
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '900'],
});

// Meta verileri
export const metadata: Metadata = {
  title: 'Gifthoria - Sevdiklerinize Özel Hediyeler',
  description: 'Gifthoria ile sevdiklerinize özel mektuplar, fotoğraflar ve hediyeler gönderin. En hızlı, kolay ve güvenilir yöntem.',
  keywords: 'cezaevi, hediye, mektup, fotoğraf, kartpostal, takvim, özel hediye',
  authors: [{ name: 'Gifthoria' }],
  creator: 'Gifthoria',
  publisher: 'Gifthoria',
  robots: 'index, follow',
};

// Viewport ayarları
export const viewport: Viewport = {
  themeColor: '#FF0000',
};

// Root layout bileşeni
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${inter.variable} ${playfair.variable}`}>
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
