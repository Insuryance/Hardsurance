'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BrandMark } from './brand-mark';

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  return <header className="site-header"><Link href="/" className="wordmark"><BrandMark className="brand-mark" />Hardsurance</Link><nav className={open?'open':''}><Link href="/product" onClick={()=>setOpen(false)}>Product</Link><Link href="/demo" onClick={()=>setOpen(false)}>Demo</Link><Link href="/use-cases/robotics" onClick={()=>setOpen(false)}>Use cases</Link><Link href="/insights" onClick={()=>setOpen(false)}>Insights</Link><Link href="/company" onClick={()=>setOpen(false)}>Company</Link></nav><Link href="/#contact" className="header-cta">Book a review <span>↗</span></Link><button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
}
