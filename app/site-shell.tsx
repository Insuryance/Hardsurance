"use client";

import Link from "next/link";
import { useState } from "react";

type Page = "home" | "product" | "use-cases" | "demo" | "resources" | "company";
const Arrow = () => <span aria-hidden>↗</span>;

const capabilities = [
  { n: "01", title: "Map every asset", body: "Turn BOMs, contracts, telemetry and site data into a living risk graph—from a $12 sensor to a $120M facility." },
  { n: "02", title: "Compare the real cover", body: "Normalize quotes across carriers. See premiums, exclusions, deductibles and coverage gaps on one decision-ready screen." },
  { n: "03", title: "Interrogate every policy", body: "Ask plain-English questions and surface silent cyber, territorial, testing and consequential-loss loopholes before they matter." },
  { n: "04", title: "Design coverage around you", body: "Build a policy brief around your assets, failure modes, vendors, customers and stage—not a generic industry template." },
];

const industries = [
  ["Data centers", "Power chains, cooling, uptime SLAs and cross-border capacity."],
  ["Robotics & humanoids", "Product liability, autonomy, fleet learning and field deployment."],
  ["Drones & autonomy", "Airframes, payloads, BVLOS operations and third-party exposure."],
  ["Space & satellites", "Pre-launch, launch, in-orbit and ground-station risk in one view."],
  ["Advanced manufacturing", "Equipment breakdown, supply dependencies and recall scenarios."],
  ["Climate & energy", "Novel equipment, performance guarantees and project-level exposure."],
];

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><Link href="/" className="brand" aria-label="Hardsurance home"><span className="brand-mark">H</span> HARDSURANCE</Link>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button>
    <nav className={open ? "nav open" : "nav"}>
      <Link href="/product">Product</Link><Link href="/use-cases">Use cases</Link><Link href="/demo">Demo</Link><Link href="/resources">Resources</Link><Link href="/company">Company</Link>
    </nav>
    <Link href="/demo" className="button small desktop-cta">Book a risk review <Arrow /></Link>
  </header>;
}

function Footer() { return <footer><div><Link href="/" className="brand"><span className="brand-mark">H</span> HARDSURANCE</Link><p>Insurance intelligence for the physical world.</p></div><div className="footer-links"><div><b>Explore</b><Link href="/product">Product</Link><Link href="/demo">Demo</Link><Link href="/use-cases">Use cases</Link></div><div><b>Company</b><Link href="/company">About</Link><Link href="/resources">Resources</Link><a href="mailto:hello@hardsurance.com">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Hardsurance. All rights reserved.</span><span>Built for builders of the physical world.</span></div></footer> }

function RiskRoom({ expanded = false }: { expanded?: boolean }) {
  const [tab, setTab] = useState<"assets" | "quotes" | "policy">("assets");
  const content = {
    assets: <><div className="demo-kpi"><span>Insurable value mapped</span><strong>$48.2M</strong><em>↑ 12% since last review</em></div><div className="risk-list"><div><i className="high"/> Cooling loop B-14 <b>Critical</b></div><div><i className="med"/> NVIDIA cluster A <b>Review</b></div><div><i className="low"/> Backup power train <b>Covered</b></div></div></>,
    quotes: <><div className="demo-kpi"><span>Best risk-adjusted option</span><strong>Atlas / Plan B</strong><em>$186k annual saving</em></div><div className="quote-bars"><div><span>Atlas</span><i style={{width:"92%"}}/><b>92</b></div><div><span>Northstar</span><i style={{width:"78%"}}/><b>78</b></div><div><span>Keystone</span><i style={{width:"64%"}}/><b>64</b></div></div></>,
    policy: <><div className="demo-kpi"><span>Policy intelligence</span><strong>7 gaps found</strong><em>2 require action</em></div><div className="clause"><small>Clause 14.2 · Business interruption</small><p>Coverage may not respond if cooling failure originates at a contracted colocation provider.</p><b>Recommended: add dependent-property extension →</b></div></>
  };
  return <div className={expanded ? "risk-room expanded" : "risk-room"}><div className="window-bar"><span/><span/><span/><em>Hardsurance / GCC Expansion 2026</em><b>Live</b></div><div className="demo-body"><aside><strong>RISK ROOM</strong><button className={tab === "assets" ? "active" : ""} onClick={()=>setTab("assets")}>◫ Assets</button><button className={tab === "quotes" ? "active" : ""} onClick={()=>setTab("quotes")}>≋ Quote compare</button><button className={tab === "policy" ? "active" : ""} onClick={()=>setTab("policy")}>⌕ Policy reader</button><span>PORTFOLIO</span><small>72 assets</small><small>4 locations</small><small>3 active policies</small></aside><section className="demo-panel"><div className="panel-head"><div><small>{tab.toUpperCase()}</small><h3>{tab === "assets" ? "Your risk, made legible." : tab === "quotes" ? "Compare cover—not PDFs." : "Find the clause before it finds you."}</h3></div><button>Export brief</button></div>{content[tab]}<div className="copilot-prompt"><span>✦</span><input aria-label="Ask Hardsurance" placeholder="Ask your Insurance CoPilot…"/><button>↑</button></div></section></div></div>;
}

