import type { Metadata } from 'next';
import {
  IBM_Plex_Mono,
  Inter,
  Newsreader,
} from 'next/font/google';

import { AmbientCursor } from '@/components/ambient-cursor';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hardsurance.com'),

  title: {
    default:
      'Hardsurance | Insurance intelligence for physical AI',
    template: '%s | Hardsurance',
  },

  description:
    'AI agents that map physical systems, test policy language and surface insurance gaps for hardware companies.',

  openGraph: {
    type: 'website',
    url: 'https://www.hardsurance.com',
    siteName: 'Hardsurance',
    title:
      'Hardsurance | Insurance intelligence for physical AI',
    description:
      'Insurance intelligence for robotics, drones, data centers and space systems.',
  },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hardsurance',
  url: 'https://www.hardsurance.com',
  logo: 'https://www.hardsurance.com/icon.svg',
  email: 'contact@hardsurance.com',
  description:
    'Insurance intelligence for robotics, drones, data centers and space systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization),
          }}
        />

        <AmbientCursor />

        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
