import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/components/language-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Chef Meaza Mesene | International Culinary Expert',
  description: 'Professional chef specializing in international cuisine with experience in luxury hotels and resorts worldwide. Passionate about creating exceptional culinary experiences.',
  keywords: 'chef, culinary expert, international cuisine, luxury hotels, resorts, professional cooking',
  authors: [{ name: 'Chef Meaza Mesene' }],
  openGraph: {
    title: 'Chef Meaza Mesene | International Culinary Expert',
    description: 'Professional chef specializing in international cuisine with experience in luxury hotels and resorts worldwide.',
    url: 'https://chef-elena-martinez.vercel.app',
    siteName: 'Chef Meaza Mesene Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chef Meaza Mesene - Professional Culinary Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chef Meaza Mesene | International Culinary Expert',
    description: 'Professional chef specializing in international cuisine with experience in luxury hotels and resorts worldwide.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}