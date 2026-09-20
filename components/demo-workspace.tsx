'use client';

import { useEffect, useState } from 'react';

const scenarios = {
  Robotics: {
    operation:
      'Autonomous inspection robot, customer facility, remote software update v4.8',
    clause:
      'Products and completed operations endorsement, form PL 14 02',
    finding:
      'Coverage may not follow a material autonomy change after deployment.',
    action:
      'Disclose the update cadence and add affirmative software-trigger language.',
    severity: 'Material gap',

    document: {
      name: 'Atlas Robotics — Product Liability 2026.pdf',
      pages: 84,
      activePage: 47,
      reference: 'PL 14 02 §3(b)',
      excerpt:
        'Coverage applies to products and completed operations disclosed in the schedule and accepted by the insurer.',
    },

    impact: {
      clauses: '37',
      gaps: '3',
      timeSaved: '11.6h',
      leakage: '$420k',
    },

    actions: [
      'Disclose the remote software update cadence.',
      'Request affirmative software-trigger language.',
      'Add deployed fleet version evidence to the renewal file.',
    ],
  },

  Drones: {
    operation:
      'BVLOS corridor, 18 kg payload, third-party pilot, two operating states',
    clause:
      'Territory and approved-use schedule, aviation liability section 4',
    finding:
      'One mission state is outside the scheduled operating territory.',
    action:
      'Extend territory before the route becomes operational.',
    severity: 'Boundary conflict',

    document: {
      name: 'Aerial Systems — Aviation Liability 2026.pdf',
      pages: 62,
      activePage: 29,
      reference: 'Aviation Liability §4.2',
      excerpt:
        'Covered operations are limited to approved territories, uses and pilots listed in the attached schedule.',
    },

    impact: {
      clauses: '29',
      gaps: '2',
      timeSaved: '8.4h',
      leakage: '$275k',
    },

    actions: [
      'Add the second operating state to the territory schedule.',
      'Confirm the third-party pilot is an approved operator.',
      'Attach BVLOS authorization and route evidence.',
    ],
  },

  'Data center': {
    operation:
      'Cooling loop B-14, specialist maintenance vendor, 2.8 MW customer load',
    clause:
      'Dependent business interruption, named supplier schedule',
    finding:
      'The cooling vendor is absent from the dependent property schedule.',
    action:
      'Add the vendor and validate the interruption sublimit.',
    severity: 'Dependency gap',

    document: {
      name: 'Northstar Compute — Property Package 2026.pdf',
      pages: 116,
      activePage: 73,
      reference: 'Dependent Property §7.1',
      excerpt:
        'Coverage applies only to interruption caused by direct physical loss at a dependent property named in the schedule.',
    },

    impact: {
      clauses: '54',
      gaps: '4',
      timeSaved: '15.2h',
      leakage: '$1.8m',
    },

    actions: [
      'Add the cooling vendor to the dependent property schedule.',
      'Validate the interruption sublimit against customer load.',
      'Link maintenance and replacement evidence to cooling loop B-14.',
    ],
  },

  Space: {
    operation:
      'Payload in road transit before launch-site integration',
    clause:
      'Marine cargo termination and pre-launch inception provisions',
    finding:
      'There is a twelve-hour handoff with no confirmed responding policy.',
    action:
      'Align cargo termination with pre-launch attachment.',
    severity: 'Handoff gap',

    document: {
      name: 'Orbital Node — Transit & Pre-launch 2026.pdf',
      pages: 71,
      activePage: 38,
      reference: 'Attachment Clause §5.4',
      excerpt:
        'Pre-launch coverage attaches after delivery to the integration facility and written acceptance by the launch provider.',
    },

    impact: {
      clauses: '31',
      gaps: '2',
      timeSaved: '9.7h',
      leakage: '$860k',
    },

    actions: [
      'Align cargo termination with pre-launch attachment.',
      'Document custody during the twelve-hour handoff.',
      'Confirm written acceptance evidence with the launch provider.',
    ],
  },
} as const;

const stages = [
  'Open policy PDF',
  'Extract clauses and schedules',
  'Map operating facts',
  'Compare policy to operation',
  'Prepare actions and impact',
];

type Scenario = keyof typeof scenarios;

