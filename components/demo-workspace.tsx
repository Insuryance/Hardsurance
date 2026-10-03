'use client';

import {BrandMark} from '@/components/brand-mark';
import { useEffect, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import {saveCareBrief} from '@/lib/care-brief';

const steps = ['Your brand', 'Build the plan', 'Customer preview', 'Service journey'];
const benefits = [
  { id: 'breakdown', title: 'Mechanical & electrical faults', detail: 'Proposed assessment of unexpected mechanical and electrical failures.' },
  { id: 'accidental', title: 'Accidental damage', detail: 'Proposed protection for accidental equipment damage.' },
  { id: 'repair', title: 'Repair coordination', detail: 'Structured issue reporting and service assessment.' },
  { id: 'replacement', title: 'Replacement assessment', detail: 'Consider a replacement when repair may not be suitable.' },
];
const themes = [
  { name: 'Midnight', color: '#243d54' },
  { name: 'Forest', color: '#34554a' },
  { name: 'Violet', color: '#584672' },
  { name: 'Graphite', color: '#30363d' },
];
const hardware = {
  Robotics: { model: 'Flower AMR', image: '/posters/robot-chess.jpg', serial: 'FLW-001' },
  'Field hardware': { model: 'Field Scout', image: '/posters/industrial-site.jpg', serial: 'FLD-001' },
  'AI infrastructure': { model: 'Compute Station', image: '/posters/data-center.jpg', serial: 'CMP-001' },
  'Frontier systems': { model: 'Research Platform', image: '/posters/orbital.jpg', serial: 'RES-001' },
  'Autonomous hardware': { model: 'Autonomous Platform', image: '/posters/autonomous-hardware.jpg', serial: 'AUT-001' },
  'Silicon & AI chips': { model: 'Edge Accelerator', image: '/posters/ai-chips.jpg', serial: 'ACC-001' },
};
type Hardware = keyof typeof hardware;

export function DemoWorkspace({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [brand, setBrand] = useState('Flower Robotics');
  const [program, setProgram] = useState('FlowerCare');
  const [theme, setTheme] = useState(themes[1]);
  const [kind, setKind] = useState<Hardware>('Robotics');
  const [term, setTerm] = useState('24 months');
  const [selected, setSelected] = useState(['breakdown', 'repair']);
  const [placement, setPlacement] = useState('Product page');
  const [enrolled, setEnrolled] = useState(false);
  const [issue, setIssue] = useState('Machine won’t start');
  const [details, setDetails] = useState('The machine stopped during a normal operating cycle.');
  const [requested, setRequested] = useState(false);
  const [notice, setNotice] = useState('');
  const [tour, setTour] = useState(false);
  const [tourPhase, setTourPhase] = useState(0);
  useEffect(() => {
    if (!tour) return;
    const timer = setTimeout(() => {
      const next = tourPhase + 1;
      setTourPhase(next);
      if (next === 1) {setStep(1); setSelected(['breakdown', 'accidental', 'repair']);}
      if (next === 2) {setStep(2); setPlacement('Product page');}
      if (next === 3) {setPlacement('Customer portal'); setEnrolled(true);}
      if (next === 4) {setStep(3); setRequested(false);}
      if (next === 5) {setRequested(true); setTour(false); setNotice('Guided example complete. Edit any field or revisit any step.');}
    }, 5000);
    return () => clearTimeout(timer);
  }, [tour, tourPhase]);
  function stopTour() {if (tour) {setTour(false); setNotice('Guided example paused. You have control; edit any field or change steps.');}}
  function startTour() {reset(); setTourPhase(0); setTour(true); setNotice('Guided FlowerCare example. Hover, focus or touch the workspace to take control.');}

  const brandName = brand.trim() || 'Your brand';
  const programName = program.trim() || 'Your Care+';
  const machine = hardware[kind];
  const chosenBenefits = benefits.filter(b => selected.includes(b.id));
  const hasBenefits = selected.length > 0;

  function navigate(next: number) { setTour(false); setStep(next); setNotice(''); }
  function changed() { setTour(false); setEnrolled(false); setRequested(false); setNotice(''); }
  function reset() {
    setTour(false); setTourPhase(0);
    setStep(0); setBrand('Flower Robotics'); setProgram('FlowerCare'); setTheme(themes[1]);
    setKind('Robotics'); setTerm('24 months'); setSelected(['breakdown', 'repair']);
    setPlacement('Product page'); setEnrolled(false); setRequested(false);
    setIssue('Machine won’t start'); setDetails('The machine stopped during a normal operating cycle.');
    setNotice('Demo reset. Configure a new sample program.');
  }
  function download() {
    const draft = { status: 'illustrative-draft-not-live', brand: brandName, program: programName,
      brandColor: theme.color, hardware: kind, term, benefits: chosenBenefits.map(b => b.title), placement,
      pricing: 'To be confirmed', note: 'Sample configuration only. No coverage, deployment or service is activated.' };
    const url = URL.createObjectURL(new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' }));
    const link = document.createElement('a'); link.href = url; link.download = 'hardsurance-care-draft.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice('Your sample program configuration has been downloaded.');
  }

  return <div className={`care-studio ${compact ? 'studio-compact' : ''}`} style={{ '--brand-color': theme.color } as CSSProperties}>
    <div className="studio-chrome"><div className="window-dots" aria-hidden="true"><i/><i/><i/></div><span>hardsurance / care studio</span><span className="studio-sandbox"><i/> Interactive sandbox</span></div>
    <div className="studio-toolbar"><div><span className="mini-mark"><BrandMark/></span><b>Care Studio</b><span className="toolbar-divider"/><span>{brandName}</span></div><button type="button" onClick={reset}>Reset demo ↺</button></div>
    <div className="studio-steps" onPointerEnter={stopTour} onFocusCapture={stopTour} aria-label="Program builder steps">{steps.map((s, i) => <button key={s} aria-current={step === i ? 'step' : undefined} onClick={() => navigate(i)}><span>{String(i + 1).padStart(2, '0')}</span>{s}<i>{i < step ? '✓' : '→'}</i></button>)}</div>
    <div className="studio-guide"><div><b>Flower Robotics → FlowerCare</b><p>1. Set your brand · 2. Choose benefits · 3. Preview enrollment · 4. Try service</p></div><button onClick={() => tour ? stopTour() : startTour()}>{tour ? 'Pause guided example Ⅱ' : 'Play guided example ▷'}</button></div>
    <div className="studio-content" onPointerEnter={stopTour} onPointerDown={stopTour} onFocusCapture={stopTour}>
      <div className="studio-editor">
        <p className="studio-kicker">{['BRAND CONFIGURATION', 'DESIGNED AROUND YOUR HARDWARE', 'MEET YOUR CUSTOMER EXPERIENCE', 'SERVICE COORDINATION'][step]}</p>
        <h3>{['Configure your brand', 'Define proposed plan benefits', 'Review the customer experience', 'Simulate a service request'][step]}</h3>
        <p className="studio-description">{['Set the company identity, program name and equipment category for the sample customer experience.', 'Choose sample benefits and a term. The customer preview updates as you build.', 'See how your program could appear on a product page or inside a customer portal.', 'Walk through an illustrative service request in the same branded experience.'][step]}</p>
        {step === 0 && <div className="studio-fields"><label>Company name<input maxLength={40} value={brand} onChange={e => { setBrand(e.target.value); changed(); }} placeholder="Your company"/></label><label>Care program name<input maxLength={40} value={program} onChange={e => { setProgram(e.target.value); changed(); }} placeholder="Your Care+"/></label><fieldset><legend>Brand color</legend><div className="theme-options">{themes.map(t => <button key={t.name} aria-label={`${t.name} brand color`} aria-pressed={theme.name === t.name} onClick={() => { setTheme(t); changed(); }} style={{ background: t.color }}>{theme.name === t.name ? '✓' : ''}</button>)}<span>{theme.name}</span></div></fieldset><label>Hardware category<select value={kind} onChange={e => { setKind(e.target.value as Hardware); changed(); }}>{Object.keys(hardware).map(k => <option key={k}>{k}</option>)}</select></label></div>}
        {step === 1 && <div className="studio-fields"><label>Sample plan term<select value={term} onChange={e => { setTerm(e.target.value); changed(); }}><option>12 months</option><option>24 months</option><option>36 months</option></select></label><fieldset><legend>Choose sample benefits</legend><div className="benefit-options">{benefits.map(b => <label key={b.id}><input type="checkbox" checked={selected.includes(b.id)} onChange={e => { setSelected(e.target.checked ? [...selected, b.id] : selected.filter(id => id !== b.id)); changed(); }}/><span><b>{b.title}</b><small>{b.detail}</small></span></label>)}</div></fieldset><p className="studio-note">Illustrative plan design. Final benefits, eligibility, limits and pricing require review before launch.</p>{!hasBenefits && <p className="studio-validation" role="status">Choose at least one benefit to try enrollment.</p>}</div>}
        {step === 2 && <div className="studio-fields"><fieldset><legend>Where customers see your program</legend><div className="placement-options">{['Product page', 'Customer portal'].map(p => <button key={p} aria-pressed={placement === p} onClick={() => setPlacement(p)}>{p === 'Product page' ? '▣' : '▤'} <span>{p}</span></button>)}</div></fieldset><div className="studio-summary"><span>YOUR SAMPLE PROGRAM</span><dl><div><dt>Brand</dt><dd>{brandName}</dd></div><div><dt>Care program</dt><dd>{programName}</dd></div><div><dt>Hardware</dt><dd>{kind}</dd></div><div><dt>Term</dt><dd>{term}</dd></div><div><dt>Benefits</dt><dd>{chosenBenefits.map(b => b.title).join("; ") || "None selected"}</dd></div></dl></div><button className="studio-secondary" onClick={download}>Download sample configuration ↓</button><p className="studio-note">This exports your demo choices. It does not publish a page, activate coverage or connect to your store.</p></div>}
        {step === 3 && <div className="studio-fields"><div className="journey-step"><span>01</span><div><b>Customer reports an issue</b><p>Hardware, symptoms and plan details stay together.</p></div></div><div className="journey-step"><span>02</span><div><b>Eligibility and technical review</b><p>A real request needs assessment against the agreed terms.</p></div></div><div className="journey-step"><span>03</span><div><b>A service route is agreed</b><p>Repair or replacement depends on the plan and assessment.</p></div></div><p className="studio-note">Try the request form in the customer preview. No request leaves this browser.</p></div>}
        <div className="studio-navigation">{step > 0 && <button onClick={() => navigate(step - 1)}>← Back</button>}{step < 3 && <button className="studio-next" onClick={() => navigate(step + 1)}>{['Build your plan', 'Preview the experience', 'Try the service journey'][step]} <span>→</span></button>}{step === 3 && <Link className="studio-next" href="/#contact" onClick={()=>saveCareBrief({source:"Care Studio sample configuration",company:brandName,program:programName,hardware:kind,summary:`${term}; proposed benefits: ${chosenBenefits.map(b=>b.title).join(", ")}. Brand color: ${theme.color}. Placement: ${placement}. Sample configuration, subject to final terms and availability.`})}>Discuss this configuration ↗</Link>}</div>
      </div>
      <div className="studio-preview-area"><div className="preview-label"><span><i/> CUSTOMER VIEW</span><span>Updates as you build</span></div><div className="branded-preview">
        <div className="customer-nav"><span className="customer-monogram">{brandName.slice(0, 1).toUpperCase()}</span><b>{brandName}</b><span>Care and support</span></div>
        {step === 3 ? <div className="customer-service"><p className="customer-eyebrow">{programName} / SUPPORT</p>{requested ? <><div className="customer-success">✓</div><h4>Sample request recorded</h4><p>Sample request <b>DEMO-001</b> created for your {machine.model}.</p><div className="customer-request"><b>{issue}</b><p>{details}</p><span>Awaiting assessment · simulation</span></div><p className="studio-note">No request was sent. No coverage decision or service commitment has been made.</p><button className="customer-button" onClick={() => { setRequested(false); setNotice(''); }}>Try another request</button></> : <><h4>Submit an equipment<br/>service request.</h4><div className="customer-asset"><span>▧</span><div><b>{machine.model}</b><small>{machine.serial} · Sample asset</small></div></div><form onSubmit={e => { e.preventDefault(); if (!details.trim()) { setNotice('Please describe the issue before creating a sample request.'); return; } setRequested(true); setNotice('Sample service request created. Nothing was sent.'); }}><label>What happened?<select value={issue} onChange={e => setIssue(e.target.value)}><option>Machine won’t start</option><option>Mechanical or electrical fault</option><option>Accidental damage</option><option>Something else</option></select></label><label>Describe the issue<textarea required rows={3} maxLength={500} value={details} onChange={e => setDetails(e.target.value)}/></label><button className="customer-button">Create sample request →</button></form></>}</div> : <>
        <div className="customer-image" style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(10,20,30,.65)), url('${machine.image}')` }}><span>{kind.toUpperCase()}</span><h4>{step === 2 && placement === 'Customer portal' ? 'Hardware categories. In good hands.' : 'Hardware care and support'}</h4></div>
        <div className="customer-plan">{step === 2 && placement === 'Customer portal' && <div className="portal-machine"><span className="customer-eyebrow">YOUR REGISTERED HARDWARE</span><div><span>▧</span><div><b>{machine.model}</b><small>{machine.serial} · Sample asset</small></div><i>{enrolled ? 'Sample enrolled' : 'Explore care'}</i></div></div>}<div className="customer-plan-title"><div><span className="customer-eyebrow">{step === 2 && placement === 'Customer portal' ? 'YOUR CARE PROGRAM' : 'PROPOSED CARE PROGRAM'}</span><h4>{programName}</h4></div><span className="care-symbol">+</span></div><p>Proposed care for your {machine.model}.<br/>{term} of illustrative protection.</p><ul>{chosenBenefits.map(b => <li key={b.id}><span>✓</span>{b.title}</li>)}{!hasBenefits && <li>Choose benefits in “Build the plan”.</li>}</ul><div className="customer-price"><span>Pricing to be confirmed</span><span>Sample plan</span></div>{step === 2 ? <button className="customer-button" disabled={!hasBenefits || enrolled} onClick={() => { setEnrolled(true); setNotice('Sample enrollment complete. No payment or coverage was activated.'); }}>{enrolled ? 'Sample enrollment complete ✓' : 'Try sample enrollment →'}</button> : <div className="customer-button customer-button-static">{step === 0 ? 'Your brand. Powered by Hardsurance.' : 'Proposed plan configuration'}</div>}<p className="customer-disclosure">Demo only. No purchase or active coverage.</p></div></>}
        <div className="customer-footer"><span>{brandName} / {programName}</span><span>Sample experience</span></div>
      </div><p className="preview-caption">Your customer relationship. Your identity. Hardsurance behind the scenes.</p></div>
    </div><div className="studio-status" role="status"><span><i/> {notice || 'Demo workspace · sample data · changes reset on reload'}</span><span>Nothing published</span></div>
  </div>;
}
