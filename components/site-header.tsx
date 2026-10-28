'use client';
import {BrandMark} from '@/components/brand-mark';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
export function SiteHeader(){const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const path=usePathname();
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>16);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>setOpen(false),[path]);
 if(path==='/demo')return <header className="studio-site-header"><Link className="brand" href="/" aria-label="Hardsurance home"><BrandMark/>Hardsurance</Link><span>Care Studio</span><Link className="studio-exit" href="/">Back to website</Link></header>;
 return <header className={`site-header ${scrolled?'header-scrolled':''}`}><div className="nav-shell"><Link href="/" className="brand" aria-label="Hardsurance home"><BrandMark/>Hardsurance</Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open?'Close':'Menu'}</button><nav id="navigation" className={open?'is-open':''} aria-label="Main navigation"><Link href="/product" aria-current={path==='/product'?'page':undefined}>Coverage</Link><details className="company-menu"><summary>For companies</summary><div><Link href="/startups">Robotics companies</Link><Link href="/enterprise">Fleet operators</Link><Link href="/company">About Hardsurance</Link></div></details><Link href="/demo">Care Studio</Link><Link className="nav-demo" href="/#contact" onClick={()=>setOpen(false)}>Talk to us</Link></nav></div></header>
}