export function DemoWorkspace({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [selected, setSelected] = useState<Scenario>('Robotics');
  const [stage, setStage] = useState(0);

  const data = scenarios[selected];

  useEffect(() => {
    setStage(0);

    const timers = [550, 1200, 1950, 2750, 3650].map(
      (delay, index) =>
        window.setTimeout(() => setStage(index + 1), delay),
    );

    return () => timers.forEach(window.clearTimeout);
  }, [selected]);

  return (
    <div
      className={`demo-workspace demo-v2 ${
        compact ? 'compact' : ''
      }`}
    >
      <div className="demo-toolbar">
        <div>
          <span className="live-dot" />
          Hardsurance policy intelligence
        </div>

        <span>Illustrative product simulation</span>
      </div>

      <div
        className="demo-tabs"
        aria-label="Select a hardware scenario"
      >
        {(Object.keys(scenarios) as Scenario[]).map((name) => (
          <button
            key={name}
            className={selected === name ? 'active' : ''}
            onClick={() => setSelected(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="demo-body demo-body-v2">
        <section
          className="policy-preview"
          aria-label="Policy PDF preview"
        >
          <div className="pdf-file-head">
            <span className="pdf-badge">PDF</span>

            <div>
              <strong>{data.document.name}</strong>

              <small>
                {data.document.pages} pages · Page{' '}
                {data.document.activePage}
              </small>
            </div>
          </div>

          <div className="pdf-sheet">
            <span className="pdf-page-number">
              {data.document.activePage} / {data.document.pages}
            </span>

            <p className="pdf-title">Policy endorsement</p>

            <i className="pdf-line wide" />
            <i className="pdf-line" />
            <i className="pdf-line short" />

            <div
              className={`pdf-highlight ${
                stage >= 2 ? 'revealed' : ''
              }`}
            >
              <b>{data.document.reference}</b>
              <p>{data.document.excerpt}</p>
            </div>

            <i className="pdf-line wide" />
            <i className="pdf-line" />
            <i className="pdf-line short" />
          </div>

          <div className="parser-state">
            <span className={stage >= 2 ? 'complete' : ''} />

            {stage >= 2
              ? 'Relevant language extracted'
              : 'Parsing policy language'}
          </div>
        </section>

        <section className="decision-record">
          <div className="record-head">
            <div>
              <p className="eyebrow">Coverage comparison</p>
              <h3>{selected} policy test</h3>
            </div>

            <span
              className={
                stage >= 5 ? 'status ready' : 'status'
              }
            >
              {stage >= 5 ? data.severity : 'Analysing'}
            </span>
          </div>

          <div className="agent-progress">
            {stages.map((label, index) => (
              <div
                className={
                  stage > index
                    ? 'complete'
                    : stage === index
                      ? 'working'
                      : ''
                }
                key={label}
              >
                <span>
                  {stage > index ? '✓' : `0${index + 1}`}
                </span>

                <small>{label}</small>
              </div>
            ))}
          </div>

          <dl>
            <div className={stage >= 2 ? 'revealed' : ''}>
              <dt>Policy evidence</dt>
              <dd>{data.clause}</dd>
            </div>

            <div className={stage >= 3 ? 'revealed' : ''}>
              <dt>Operating fact</dt>
              <dd>{data.operation}</dd>
            </div>

            <div className={stage >= 4 ? 'revealed' : ''}>
              <dt>Intelligence finding</dt>
              <dd>{data.finding}</dd>
            </div>

            <div
              className={
                stage >= 5 ? 'revealed action' : ''
              }
            >
              <dt>Recommended action</dt>
              <dd>{data.action}</dd>
            </div>
          </dl>
        </section>

        <aside className="impact-panel">
          <p className="eyebrow">Intelligence impact</p>

          <div className="impact-grid">
            <div className={stage >= 5 ? 'revealed' : ''}>
              <strong>{data.impact.clauses}</strong>
              <span>Clauses mapped</span>
            </div>

            <div className={stage >= 5 ? 'revealed' : ''}>
              <strong>{data.impact.gaps}</strong>
              <span>Gaps surfaced</span>
            </div>

            <div className={stage >= 5 ? 'revealed' : ''}>
              <strong>{data.impact.timeSaved}</strong>
              <span>Estimated review time saved</span>
            </div>

            <div className={stage >= 5 ? 'revealed' : ''}>
              <strong>{data.impact.leakage}</strong>
              <span>Potential leakage · illustrative</span>
            </div>
          </div>

          <div className="next-actions">
            <b>Prepared next actions</b>

            <ol>
              {data.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <small className="demo-disclaimer">
            Illustrative analysis only. Final coverage depends
            on the complete policy, facts and carrier
            determination.
          </small>
        </aside>
      </div>

      <div className="demo-foot">
        <span>
          Every conclusion remains linked to an operating fact
          and policy clause.
        </span>

        <button
          onClick={() => {
            setStage(0);
            window.setTimeout(() => setStage(1), 120);
          }}
        >
          Run again
        </button>
      </div>
    </div>
  );
}
