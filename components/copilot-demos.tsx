'use client';

import { useEffect, useId, useRef, useState } from 'react';

const records = [
  {
    id: 'SW',
    title: 'Autonomy update',
    agent: 'Policy copilot',
    status: 'Review',
    x: 48,
    y: 31,
    checked: 24,
    flagged: 6,
    hours: '2.4h',
    trend: [2, 3, 3, 4, 4, 5, 6],
    event: 'Firmware v4.8 changes the operating envelope.',
    source: 'Sample robotics policy · endorsement R-02, §3',
    clause:
      'Material changes to declared operations must be notified before deployment.',
    fact:
      'Six deployment records include an autonomy change; carrier acknowledgement is absent in this sample.',
    action:
      'Ask the broker to confirm the notification requirement and obtain written acknowledgement.',
    test:
      'Match each changed deployment to an acknowledgement record.',
  },
  {
    id: 'BV',
    title: 'Flight boundary',
    agent: 'Operations copilot',
    status: 'Review',
    x: 77,
    y: 53,
    checked: 18,
    flagged: 3,
    hours: '1.6h',
    trend: [1, 1, 2, 2, 3, 3, 3],
    event:
      'Three missions extend beyond the declared flight area.',
    source: 'Sample drone policy · schedule D-01, §2',
    clause:
      'The insured operation is limited to the area described in the schedule.',
    fact:
      'Three of eighteen sample mission plans extend beyond the scheduled area.',
    action:
      'Reconcile mission coordinates with the schedule and request confirmation for the proposed area.',
    test:
      'Compare planned mission boundaries with scheduled operating areas.',
  },
  {
    id: 'PW',
    title: 'Power dependency',
    agent: 'Evidence copilot',
    status: 'Matched',
    x: 24,
    y: 59,
    checked: 12,
    flagged: 0,
    hours: '1.2h',
    trend: [2, 2, 1, 1, 0, 0, 0],
    event:
      'All twelve declared power dependencies have evidence.',
    source: 'Sample property policy · schedule P-04, §1',
    clause:
      'Declared service locations are listed in the attached dependency schedule.',
    fact:
      'All twelve sample dependencies match a scheduled location. This test does not determine claim coverage.',
    action:
      'Retain the location mapping and repeat the check when a supplier changes.',
    test:
      'Match each power dependency to a declared location and evidence file.',
  },
  {
    id: 'CH',
    title: 'Custody handoff',
    agent: 'Claims copilot',
    status: 'Review',
    x: 54,
    y: 77,
    checked: 10,
    flagged: 2,
    hours: '1.8h',
    trend: [0, 1, 1, 1, 2, 2, 2],
    event:
      'Two payload transfers have incomplete acceptance records.',
    source: 'Sample transit policy · condition T-03, §4',
    clause:
      'The transfer record must identify the receiving party and time of acceptance.',
    fact:
      'Two sample transfers lack a signed acceptance time at the custody handoff.',
    action:
      'Obtain the handoff records and ask the broker to confirm attachment and termination timing.',
    test:
      'Check each transfer for a named custodian and signed acceptance time.',
  },
  {
    id: 'RN',
    title: 'Renewal evidence',
    agent: 'Renewal copilot',
    status: 'Matched',
    x: 22,
    y: 21,
    checked: 16,
    flagged: 0,
    hours: '1.0h',
    trend: [4, 3, 2, 2, 1, 0, 0],
    event:
      'Sixteen requested documents are linked to the renewal.',
    source: 'Sample renewal checklist · request Q-05',
    clause:
      'Provide the current asset register and requested operating evidence.',
    fact:
      'All sixteen requested documents are present in the example renewal record.',
    action:
      'Have the responsible owner verify accuracy before sending the submission.',
    test:
      'Compare the requested-document list with the linked evidence register.',
  },
] as const;

type RecordItem = (typeof records)[number];

