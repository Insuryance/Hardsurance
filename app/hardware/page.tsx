import Link from 'next/link';
import type {Metadata} from 'next';
import {CareVideo} from '@/components/care-video';
import {useCases} from '@/lib/content';
export const metadata:Metadata = {title:'Hardware categories',description:'Explore care requirements for robotics, autonomous hardware, field devices, AI infrastructure and advanced systems.'};
const categories = ['robotics', 'autonomous', 'drones', 'data-centers', 'ai-chips', 'space'] as const;
export default function Hardware() {return <>
  <section className="page-hero shell hardware-hero"><p className="eyebrow">THE PHYSICAL WORLD / HARDWARE CATEGORIES</p><h1>Intelligent systems.<br/><span>Equipment-specific care.</span></h1><p>From autonomous platforms to the infrastructure behind AI, each deployment has distinct protection and service requirements. Explore the categories informing Hardsurance Care.</p><div className="actions"><Link className="button primary" href="/#contact">Discuss your equipment ↗</Link><Link className="button secondary" href="/demo">Explore the demos →</Link></div><nav className="hardware-index" aria-label="Hardware categories">{categories.map(slug=><a key={slug} href={`#${slug}`}>{useCases[slug].label}</a>)}</nav></section>
  <section className="shell hardware-directory">{categories.map((slug,i)=>{const item=useCases[slug];return <article id={slug} className="hardware-detail" key={slug}><CareVideo src={item.film} label={item.label}/><div><p className="eyebrow">0{i+1} / HARDWARE CATEGORY</p><h2>{item.label}</h2><p>{item.description}</p><ul>{item.risks.map(r=><li key={r}>{r}</li>)}</ul><Link className="text-link" href={`/use-cases/${slug}`}>View care requirements ↗</Link></div></article>})}</section>
  <section className="page-cta"><h2>Define the care your deployment needs.</h2><p>Eligibility, benefits and service availability are subject to equipment and program review.</p><Link className="button primary" href="/#contact">Request early access ↗</Link></section>
</>}