function CTA() { return <section className="cta"><span className="eyebrow">START WITH YOUR RISK GRAPH</span><h2>Your hardware is ambitious.<br/>Your insurance should keep up.</h2><p>Bring a policy, a quote, or just your asset list. We’ll show you what Hardsurance sees.</p><Link href="/demo" className="button light">Book a risk review <Arrow/></Link></section> }

function Home() { return <>
  <main><section className="hero"><div className="hero-copy"><span className="eyebrow">INSURANCE INTELLIGENCE FOR HARDWARE</span><h1>The Insurance CoPilot for the <em>physical world.</em></h1><p>Hardsurance understands every asset you build, buy and operate—then helps you compare, interrogate and design the right cover.</p><div className="hero-actions"><Link href="/demo" className="button">See it in action <Arrow/></Link><Link href="/product" className="text-link">Explore the platform <span>→</span></Link></div><div className="trust"><span>BUILT FOR</span><b>DATA CENTERS</b><b>ROBOTICS</b><b>SPACE</b><b>AUTONOMY</b></div></div><div className="hero-visual"><div className="orb orb1"/><div className="orb orb2"/><div className="asset-card card1"><small>ASSET 0142</small><b>Liquid cooling system</b><span>Risk score <strong>84</strong></span></div><div className="asset-card card2"><small>COVERAGE SIGNAL</small><b>Territorial gap detected</b><span className="alert">Action required</span></div></div></section>
  <section className="manifesto"><span className="eyebrow">WHY HARDSURANCE</span><h2>Hardware risk is complex.<br/><em>Insurance doesn’t have to be.</em></h2><p>Your broker sees a category. We see the machine: each component, dependency, contract, deployment and failure mode—connected end to end.</p></section>
  <section className="cap-grid">{capabilities.map(c=><article key={c.n}><span>{c.n}</span><div className="icon-box">✦</div><h3>{c.title}</h3><p>{c.body}</p><Link href="/product">Learn more →</Link></article>)}</section>
  <section className="demo-section"><div className="section-head"><div><span className="eyebrow">MEET YOUR COPILOT</span><h2>From scattered documents<br/>to one intelligent risk room.</h2></div><p>Click through a live product preview. No forms, no waiting.</p></div><RiskRoom/></section>
  <section className="industry-section"><div className="section-head"><div><span className="eyebrow">BUILT FOR THE EDGE OF INDUSTRY</span><h2>One CoPilot.<br/>Every physical frontier.</h2></div></div><div className="industry-grid">{industries.map((x,i)=><Link href="/use-cases" key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p><b>↗</b></Link>)}</div></section>
  <section className="quote"><span>“</span><blockquote>Insurance used to be the last unread folder in our data room. Hardsurance turned it into an operating advantage.</blockquote><p>— THE KIND OF THING YOUR CFO WILL SAY</p></section><CTA/></main>
  </> }

function Product() { return <main><section className="page-hero"><span className="eyebrow">THE PLATFORM</span><h1>Your insurance function,<br/><em>in one intelligent system.</em></h1><p>Hardsurance connects asset intelligence, market comparison, policy analysis and renewal operations—so every insurance decision starts with ground truth.</p></section><section className="feature-stack">{capabilities.map((c,i)=><article key={c.n}><div><span className="eyebrow">CAPABILITY {c.n}</span><h2>{c.title}</h2><p>{c.body}</p><ul>{i===0?<><li>Ingest BOMs, fixed-asset registers and vendor contracts</li><li>Model dependencies and single points of failure</li><li>Keep declared values current as fleets and sites change</li></>:i===1?<><li>Normalize limits, deductibles and sub-limits</li><li>Score quote quality against your real exposure</li><li>Generate an executive-ready recommendation</li></>:i===2?<><li>Explain dense clauses in plain English</li><li>Flag exclusions, warranties and ambiguous language</li><li>Ask “what happens if?” across the full policy</li></>:<><li>Create a carrier-ready risk narrative</li><li>Recommend endorsements and coverage structure</li><li>Prepare every renewal from live operating data</li></>}</ul></div><div className={`feature-art art-${i}`}><span>{i===0?"72":i===1?"3×":i===2?"14.2":"365"}</span><small>{i===0?"assets mapped":i===1?"quotes normalized":i===2?"critical clause": "days renewal-ready"}</small><i/></div></article>)}</section><CTA/></main> }

