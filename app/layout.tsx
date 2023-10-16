import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jotion',
  description: 'An awesome Notion clone made with NextJS and TailwindCSS. 🚀',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        href: '/logo.svg',
        url: '/logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        href: '/logo-dark.svg',
        url: '/logo-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