function Trend({ values }: { values: readonly number[] }) {
  const maximum = Math.max(...values, 1);

  const points = values
    .map(
      (value, index) =>
        `${index * 30},${42 - (value / maximum) * 34}`,
    )
    .join(' ');

  return (
    <svg
      viewBox="0 0 180 48"
      className="hc-trend"
      role="img"
      aria-label={`Sample flagged records over seven days: ${values.join(', ')}`}
    >
      <polygon
        points={`0,48 ${points} 180,48`}
        fill="currentColor"
        opacity=".1"
      />
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CopilotDemos() {
  const [selection, setSelection] = useState<{
    item: RecordItem;
    test: boolean;
  } | null>(null);

  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const total = records.reduce(
    (sum, item) => sum + item.checked,
    0,
  );

  const flagged = records.reduce(
    (sum, item) => sum + item.flagged,
    0,
  );

  useEffect(() => {
    if (
      selection &&
      dialog.current &&
      !dialog.current.open
    ) {
      dialog.current.showModal();
    }
  }, [selection]);

  function close() {
    dialog.current?.close();
    setSelection(null);
  }

  return (
    <div className="hc-demos">
      <section
        className="hc-section"
        aria-label="Operating risk map demo"
      >
        <div className="hc-heading">
          <div>
            <p className="eyebrow">
              01 / Operating intelligence
            </p>
            <h2>Every signal has a story.</h2>
          </div>

          <p>
            Follow the operating change to the policy question.
            Select a signal to inspect its evidence, sample
            statistics and next action.
          </p>
        </div>

        <div className="hc-stage">
          <div className="hc-window">
            <div className="hc-bar">
              <span>H / copilot / operating-map</span>
              <span className="hc-pill">
                Interactive sample
              </span>
            </div>

            <div className="hc-map-layout">
              <div className="hc-feed">
                <div className="hc-panel-title">
                  Operating signals
                  <span>5 records</span>
                </div>

                {records.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    className="hc-trace"
                    onClick={() =>
                      setSelection({ item, test: false })
                    }
                    aria-haspopup="dialog"
                  >
                    <span className="hc-trace-meta">
                      0{index + 1} / {item.agent}
                    </span>

                    <strong>
                      {item.title}
                      <span aria-hidden="true">↗</span>
                    </strong>

                    <span>{item.event}</span>

                    <span
                      className={`hc-status ${
                        item.flagged ? 'hc-review' : ''
                      }`}
                    >
                      {item.status}
                    </span>
                  </button>
                ))}
              </div>

              <div className="hc-map-panel">
                <div className="hc-panel-title">
                  Evidence relationships
                  <span>3 review / 2 matched</span>
                </div>

                <div className="hc-map">
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="hc-links"
                  >
                    <path
                      d="
                        M22 21
                        Q32 37 48 31
                        T77 53
                        Q74 76 54 77
                        Q32 79 24 59
                        Q17 44 22 21
                        M24 59
                        Q42 65 48 31
                        M48 31
                        Q68 50 54 77
                      "
                    />
                  </svg>

                  {records.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`hc-node ${
                        item.flagged ? 'hc-review' : ''
                      }`}
                      style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                      }}
                      onClick={() =>
                        setSelection({ item, test: false })
                      }
                      aria-label={`Inspect ${item.title}`}
                      aria-haspopup="dialog"
                    >
                      <span className="hc-bubble">
                        {item.id}
                      </span>

                      <strong>{item.title}</strong>

                      <small>
                        {item.flagged
                          ? `${item.flagged} flagged`
                          : 'Evidence matched'}
                      </small>
                    </button>
                  ))}

                  <span className="hc-map-note">
                    Select a node to inspect ↗
                  </span>
                </div>
              </div>
            </div>

            <div className="hc-console">
              <span>Sample portfolio</span>
              <span>
                {total} records checked · {flagged} flagged
                for review
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="hc-section"
        aria-label="Policy test register demo"
      >
        <div className="hc-heading">
          <div>
            <p className="eyebrow">
              02 / Policy intelligence
            </p>
            <h2>Turn a question into a test.</h2>
          </div>

          <p>
            Inspect what each copilot checked, what is missing
            and who needs to act. Select any row to open the
            test record.
          </p>
        </div>

        <div className="hc-stage hc-stage-tests">
          <div className="hc-window">
            <div className="hc-bar">
              <span>H / copilot / policy-tests</span>
              <span className="hc-pill">
                Illustrative results
              </span>
            </div>

            <div className="hc-register-summary">
              <div>
                <strong>{total}</strong>
                <span>Records checked</span>
              </div>

              <div>
                <strong>{flagged}</strong>
                <span>Flagged for review</span>
              </div>

              <div>
                <strong>5</strong>
                <span>Copilot checks</span>
              </div>
            </div>

            <div
              className="hc-test-head"
              aria-hidden="true"
            >
              <span>Test / responsible copilot</span>
              <span>Evidence matched</span>
              <span>7-day flags</span>
              <span>Status</span>
            </div>

            {records.map((item) => (
              <button
                type="button"
                key={item.id}
                className="hc-test-row"
                onClick={() =>
                  setSelection({ item, test: true })
                }
                aria-label={`Inspect ${item.title} test`}
                aria-haspopup="dialog"
              >
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.agent}</small>
                </span>

                <span className="hc-match">
                  <span>
                    {item.checked - item.flagged} /{' '}
                    {item.checked} matched
                  </span>

                  <span className="hc-meter">
                    <i
                      style={{
                        width: `${
                          (1 - item.flagged / item.checked) *
                          100
                        }%`,
                      }}
                    />
                  </span>
                </span>

                <Trend values={item.trend} />

                <span
                  className={`hc-status ${
                    item.flagged ? 'hc-review' : ''
                  }`}
                >
                  {item.status} ↗
                </span>
              </button>
            ))}

            <div className="hc-console">
              <span>Evidence first</span>
              <span>
                Select a test to view its rule and next action
              </span>
            </div>
          </div>
        </div>
      </section>

      <p className="hc-disclaimer">
        Interactive demonstration with fictional policies and
        sample statistics. Matched evidence is not a coverage
        determination. Time estimates are illustrative, not
        measured customer savings.
      </p>

      <dialog
        ref={dialog}
        className="hc-dialog"
        aria-labelledby={titleId}
        onClose={() => setSelection(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {selection && (
          <div className="hc-dialog-content">
            <div className="hc-dialog-top">
              <span
                className={`hc-status ${
                  selection.item.flagged ? 'hc-review' : ''
                }`}
              >
                {selection.item.status} ·{' '}
                {selection.item.agent}
              </span>

              <button
                type="button"
                onClick={close}
                aria-label="Close details"
                autoFocus
              >
                ×
              </button>
            </div>

            <h3 id={titleId}>
              {selection.item.title}
              {selection.test ? ' · test record' : ''}
            </h3>

            <div className="hc-stats">
              {[
                ['Checked', selection.item.checked],
                ['Flagged', selection.item.flagged],
                [
                  'Matched',
                  `${Math.round(
                    (1 -
                      selection.item.flagged /
                        selection.item.checked) *
                      100,
                  )}%`,
                ],
                ['Est. time saved', selection.item.hours],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <dl className="hc-evidence">
              {selection.test && (
                <div>
                  <dt>Test rule</dt>
                  <dd>{selection.item.test}</dd>
                </div>
              )}

              <div>
                <dt>Sample source</dt>
                <dd>{selection.item.source}</dd>
              </div>

              <div>
                <dt>Sample wording</dt>
                <dd>“{selection.item.clause}”</dd>
              </div>

              <div>
                <dt>Operating evidence</dt>
                <dd>{selection.item.fact}</dd>
              </div>

              <div>
                <dt>Next action</dt>
                <dd>{selection.item.action}</dd>
              </div>
            </dl>

            <div className="hc-dialog-trend">
              <span>
                Flagged records / 7 sample days
              </span>
              <Trend values={selection.item.trend} />
            </div>

            <p className="hc-disclaimer">
              Fictional example · estimates only · review
              with your broker.
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}
