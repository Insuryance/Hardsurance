import Link from 'next/link';
import {notFound} from 'next/navigation';
import {articles,type ArticleSlug} from '@/lib/content';
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:articles[slug as ArticleSlug]?.title||'Care notes'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=articles[slug as ArticleSlug];if(!article)notFound();return <article className="article-page shell"><Link className="text-link" href="/insights">← All care notes</Link><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className="lede">{article.dek}</p>{article.sections.map(([t,b])=><section key={t}><h2>{t}</h2><p>{b}</p></section>)}<Link className="button primary" href="/#contact">Join early access ↗</Link></article>}
