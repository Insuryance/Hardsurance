import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';
import './care-theme.css';
import './formal-theme.css';
import './premium-theme.css';
import './deployment-theme.css';
import './editorial-theme.css';
import './crisp-theme.css';
export const metadata: Metadata = {
 metadataBase: new URL('https://www.hardsurance.com'),
 title: {default:'Hardsurance | Insurance for robots at work',template:'%s | Hardsurance'},
 description:'Deployment insurance for robotics and physical AI, informed by site and fleet assessment. AI-powered assessment, tailored quote requests and hardware care.',
 openGraph:{type:'website',siteName:'Hardsurance',title:'Insurance for robots at work.',description:'Deployment insurance, safety assessment and hardware care for robotics and physical AI.'}
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body className="editorial-site"><a className="skip" href="#main">Skip to content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>}
