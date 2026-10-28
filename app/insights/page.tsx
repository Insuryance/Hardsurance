import Link from 'next/link';
import {articles} from '@/lib/content';
export const metadata={title:'Care notes'};
export default function Insights(){return <><section className="page-hero shell"><p className="eyebrow">CARE NOTES</p><h1>Notes on looking after equipment.</h1><p>Practical records to keep before equipment needs a repair.</p></section><section className="shell benefit-grid section">{Object.entries(articles).map(([slug,a])=><article key={slug}><p className="eyebrow">{a.category}</p><h3>{a.title}</h3><p>{a.dek}</p><Link className="text-link" href={`/insights/${slug}`}>Read the note ↗</Link></article>)}</section></>}
