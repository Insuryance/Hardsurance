import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/content';

export const metadata: Metadata = { title: 'Field notes', description: 'Source-grounded writing on insurance for robotics, drones, data centers and space systems.' };

export default function InsightsPage() { return <><section className="page-hero shell"><p className="eyebrow">Field notes</p><h1>Risk research for systems that move.</h1><p>Practical analysis of operating facts, policy boundaries and evidence. Each note links to a primary public source.</p></section><section className="insight-index light"><div className="shell">{Object.entries(articles).map(([slug, article], index) => <Link href={`/insights/${slug}`} key={slug}><span>0{index+1} · {article.category}</span><div><h2>{article.title}</h2><p>{article.dek}</p></div><b>Read ↗</b></Link>)}</div></section><section className="open-note shell"><p className="eyebrow">Open research</p><h2>Useful sources should stay inspectable.</h2><p>We publish the public references behind each field note so founders, brokers and operators can challenge the reasoning and continue the research.</p></section></> }
