import Link from 'next/link';
import {articles} from '@/lib/content';
export const metadata={title:'Care notes'};
export default function Insights(){return <><section className="page-hero shell"><p className="eyebrow">CARE NOTES</p><h1>A little preparation.<br/><span>A better next step.</span></h1><p>Simple ideas for looking after a new generation of machines.</p></section><section className="shell benefit-grid section">{Object.entries(articles).map(([slug,a])=><article key={slug}><p className="eyebrow">{a.category}</p><h3>{a.title}</h3><p>{a.dek}</p><Link className="text-link" href={`/insights/${slug}`}>Read the note ↗</Link></article>)}</section></>}
