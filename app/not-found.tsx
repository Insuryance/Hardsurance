import Link from 'next/link';

export default function NotFound() { return <section className="not-found shell"><p className="eyebrow">404</p><h1>This page is outside the map.</h1><p>The route may have moved or never existed.</p><Link className="button primary" href="/">Return home</Link></section>; }
