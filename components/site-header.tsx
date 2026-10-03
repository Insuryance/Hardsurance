'use client';
import {BrandMark} from '@/components/brand-mark';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
export function SiteHeader(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);const path=usePathname();
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>16);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
 return <header className={`site-header ${scrolled?'header-scrolled':''}`}><div className="nav-shell"><Link href="/" className="brand" aria-label="Hardsurance home"><BrandMark/>Hardsurance</Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation">{open?'Close':'Menu'}</button><nav id="navigation" className={open?'is-open':''} aria-label="Main navigation">{[['/product','Hardsurance Care'],['/hardware','Hardware'],['/startups','For startups'],['/enterprise','For enterprise']].map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-demo" href="/demo" onClick={()=>setOpen(false)}>Care Studio</Link></nav></div></header>
}
