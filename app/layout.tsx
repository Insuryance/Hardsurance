import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
import './care-theme.css';
import './agent-observatory.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://www.hardsurance.com'),
 title: {default:'Hardsurance | Care for the machines that move us',template:'%s | Hardsurance'},
 description:'A new kind of protection and care for robotics, hardware and physical AI. Join Hardsurance early access.',
 openGraph:{type:'website',siteName:'Hardsurance',title:'Care for the machines that move us.',description:'Protection and care for robotics, hardware and physical AI.'}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>}
