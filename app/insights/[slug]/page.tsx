import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, type ArticleSlug } from '@/lib/content';

export function generateStaticParams() { return Object.keys(articles).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  return article ? { title: article.title, description: article.dek } : {};
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];
  if (!article) notFound();
  return <article className="article-page shell"><header><Link href="/insights" className="back-link">← All field notes</Link><p className="eyebrow">{article.category} · Field note</p><h1>{article.title}</h1><p className="article-dek">{article.dek}</p></header><aside><span>Primary public source</span><a href={article.sourceUrl} target="_blank" rel="noreferrer">{article.source} ↗</a><p>This field note is educational and not legal, insurance or claims advice.</p></aside><div className="article-body">{article.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}</div><footer><p>Test this issue against your own policy and operating facts.</p><Link className="button primary" href="/#contact">Book a founder review</Link></footer></article>;
}
