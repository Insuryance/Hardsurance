import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoWorkspace } from '@/components/demo-workspace';

export const metadata: Metadata = { title: 'Interactive demo', description: 'Run an interactive Hardsurance policy test.' };

export default function DemoPage() {
  return <><section className="page-hero shell"><p className="eyebrow">Interactive demo</p><h1>Follow a coverage decision from fact to action.</h1><p>Select a hardware scenario. The agents connect the operation to policy evidence, identify the conflict and prepare the next action.</p></section><section className="demo-page shell"><DemoWorkspace /><div className="demo-notes"><article><span>01</span><h3>Grounded in facts</h3><p>Every finding starts with a specific operating state, location, asset or dependency.</p></article><article><span>02</span><h3>Tied to language</h3><p>The decision record points to the form, schedule or endorsement behind the conclusion.</p></article><article><span>03</span><h3>Designed for action</h3><p>Founders, brokers and operators get a precise question to resolve before renewal.</p></article></div><div className="page-cta"><p>Want to test your own operating scenario?</p><Link className="button primary" href="/#contact">Book a founder review</Link></div></section></>;
}
