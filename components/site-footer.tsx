import Link from 'next/link';
import { BrandMark } from './brand-mark';

export function SiteFooter(){return <footer className="site-footer"><div><Link href="/" className="wordmark"><BrandMark className="brand-mark" />Hardsurance</Link><p>The insurance copilot that connects policy language to how physical AI actually operates.</p></div><div><b>Explore</b><Link href="/product">Product</Link><Link href="/demo">Interactive demo</Link><Link href="/insights">Field notes</Link></div><div><b>Company</b><Link href="/company">About</Link><a href="mailto:hello@hardsurance.com">hello@hardsurance.com</a><span>San Francisco, California</span></div><div className="copyright">© 2026 Hardsurance</div></footer>}
