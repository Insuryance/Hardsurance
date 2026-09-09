import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCases, type UseCaseSlug } from '@/lib/content';

const articleFor: Record<UseCaseSlug, string> = {
  robotics: 'critical-infrastructure-dependencies',
  drones: 'bvlos-policy-boundaries',
  'data-centers': 'critical-infrastructure-dependencies',
  space: 'prelaunch-coverage',
};

export function generateStaticParams() { return Object.keys(useCases).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = useCases[slug as UseCaseSlug];
  return item ? { title: item.label, description: item.description } : {};
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = useCases[slug as UseCaseSlug];
  if (!item) notFound();
  return <><section className="case-hero"><video autoPlay muted loop playsInline preload="metadata"><source src={item.film} type="video/mp4" /></video><div className="film-shade"/><div className="shell"><p className="eyebrow">{item.label}</p><h1>{item.title}</h1><p>{item.description}</p><Link className="button primary" href="/demo">Run a scenario</Link></div></section><section className="case-risks light"><div className="shell"><div className="section-head row"><div><p className="eyebrow">What the agents test</p><h2>The policy around the operation.</h2></div><p>Each test begins with a real loss scenario, not a generic checklist.</p></div><div className="risk-list">{item.risks.map((risk, index) => <article key={risk}><span>0{index+1}</span><h3>{risk}</h3><p>The agent connects the operating fact, responsible party, policy provision and required evidence.</p></article>)}</div></div></section><section className="method shell"><div className="section-head"><p className="eyebrow">Method</p><h2>A clear path to a defensible answer.</h2></div><ol><li><span>01</span><div><h3>Describe the operation</h3><p>Capture who controls the system, where it operates and what changes during the scenario.</p></div></li><li><span>02</span><div><h3>Trace the responding policy</h3><p>Locate the relevant coverage, conditions, exclusions, limits and handoffs.</p></div></li><li><span>03</span><div><h3>Resolve the conflict</h3><p>Prepare a carrier question, endorsement request or evidence action with a named owner.</p></div></li></ol><Link className="text-link" href={`/insights/${articleFor[slug as UseCaseSlug]}`}>Read the related field note ↗</Link></section><section className="page-cta light"><p>Test a {item.label.toLowerCase()} scenario against your policy.</p><Link className="button dark" href="/#contact">Book a founder review</Link></section></>;
}
