'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {BrandMark} from '@/components/brand-mark';
export function SiteFooter(){const path=usePathname();if(path==='/demo')return <footer className="studio-site-footer"><span>Interactive demo · Sample programs and service requests.</span><Link href="/care">About Hardsurance Care</Link></footer>;
 return <footer className="site-footer crisp-footer"><div className="shell"><div className="crisp-footer-top"><Link className="brand" href="/" aria-label="Hardsurance home"><BrandMark/>Hardsurance</Link><nav aria-label="Footer"><Link href="/product">Coverage</Link><Link href="/care">Hardware care</Link><Link href="/company">About</Link><Link href="/knowledge">FAQ</Link><Link href="/insights">Notes</Link></nav><a href="mailto:contact@hardsurance.com">contact@hardsurance.com</a></div><p>Hardsurance is in stealth. AI-powered insurance assessment for robotics and physical AI. Cover is subject to the agreed policy terms.</p><small>© {new Date().getFullYear()} Hardsurance</small></div></footer>}
