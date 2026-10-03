 'use client';
import {BrandMark} from '@/components/brand-mark';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
export function SiteHeader(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><div className="nav-shell"><Link href="/" className="brand" aria-label="Hardsurance home"><BrandMark/>hardsurance</Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open?'Close':'Menu'}</button><nav id="navigation" className={open?'is-open':''} aria-label="Main navigation"><Link aria-current={path==='/product'?'page':undefined} href="/product" onClick={()=>setOpen(false)}>The care plan</Link><Link href="/#machines" onClick={()=>setOpen(false)}>Your hardware</Link><Link aria-current={path==='/company'?'page':undefined} href="/company" onClick={()=>setOpen(false)}>Our story</Link><Link className="nav-demo" href="/demo" onClick={()=>setOpen(false)}>Try the demo <span>↗</span></Link></nav></div></header>}
