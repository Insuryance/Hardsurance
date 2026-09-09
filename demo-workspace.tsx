'use client';

import { useEffect, useState } from 'react';

const scenarios = {
  Robotics: {
    operation: 'Autonomous inspection robot, customer facility, remote software update v4.8',
    clause: 'Products and completed operations endorsement, form PL 14 02',
    finding: 'Coverage may not follow a material autonomy change after deployment.',
    action: 'Disclose the update cadence and add affirmative software-trigger language.',
    severity: 'Material gap',
  },
  Drones: {
    operation: 'BVLOS corridor, 18 kg payload, third-party pilot, two operating states',
    clause: 'Territory and approved-use schedule, aviation liability section 4',
    finding: 'One mission state is outside the scheduled operating territory.',
    action: 'Extend territory before the route becomes operational.',
    severity: 'Boundary conflict',
  },
  'Data center': {
    operation: 'Cooling loop B-14, specialist maintenance vendor, 2.8 MW customer load',
    clause: 'Dependent business interruption, named supplier schedule',
    finding: 'The cooling vendor is absent from the dependent property schedule.',
    action: 'Add the vendor and validate the interruption sublimit.',
    severity: 'Dependency gap',
  },
  Space: {
    operation: 'Payload in road transit before launch-site integration',
    clause: 'Marine cargo termination and pre-launch inception provisions',
    finding: 'There is a twelve-hour handoff with no confirmed responding policy.',
    action: 'Align cargo termination with pre-launch attachment.',
    severity: 'Handoff gap',
  },
} as const;

type Scenario = keyof typeof scenarios;

export function DemoWorkspace({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Scenario>('Robotics');
  const [stage, setStage] = useState(0);
  const data = scenarios[selected];

  useEffect(() => {
    setStage(0);
    const timers = [650, 1400, 2200, 3050].map((delay, index) =>
      window.setTimeout(() => setStage(index + 1), delay),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [selected]);

  return (
    <div className={`demo-workspace ${compact ? 'compact' : ''}`}>
      <div className="demo-toolbar">
        <div>
          <span className="live-dot" />
          Hardsurance policy test
        </div>
        <span>Scenario simulation</span>
      </div>
      <div className="demo-tabs" aria-label="Select a hardware scenario">
        {(Object.keys(scenarios) as Scenario[]).map((name) => (
          <button key={name} className={selected === name ? 'active' : ''} onClick={() => setSelected(name)}>
            {name}
          </button>
        ))}
      </div>
      <div className="demo-body">
        <aside>
          <p className="eyebrow">Evidence chain</p>
          {['Read operating facts', 'Locate policy clause', 'Test likely response', 'Prepare action'].map((label, index) => (
            <div className={`analysis-step ${stage > index ? 'complete' : stage === index ? 'working' : ''}`} key={label}>
              <span>{stage > index ? '✓' : `0${index + 1}`}</span>
              <div><b>{label}</b><small>{stage > index ? 'Completed' : stage === index ? 'Agent working' : 'Queued'}</small></div>
            </div>
          ))}
        </aside>
        <section className="decision-record">
          <div className="record-head">
            <div><p className="eyebrow">Decision record</p><h3>{selected} coverage test</h3></div>
            <span className={stage === 4 ? 'status ready' : 'status'}>{stage === 4 ? data.severity : 'Analysing'}</span>
          </div>
          <dl>
            <div className={stage >= 1 ? 'revealed' : ''}><dt>Operating fact</dt><dd>{data.operation}</dd></div>
            <div className={stage >= 2 ? 'revealed' : ''}><dt>Policy evidence</dt><dd>{data.clause}</dd></div>
            <div className={stage >= 3 ? 'revealed' : ''}><dt>Finding</dt><dd>{data.finding}</dd></div>
            <div className={stage >= 4 ? 'revealed action' : ''}><dt>Recommended action</dt><dd>{data.action}</dd></div>
          </dl>
        </section>
      </div>
      <div className="demo-foot"><span>Every conclusion links to an operating fact and policy clause.</span><button onClick={() => { setStage(0); window.setTimeout(() => setStage(1), 120); }}>Run again</button></div>
    </div>
  );
}
