'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect,useRef,useState} from 'react';
import {BrandMark} from './brand-mark';
import {FlipLabel} from './flip-label';
const links=[['/product','Coverage'],['/how-it-works','How it works'],['/platform','Platform'],['/company','Company']];
export function SiteHeader(){const path=usePathname();const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const [position,setPosition]=useState({left:0,width:0});const nav=useRef<HTMLElement>(null);
 useEffect(()=>{setOpen(false)},[path]);useEffect(()=>{const f=()=>setScrolled(scrollY>12);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
 function highlight(target:HTMLElement){if(!nav.current)return;const r=target.getBoundingClientRect(),n=nav.current.getBoundingClientRect();setPosition({left:r.left-n.left,width:r.width})}
 return <header className={`site-header ${scrolled?'scrolled':''} ${path==='/demo'?'demo-header':''}`}><div className="nav-shell"><Link className="brand" href="/" aria-label="Hardsurance home"><BrandMark/><span>Hardsurance</span></Link>{path==='/demo'?<><span className="demo-header-label">Deployment intelligence</span><Link className="back-link" href="/">Back to website ↗</Link></>:<><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button><nav id="navigation" ref={nav} className={open?'open':''} aria-label="Main navigation" onPointerLeave={()=>setPosition({left:0,width:0})} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setPosition({left:0,width:0})}}><span className="nav-glider" style={{left:position.left,width:position.width,opacity:position.width?1:0}}/>{links.map(([href,label])=><Link key={href} href={href} aria-label={label} aria-current={path===href?'page':undefined} onPointerEnter={e=>highlight(e.currentTarget)} onFocus={e=>highlight(e.currentTarget)}><FlipLabel>{label}</FlipLabel></Link>)}</nav><Link className="button nav-cta" href="/#contact" aria-label="Discuss your deployment" onClick={()=>setOpen(false)}><FlipLabel>Get a quote</FlipLabel><span aria-hidden="true">↗</span></Link></>}</div></header>
}
