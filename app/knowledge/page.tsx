import type { Metadata } from 'next';
import Link from 'next/link';

import { articles, useCases } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Knowledge index',
  description:
    'A structured index of Hardsurance, its physical AI insurance workflows, use cases and source-grounded research.',
  alternates: {
    canonical: '/knowledge',
  },
};

const workflow = [
  [
    'Map the operating system',
    'Connect assets, software, people, vendors, contracts and locations into one evidence model.',
  ],
  [
    'Structure policy language',
    'Turn forms, schedules, endorsements, limits and exclusions into a policy model.',
  ],
  [
    'Test the policy',
    'Compare the operating model with the policy model using specific loss and deployment scenarios.',
  ],
  [
    'Prepare action',
    'Surface gaps, preserve evidence and prepare questions, endorsements and renewal actions.',
  ],
];

export default function KnowledgePage() {
  return (
    <>
      <section className="page-hero shell">
        <p className="eyebrow">Knowledge index</p>

        <h1>Insurance intelligence for physical AI.</h1>

        <p>
          A crawlable, structured explanation of what
          Hardsurance does, who it serves and how its agents
          connect real hardware operations to insurance policy
          language.
        </p>
      </section>

      <section className="knowledge-section light">
        <div className="shell knowledge-layout">
          <aside>
            <p className="eyebrow">Platform definition</p>
          </aside>

          <div>
            <h2>What is Hardsurance?</h2>

            <p>
              Hardsurance is an insurance intelligence platform
              for companies building and operating robotics,
              drones, data centers and space systems. It maps
              operating facts, structures policy language, tests
              potential coverage gaps and prepares
              evidence-backed actions for founders, operators,
              finance teams and brokers.
            </p>

            <p>
              Hardsurance is a decision-support system. It does
              not replace a licensed broker, carrier, adjuster or
              legal adviser, and its outputs are not binding
              coverage determinations.
            </p>
          </div>
        </div>
      </section>

      <section className="knowledge-section shell">
        <div className="section-head">
          <p className="eyebrow">Core workflow</p>
          <h2>From operating fact to insurance action.</h2>
        </div>

        <div className="knowledge-grid">
          {workflow.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="knowledge-section light">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Operating environments</p>
            <h2>Use-case index.</h2>
          </div>

          <div className="knowledge-links">
            {Object.entries(useCases).map(([slug, item]) => (
              <Link href={`/use-cases/${slug}`} key={slug}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <b>Open use case ↗</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="knowledge-section shell">
        <div className="section-head">
          <p className="eyebrow">Source-grounded research</p>
          <h2>Field-note index.</h2>
        </div>

        <div className="knowledge-links dark-links">
          {Object.entries(articles).map(([slug, article]) => (
            <Link href={`/insights/${slug}`} key={slug}>
              <span>{article.category}</span>
              <strong>{article.title}</strong>
              <p>{article.dek}</p>
              <b>Read field note ↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-cta light">
        <p>Have a specific policy or operating scenario?</p>

        <Link className="button dark" href="/#contact">
          Contact Hardsurance
        </Link>
      </section>
    </>
  );
}
