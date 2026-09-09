import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Product', description: 'The Hardsurance agent system for hardware insurance operations.' };

const agents = [
  ['Asset agent', 'Builds a living map of machines, software, vendors, values and locations.', 'A risk model that reflects the operating system.'],
  ['Policy agent', 'Reads forms, schedules, endorsements, exclusions and sublimits.', 'A structured record of what each policy promises.'],
  ['Coverage agent', 'Tests real operating scenarios against the policy stack.', 'Specific findings with evidence and confidence.'],
  ['Renewal agent', 'Tracks open questions, missing evidence and carrier decisions.', 'A renewal process that starts before the deadline.'],
  ['Claim readiness agent', 'Preserves the facts, versions and records behind key decisions.', 'A cleaner evidence trail if a loss occurs.'],
];

export default function ProductPage() {
  return <><section className="page-hero shell"><p className="eyebrow">The product</p><h1>Five agents. One decision record.</h1><p>Hardsurance gives every insurance decision a traceable path from the physical operation to the policy clause and the action that follows.</p><div className="actions"><Link className="button primary" href="/demo">Run the demo</Link><Link className="button text" href="/#contact">Book a review ↗</Link></div></section><section className="agent-list light"><div className="shell"><div className="section-head"><p className="eyebrow">Agent system</p><h2>Specialists that work as one team.</h2></div>{agents.map(([name, description, output], index) => <article key={name}><span>0{index+1}</span><h3>{name}</h3><p>{description}</p><b>{output}</b></article>)}</div></section><section className="architecture shell"><div className="section-head row"><div><p className="eyebrow">How it connects</p><h2>From operating signal to insurance action.</h2></div><p>The interface stays simple because the evidence model underneath is structured.</p></div><div className="architecture-flow"><div><span>INPUT</span><b>Assets<br/>Policies<br/>Contracts<br/>Operating data</b></div><i>→</i><div className="core"><span>HARDSURANCE</span><b>Risk graph<br/>Policy graph<br/>Evidence chain</b></div><i>→</i><div><span>OUTPUT</span><b>Coverage gaps<br/>Carrier questions<br/>Decision briefs</b></div></div></section><section className="page-cta light"><p>See one decision build itself in real time.</p><Link className="button dark" href="/demo">Open interactive demo</Link></section></>;
}