function UseCases() { return <main><section className="page-hero compact"><span className="eyebrow">USE CASES</span><h1>Purpose-built for<br/><em>what hasn’t been insured before.</em></h1><p>Novel technology creates novel failure modes. Hardsurance turns technical truth into insurance the market can understand and underwrite.</p></section><section className="use-list">{industries.map((x,i)=><article key={x[0]}><span>0{i+1}</span><div><h2>{x[0]}</h2><p>{x[1]}</p></div><ul><li>{["Business interruption modelling","Autonomy & product liability","Aviation liability & hull","Launch and in-orbit cover","Equipment breakdown & recall","Performance and project risk"][i]}</li><li>Asset and dependency mapping</li><li>Quote and policy intelligence</li></ul><b>Explore →</b></article>)}</section><CTA/></main> }

function Demo() { return <main><section className="page-hero demo-hero"><span className="eyebrow">INTERACTIVE DEMO</span><h1>Step inside your<br/><em>insurance risk room.</em></h1><p>Explore three real workflows. Then bring us one policy or asset list and we’ll build yours.</p></section><section className="demo-page"><RiskRoom expanded/><div className="demo-notes"><article><span>01</span><h3>Start with assets</h3><p>See where value, dependency and operational risk actually live.</p></article><article><span>02</span><h3>Pressure-test quotes</h3><p>Compare what each option covers against your actual exposure.</p></article><article><span>03</span><h3>Interrogate language</h3><p>Find exclusions and get a precise negotiation recommendation.</p></article></div></section><CTA/></main> }

const posts = [
 ["Founder’s guide", "Why hardware founders cannot leave insurance until diligence", "A practical roadmap from first prototype to global deployments."],
 ["Operating model", "Do you need an internal insurance team—or an Insurance CoPilot?", "How large hardware companies run insurance, and what an AI-native function changes."],
 ["Deep dive", "The silent exclusions hiding inside robotics policies", "Testing, autonomy, cyber-physical events and the words that decide whether cover responds."],
 ["Playbook", "How to insure a data center before the first rack goes live", "Map power, cooling, suppliers and customer SLAs into a defensible risk story."],
 ["Market brief", "From launchpad to orbit: a modern satellite insurance stack", "What changes across pre-launch, launch, commissioning and in-orbit operations."],
 ["Field notes", "Your BOM is already an insurance document", "Turn engineering data into better declared values, coverage and carrier conversations."],
];
function Resources() { return <main><section className="page-hero compact"><span className="eyebrow">HARDWARE RISK LIBRARY</span><h1>Insurance intelligence<br/><em>for people who build.</em></h1><p>Sharp, practical thinking for founders, finance leaders and operators navigating risk in the physical world.</p></section><section className="posts">{posts.map((p,i)=><article key={p[1]} className={i===0?"featured":""}><div className="post-art"><span>0{i+1}</span><i/></div><div><span className="eyebrow">{p[0]}</span><h2>{p[1]}</h2><p>{p[2]}</p><a href={`mailto:hello@hardsurance.com?subject=${encodeURIComponent(p[1])}`}>Request the full article →</a></div></article>)}</section><CTA/></main> }

function Company() { return <main><section className="page-hero"><span className="eyebrow">OUR POINT OF VIEW</span><h1>The future is physical.<br/><em>Its insurance should be intelligent.</em></h1><p>We are building the operating system for hardware risk—so the companies reshaping atoms can move as confidently as those moving bits.</p></section><section className="beliefs"><article><span>01</span><h2>Insurance is an engineering problem.</h2><p>Coverage gets better when it starts with how the product, facility or fleet actually works.</p></article><article><span>02</span><h2>Every company deserves an expert function.</h2><p>Not every hardware company can build the internal insurance teams found at global industrials. Hardsurance makes that capability accessible from day one.</p></article><article><span>03</span><h2>Clarity compounds.</h2><p>A living risk model improves every renewal, carrier conversation, board decision and customer contract.</p></article></section><section className="company-strip"><span>BASED IN INDIA · BUILT FOR THE WORLD</span><h2>We speak hardware.<br/>We speak risk.<br/><em>Let’s build.</em></h2><a className="button light" href="mailto:hello@hardsurance.com">hello@hardsurance.com <Arrow/></a></section></main> }

export function SiteShell({ page }: { page: Page }) {
  const body = page === "home" ? <Home/> : page === "product" ? <Product/> : page === "use-cases" ? <UseCases/> : page === "demo" ? <Demo/> : page === "resources" ? <Resources/> : <Company/>;
  return <><Header/>{body}<Footer/></>;
}
